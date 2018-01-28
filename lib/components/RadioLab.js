import React, { Component } from 'react';
import Radium from 'radium';
import _ from 'lodash';

@Radium
export default class RadioLab extends Component {
  constructor(props) {
    super(props);
    const { init, input } = props;

    let initialSelection = null;
    
    if (!_.isNil(init)) {
        initialSelection = init;
    } else if (input) {
        initialSelection = !_.isNil(input.value) ? input.value : null;
    }

    if (initialSelection === null) console.warn('RadioLab has no initial selection.');

    this.state = {
      selection: initialSelection,
    };
  }

  onClick(value, e) {
    const { input, onChange } = this.props;
  
    //This is so it works with redux-form Field, which passes in input.onChange
    let handleChange = onChange ? onChange : input.onChange;

    this.setState({selection: value});

    handleChange(value)
  }

  render() {
    const {
      children
    } = this.props;

    //create a copy of the children; append props to only the RadioButtons
    //then map the children
    let modifiedChildren = React.Children.map(children, (child, i) => {
      let modChild = new appendPropsToChild(child);
      modChild.addPropsToChild(modChild.oldChild, {}, {
        selection: this.state.selection,
        onClick: this.onClick.bind(this),
      });

      return modChild.newChild;
    });

    return (
      <div>
        {React.createElement('div',
          null,
          React.Children.map(modifiedChildren, child => {
            return React.cloneElement(child, {});
          })
        )}
      </div>
    );
  }
}

class appendPropsToChild {
  constructor(child) {
    this.oldChild = child;
    this.newChild = {};
  }

  //this is to only add props to the RadioButton
  //Note that the children props in immutable, so need to make a copy of children and then
  //add it to a cloned element
  append(child, newChild, newProps) {
    let isRadioButton = child.type ? child.type.displayName === 'RadioButton' : null;

    if (isRadioButton) {
      child = React.cloneElement(child, {...newProps});
    }

    newChild = React.cloneElement(child, {}, []);

    let children = child.props ? child.props.children : null;

    if (!children) {
      newChild = React.cloneElement(child, {});
      return newChild;
    }

    if (typeof children !== 'object') {
      newChild = React.cloneElement(child, {}, children);
      return newChild;
    }

    if (Array.isArray(children)) {
      for (let key in children) {
        newChild.props.children[key] = this.append(children[key], newChild.props.children[key], newProps);
      }
    } else {
      let foundChild = this.append(children, newChild.props.children, newProps);
      newChild = React.cloneElement(child, {}, foundChild);
      return newChild;
    }

    return newChild;
  }

  addPropsToChild(child, newChild, newProps) {
    let updatedChild = this.append(child, newChild, newProps);
    this.newChild = updatedChild;
    return this.newChild;
  }
}
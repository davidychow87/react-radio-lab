# react-radio-lab

React-radio-lab is a react component library for node. It can be used with [redux-form](https://redux-form.com/7.2.1/) and can be readily modified and stylized. You can you the stylize the default circle buttons, or create your own buttons from html. 

![alt text](https://github.com/davidychow87/react-radio-lab/blob/withPics/multicolor.png)

## Table of Contents
* [Installation](#installation)
* [Getting Started](#getting-started)
* [Styling the Radio Buttons](#styling)
* [Creating Unique Buttons](#unique)
* [Use with Redux-Form](#redux-form)

<a name="installation"></a>
## Installation

  ### Install using npm:
  ```javascript
  npm install react-radio-lab
  ```

  ### Import the *RadioLab* and *RadioButton* components to your react file:
  ```javascript
  import { RadioLab, RadioButton } from 'react-radio-lab';
  ```
 
<a name="getting-started"></a> 
## Getting Started

  ### Wrap the *RadioButton* child components with the *RadioLab* component
  
  *RadioButton* - Each *RadioButton* should have a unique *value* (number, string or boolean) by which it can be identified. You can also pass in a label (i.e. 'Button One').
  
  *RadioLab* - Pass an onChange function as a prop, to handle changes when buttons are selected. The onChange function will receive the *value* of the *RadioButton* selected. The *init* prop indicated which *RadioButton* should be selected by default, and should be the *value* of the desired *RadioButton*.
  
  ```javascript
  
  onChange(value) {
    this.setState({selectedValue: value});
  }
  
  render() {
    return (
      <RadioLab onChange={this.onChange} init={"one"}>
        <RadioButton value={"one"}>Button One</RadioButton>
        <RadioButton value={"two"}>Button Two</RadioButton>
      </RadioLab>
    );
  }
  ```
  
  The default (unstyled) buttons look like this:
  
  ![alt text](https://github.com/davidychow87/react-radio-lab/blob/withPics/default.JPG)
  
  ### RadioLab Props
  | prop          | type          | required | notes
  | ------------- |---------------| ---------|---------
  | onChange      | function      | yes       | callback for when RadioButton is selected; receives the value of the selected RadioButton
  | init          | string, boolean, number | no       | init should be the *value* of the RadioButton to be selected by default. Note, do not pass an init if using with redux-form ([see below](#redux-form))
  
  ### RadioButton Props
  | prop          | type          | required | Notes
  | ------------- |---------------| ---------|---------
  | value         | string, boolean, number | yes       | the value identifies the RadioButton and should be unique
  | style         | object        | no    | change the style of the RadioButton, see [styling](#styling), [creating unique buttons](#unique), below.

<a name="styling"></a>
## Styling the Radio Buttons

By default, the radio buttons are composed of an inner and outer circle using [svg circle elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle). You can override the default styles of each *RadioButton* by passing in an object to the *style* prop.

```javascript
  <RadioLab onChange={this.onChange}>
    <RadioButton value={true} style={styles}>True</RadioButton>
    <RadioButton value={false} style={styles}>False</RadioButton>
  </RadioLab>
  
  ....
  
  const styles = {
    //override inner circle style
    innerCircle: {
      r: 10
    },
    //override outer circle style
    outerCircle: {
      fill: '#',
      stroke: '#'
    },
    //override the label properties
    label: {
      fontColor: ''
    },
    //style the container that wraps the label and button svg element
    container: {
      
    }
    //style the wrapper that wraps the container
    wrapper: {
    
    }
  }
```

Below are summaries of the different properties for innerCircle, outerCircle, Note that you may pass in other properties than those listed.
### innerCircle Properties
| Key           | Property      | Default  | Notes
| ------------- |---------------| ---------|---------
| r             | circle radius | 10       | Inner radius should be less than outer radius, should be a number
| fill          | fill color    |          | 
| stroke        | stroke color  |    $1 |
| strokeWidth   | stroke width  |    $1 |

### outerCircleProperties
| Key           | Property      | Default  | Notes
| ------------- |---------------| ---------|---------
| r             | circle radius | 10       | Inner radius should be less than outer radius, should be a number
| fill          | fill color    |          | 
| stroke        | stroke color  |    $1 |
| strokeWidth   | stroke width  |    $1 |

<a name="unique"></a>
## Creating unique buttons

<a name="redux-form"></a>
## Use with Redux-Form






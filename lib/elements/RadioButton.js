import React, { Component } from 'react';
import Radium from 'radium';

@Radium
export default class RadioButton extends Component {
  onClick(e) {
    this.props.onClick(this.props.value, e);
  };

  render() {
    const circle = { cx: 10, cy: 10, r: 8, };

    const {
      children,
      value,
      selection,
    } = this.props;

    //if the selection === value, then it is selected
    const isSelected = value === selection;

    return (
      <div style={styles.choiceBox} onClick={this.onClick.bind(this)} >
        <div style={styles.radioContainer}>
          <svg height="20px" width="20px">
            <circle {...circle} style={[styles.circle]} />
            {isSelected &&
              <circle {...circle} style={[styles.innerCircle]}/>
            }
          </svg>
          <span style={styles.radioLabel}>{children}</span>
        </div>
      </div>
    );
  }
}

const styles = {
  choiceBox: {
    height: 40,
  },
  radioContainer: {
    float: 'left',
    // textAlign: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 10,
    cursor: 'pointer',
  },
  filledCircle: {
    fill: '#0587BE'
  },
  radioLabel: {
    color: '#5f6062',
    fontSize: 14,
    position: 'relative',
    bottom: 5,
    left: 5,
  },
  innerCircle: {
    cx: 10,
    cy: 10,
    r: 5,
    fill: '#888',
  },
  circle: {
    cx: 10,
    cy: 10,
    r: 8,
    stroke: '#888',
    strokeWidth: 2.5,
    fill: '#F4F6FA',
    padding: '2px'
  },
};
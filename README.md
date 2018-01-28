# react-radio-lab

React-radio-lab is a react component library for node. It can be used with [redux-form](https://redux-form.com/7.2.1/) and can be readily modified and stylized. You can you the stylize the default circle buttons, or add your own html tags. 


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
  Required props for *RadioLab*: onChange
  Required props for *RadioButton*: value
  ```javascript
  
  onChange(value) {
    this.setState({selectedValue: value});
  }
  
  render() {
    return (
      <RadioLab onChange={onChange}>
        <RadioButton value={"Button One"}>First Button</RadioButton>
        <RadioButton value={"Button One"}>First Button</RadioButton>
        <RadioButton value={"Button One"}>First Button</RadioButton>
      </RadioLab>
    );
  }
  ```

<a name="styling"></a>
## Styling the Radio Buttons

<a name="unique"></a>
## Creating unique buttons

<a name="redux-form"></a>
## Use with Redux-Form






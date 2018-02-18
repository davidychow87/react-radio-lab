import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

@Radium
export default class RadioButton extends Component {
    componentDidMount() {
        this.setStyle(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.setStyle(nextProps);
    }

    setStyle(props) {
        let innerCircle = {
            fill: '#888',
            r: 5,
            cx: 10, 
            cy: 10, 
            stroke: '#888',
            strokeWidth: 0
        },
        outerCircle = {
            cx: 10,
            cy: 10,
            r: 8,
            stroke: '#888',
            strokeWidth: 2.5,
            fill: '#F4F6FA',
        },
        label = {
            color: '#5f6062',
            fontSize: 14,
            fontFamily: 'arial',
            position: 'relative',
            bottom: 5,
            left: 5,
        },
        container = {
            float: 'left',
            width: '100%',
            height: '100%',
            paddingTop: 10,
            cursor: 'pointer',
        },
        wrapper = {
            height: 40,
        },
        diameter = 20;

        let { style } = props;
        
        if (!style) {
            //no style passed in, use default
            this.setState({ innerCircle, outerCircle, label, container, wrapper, diameter});
        } else {
            //override styles with those passed in
            this.setState({ innerCircle, outerCircle, label, container, wrapper, diameter});
            innerCircle = Object.assign({}, innerCircle, style.innerCircle);
            outerCircle = Object.assign({}, outerCircle, style.outerCircle);
            label = Object.assign({}, label, style.label);
            container = Object.assign({}, container, style.container);
            wrapper = Object.assign({}, wrapper, style.wrapper);

            let outerRadius = outerCircle.r;
            innerCircle.cx = 1.25 * outerRadius;
            innerCircle.cy = 1.25 * outerRadius;
            outerCircle.cx = 1.25 * outerRadius;
            outerCircle.cy = 1.25 * outerRadius;
            diameter = outerRadius * 2.5

            this.setState({ innerCircle, outerCircle, label, container, wrapper, diameter});
        }
    }

    onClick(e) {
        this.props.onClick(this.props.value, e);
    };

    render() {
        const ON = this.props.on;
        const OFF = this.props.off;
        const {
            children,
            value,
            selection,
            style
        } = this.props;

        //if the selection === value, then it is selected
        const isSelected = value === selection;

        return (
            <div style={this.state.wrapper} onClick={this.onClick.bind(this)} >
                <div style={this.state.container}>
                    {isSelected ? <ON {...this.state}/> : <OFF {...this.state}/>}
                    <span style={this.state.label}>{children}</span>
                </div>
            </div>
        );
    }
}

//if no on/off props passed in, default to circle
RadioButton.defaultProps = {
    on: (props) => {
        return (
            <svg height={props.diameter} width={props.diameter}>
                <circle {...props.outerCircle} />
                <circle {...props.innerCircle} />
            </svg>
        );
    },
    off: (props) => {
        return (
            <svg height={props.diameter} width={props.diameter}>
                <circle {...props.outerCircle} />
            </svg>
        );
    }
}

RadioButton.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]).isRequired,
    on: PropTypes.func.isRequired,
    off: PropTypes.func.isRequired,
}
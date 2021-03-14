import React, { Component } from "react";
import '../component_css/Input.css';
import '../component_css/LocationOnHtml.css';

class Input extends Component {
    render() {
        return (
            <div className="page">
            <label className="field field_v1">
                <input type="number" autoComplete= "off" id={this.props.idprop} className="field__input">
                </input>
                <span className="field__label-wrap">
                    <span className="field__label">{this.props.titleprop}</span>
                </span>
            </label>
        </div>
        )
    }
}

export default Input;
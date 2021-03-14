import React, { Component } from "react";
import '../component_css/Button.css';
import '../component_css/LocationOnHtml.css';

class Button extends Component {
    render() {
        return (
            <div className="wrapper">
                <div onClick={ this.props.onclickprop } className="btn from-center">{this.props.titleprop}</div>
            </div>
        )
    }
}

export default Button;
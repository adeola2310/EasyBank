import React, {Component} from 'react';
import './button.css';

class Button extends Component {
    render() {
        return (
            <div>
               <button className="button">
                   {this.props.label}
               </button>
            </div>
        );
    }
}

export default Button;

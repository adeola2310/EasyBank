import React, {Component} from 'react';
import './Header.css';
import '../../UI/button/button';
import Button from "../../UI/button/button";

class Header extends Component {
    render() {
        return (
            <div className="header">
               <nav className="header__nav">
                   <div className="logo">
                       <img src={require('../../images/logo.svg')} alt="logo"/>
                   </div>
                   <ul className="lists">
                       <li className="item">Home</li>
                       <li className="item">Home</li>
                       <li className="item">Home</li>
                       <li className="item">Home</li>
                   </ul>
                       <Button label="Request Invite"/>
                       <img src={require('../../images/icon-hamburger.svg')} className="harmbugger"/>
               </nav>
            </div>
        );
    }
}

export default Header;

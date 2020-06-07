import React, {Component} from 'react';
import './Header.css';
import '../../UI/button/button';
import Button from "../../UI/button/button";
import navIcon from "../../images/icon-hamburger.svg"

class Header extends Component {
    constructor(props) {
        super(props);
        this.showList = this.showList.bind(this);
       this.state = {
           list: false
       }
    }


    showList =()=>{
        this.setState({list: true});
    }


    render() {
        return (
            <>
                <div className="header">
                    <img src={require('../../images/logo.svg')} alt="logo"/>
                    <nav className="header__nav">
                        <ul className={this.state.list ? 'lists' : ''}>
                            <li className="item">Home</li>
                            <li className="item">Home</li>
                            <li className="item">Home</li>
                            <li className="item">Home</li>
                        </ul>

                        {/*<ul className="lists2">*/}
                        {/*    <li className="item">Home</li>*/}
                        {/*    <li className="item">Home</li>*/}
                        {/*    <li className="item">Home</li>*/}
                        {/*    <li className="item">Home</li>*/}
                        {/*</ul>*/}

                    </nav>
                    {/*<Button label="request invite" className="me"/>*/}
                    <button className="me">request invite</button>
                    <img src={navIcon} className="harmbugger" onClick={this.showList}
                         alt="harmburger_icon"/>
                </div>
            </>
        );
    }
}

export default Header;

import React, {Component} from 'react';
import './Footer.css';
import Button from "../../UI/button/button";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
             <div className="footer_list">
                 <div className="logo">
                     <div className="image">
                         <img src={require('../../images/logo.svg')} style={{color: '#ffffff'}}/>
                     </div>
                  <div className="icons">
                      <img src={require('../../images/icon-facebook.svg')} alt="facebook"/>
                      <img src={require('../../images/icon-instagram.svg')} alt="facebook"/>
                      <img src={require('../../images/icon-twitter.svg')} alt="facebook"/>
                      <img src={require('../../images/icon-facebook.svg')} alt="facebook"/>
                  </div>
                 </div>
                 <div className="about">
                     <h6> About</h6>
                     <p style={{fontSize:'12px'}}> hjcbdbc</p>
                     <p style={{fontSize:'12px'}}> hjcbdbc</p>
                     <p style={{fontSize:'12px'}}> hjcbdbc</p>
                 </div>
                 <div className="career">
                     <h6> Careers</h6>
                  <p style={{fontSize:'12px'}}> hjcbdbc</p>
                  <p style={{fontSize:'12px'}}> hjcbdbc</p>
                  <p style={{fontSize:'12px'}}> hjcbdbc</p>

                 </div>
                 <div className="invite">
                     <Button label="Request Invite"/>
                     <p style={{fontSize: '12px'}}>EasyBANK. All rights reserved.</p>
                 </div>
             </div>
            </div>
        );
    }
}

export default Footer;

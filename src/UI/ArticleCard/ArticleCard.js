import React, {Component} from 'react';
import './ArtcleCard.css';

class ArticleCard extends Component {
    render() {
        return (
            <div className="art_card">
                {this.props.img}
            <img src={require('../../images/image-confetti.jpg')} alt="articles" className="art_img"/>
            <div className="content">
                <p className="author">By Adeola Adekoyejo</p>
                <h5 className="title">Take your Easybank card wherever you go</h5>
                <p> We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad.</p>
            </div>

            </div>
        );
    }
}

export default ArticleCard;

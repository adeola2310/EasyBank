import React, {Component} from 'react';
import './ArtcleCard.css';
import propTypes from 'prop-types';

class ArticleCard extends Component {
    render() {
        // let image1 = require('../../images/image-confetti.jpg');
        return (
            <div className="art_card">
                {this.props.images}
            {/* <img src={require('../../images/image-confetti.jpg')} alt="articles" className="art_img"/> */}
            <div className="content">
        <p className="author">{this.props.author}</p>
        <h5 className="title">{this.props.title}</h5>
                <p> {this.props.text}  </p>
            </div>

            </div>
        );
    }
}

ArticleCard.propTypes = {
    author: propTypes.string,
    title: propTypes.string,
    text: propTypes.string,
    images: propTypes.string
};

export default ArticleCard;

import React, {Component} from 'react';
import './ArtcleCard.css';
import propTypes from 'prop-types';

class ArticleCard extends Component {
    render() {
        return (
            <div className="art_card">
                <img src={this.props.src} className="art_img"/>
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
    src: propTypes.string
};

export default ArticleCard;

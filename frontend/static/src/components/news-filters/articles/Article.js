import React, {Component} from 'react';
import './Articles.css';

class Article extends Component {
    render() {
        return (
            <article style={{border: '2px solid red'}} className={`article-${this.props.article.id}`}>
                {
                    // Ignore the warnings.
                    <>
                        {this.props.article.image ? (
                            <img src={this.props.article.image} alt="Nothin' here mate."/>
                        ) : null}
                        <h1>
                            <a href="/">{this.props.article.title}</a>
                        </h1>
                        <p>{this.props.article.author}</p>
                        <p>{this.props.article.article_type}</p>
                        <p>{this.props.article.article_created_at}</p>
                    </>
                }
            </article>
        );
    }
}

export default Article;

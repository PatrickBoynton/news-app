import {Component} from 'react';
import Article from '../articles/Article';
import Ad from '../../ads/Ad';

class Astronomy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        const response = await fetch('/api/v1/articles/astronomy/');
        const data = await response.json();
        this.setState({articles: data});
    }

    render() {
        const astro_articles = this.state.articles?.map(article =>
            article.article_status === 'published' ?
                (
                    <Article key={article.id} article={article}/>
                ) : null
        );
        return <div className="container">
                <Ad/>
                 {astro_articles}
              </div>;
    }
}

export default Astronomy;
import {Component} from 'react';
import Article from './articles/Article';
import Ad from '../Ad';

class Cosmology extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        const response = await fetch('/api/v1/articles/cosmology/');
        const data = await response.json();
        this.setState({articles: data});
    }

    render() {
        const cosmo_articles = this.state.articles?.map(article =>
            article.article_status === 'published'
                ?
                (
                    <div className="container">
                        <Ad/>
                        <Article key={article.id} article={article}/>
                        <Ad/>
                    </div>
                ) : null
        );
        return <>{cosmo_articles}</>;
    }
}

export default Cosmology;
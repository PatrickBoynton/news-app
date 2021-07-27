import {Component} from 'react';
import Article from '../articles/Article';
import Ad from '../../ads/Ad';
import './Cosmology.css';

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
                        <>
                        <Article key={article.id} article={article}/>
                        </>
                ) : null
        );
        return <div className="container"> <Ad/> {cosmo_articles}</div>;
    }
}

export default Cosmology;
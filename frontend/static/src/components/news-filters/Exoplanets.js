import {Component} from 'react';
import Article from './Article';
import Ad from '../Ad';

class Exoplanets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        const response = await fetch('/api/v1/articles/exoplanets/');
        const data = await response.json();
        this.setState({articles: data});
    }

    render() {
        const exo_articles = this.state.articles?.map(article =>
            article.article_status === 'published'
            ?
                (
                    <div className="container">
                        <Ad/>
                        <Article key={article.id} article={article}/>
                        <Ad/>
                    </div>
                ) : null
        )
        return <>{exo_articles}</>;
    }
}

export default Exoplanets;
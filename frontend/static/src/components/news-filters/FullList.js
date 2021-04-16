import {Component} from 'react';
import Article from './Article';
import Ad from '../Ad';

class FullList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    async componentDidMount() {
        const response = await fetch('/api/v1/articles/');
        const data = await response.json();

        this.setState({articles: data});
    }

    render() {
        const articles = this.state.articles?.map((article) =>
            article.article_status === 'published' ? (
                <Article key={article.id} article={article}/>
            ) : null
        );
        return <div className="container">
            <Ad/>
            <div className="item">{articles}</div>
            <Ad/>
        </div>;
    }
}

export default FullList;

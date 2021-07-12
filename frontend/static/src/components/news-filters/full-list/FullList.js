import {Component} from 'react';
import Article from '../articles/Article';
import Ad from '../../Ad';
import './FullList.css';

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
        return <div>
            <div className="container">{articles}</div>
        </div>;
    }
}

export default FullList;

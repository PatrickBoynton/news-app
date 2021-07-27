import {Component} from 'react';
import Article from './articles/Article';
import Ad from '../ads/Ad';

class Editorial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        const response = await fetch('/api/v1/articles/editorial/');
        const data = await response.json();
        this.setState({articles: data});
    }

    render() {
        const editorial_articles = this.state.articles?.map(article =>
            article.article_status === 'published'
                ?
                (
                    <>
                        <Article key={article.id} article={article}/>
                    </>
                ) : null
        );
        return <div className="container">{editorial_articles} <Ad/></div>;
    }
}

export default Editorial;
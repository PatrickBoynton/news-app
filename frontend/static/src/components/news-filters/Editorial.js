import {Component} from 'react';

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
        const editorial_articles = this.state.articles.map(article => <section key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>{article.author}</p>
            <p>{article.article_type}</p>
        </section>)
        return <>{editorial_articles}</>;
    }
}

export default Editorial;
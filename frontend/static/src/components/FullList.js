import {Component} from 'react';

class FullList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        const response = await fetch('/api/v1/articles/');
        const data = await response.json();
        this.setState({articles: data});
    }

    async getArticles() {
        const response = await fetch('/api/v1/articles/');
        const data = await response.json();
        this.setState({articles: data});
    }

    render() {
        const articles = this.state.articles.map(article => <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>{article.author}</p>
        </li>);
        return (
            <ul>
                {articles}
            </ul>
        );
    }
}

export default FullList;
import {Component} from 'react';

class Cosmology extends Component{
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }
    async componentDidMount() {
        const response = await fetch("/api/v1/articles/cosmology/");
        const data = await response.json();
        this.setState({articles: data});
    }

    render() {
        const cosmo_articles = this.state.articles?.map(article => <section key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>{article.author}</p>
            <p>{article.article_type}</p>
        </section>)
        return  <>{cosmo_articles}</>
    }
}

export default Cosmology
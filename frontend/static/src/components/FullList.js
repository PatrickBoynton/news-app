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
        console.log(data);
        this.setState({articles: data});
    }


    render() {
        const articles = this.state.articles.map(article => <section key={article.id}>
            {
                article.article_status === 'published'
                    ?
                    <>
                        <h2>{article.title}</h2>
                        <p>{article.body}</p>
                        <p>{article.author}</p>
                    </>
                    :
                    null
            }
        </section>);
        return (
            <div>
                {articles}
            </div>
        );
    }
}

export default FullList;
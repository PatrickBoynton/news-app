import {Component} from 'react';

class FullList extends Component {
    componentDidMount() {
        fetch('/api/v1/articles')
            .then(response => response.json())
            .then(data => console.log(data));
    }

    render() {
       const articles = fetch("/api/vi/articles")
           .then(response => response.json())
           .then(data => data.map(article => (<li>{article.title}</li>)))
        return (
            <ul>
                {articles}
            </ul>
        );
    }
}

export default FullList;
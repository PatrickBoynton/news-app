import { Component } from "react";

class FullList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("/api/v1/articles/");
    const data = await response.json();

    this.setState({ articles: data });
    console.log(this.state.articles);
  }

  render() {
    const articles = this.state.articles?.map((article) =>
      article.article_status === "published" ? (
        <article key={article.id}>
          {
            // Ignore the warnings.
            <>
              {article.image ? (
                <img src={article.image} alt="Nothin' here mate." />
              ) : null}
              <h1>
                <a href="/">{article.title}</a>
              </h1>
              <p>{article.body}</p>
              <p>{article.author}</p>
              <p>{article.article_type}</p>
              <p>{article.article_created_at}</p>
            </>
          }
        </article>
      ) : null
    );
    return <div>{articles}</div>;
  }
}

export default FullList;

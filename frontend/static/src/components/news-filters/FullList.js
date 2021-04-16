import { Component } from "react";
import Article from "./Article";

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
        <Article article={article} />
      ) : null
    );
    return <div className="container">test {articles} test</div>;
  }
}

export default FullList;

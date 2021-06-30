import { Component } from 'react';
import ArticleDetail from './ArticleDetail';
import './App.css';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    }
  }

  componentDidMount() {
    fetch('api/v1/articles/')
    .then(response => response.json())
    .then(data => this.setState({ articles: data }));
  }

  render () {
    const articleDisplay = this.state.articles.map((article) => (
      <ArticleDetail key={article.id} article={article}/>
    ))
    return (
      <>
      <div className="container">
        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <button>Robotics</button>
            <button>placeholder</button>
            <button>placeholder</button>
            <button>placeholder</button>
            <button>placeholder</button>
            <button>placeholder</button>
          </nav>
        </div>
        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">Welcome to my News App!</h1>
          <p className="lead my-3">More information about my blog app</p>
          </div>
        </div>
      </div>
      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            {articleDisplay}
          </div>
        </div>
      </main>
      </>
    )
  }
}
export default ArticleList;

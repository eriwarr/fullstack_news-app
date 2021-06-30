import { Component } from 'react';

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testing: '',
    }
  }

  render() {
    const article = this.props.article
    return(
      <>
      <div className="col-md-8 blog-main">
        <h2 className="blog-post-title">{article.title}</h2>
        <p className="blog-post-meta">date</p>
        <p>{article.body}</p>
      </div>
      </>
    )
  }
}
export default ArticleDetail

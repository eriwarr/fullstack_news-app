import { Component } from 'react';
import Cookies from 'js-cookie';
import './App.css';

class EditPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value})
  }

  addPost(event) {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(this.state),
    }
    fetch('/api/v1/articles/', options)
      .then(response => response.json());

    this.setState({ title: '', body: ''})
    this.props.handleNavigation('articles')
  }

  render() {
    return (
      <div className="signup-form new-post">
        <form onSubmit={this.addPost}>
          <h2>Create Post</h2>
            <div className="form-group">
              <input className="form-control" name="title" placeholder="What's the name of your blog post?" required="required" onChange={this.handleInput}/>
            </div>
            <div className="form-group">
              <textarea className="form-control" name="body" placeholder="Enter your blog post" required="required" onChange={this.handleInput}></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success btn-lg btn-block">Submit</button>
            </div>
        </form>
      </div>
    )
  }
}
export default EditPost;

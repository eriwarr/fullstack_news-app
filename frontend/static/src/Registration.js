import { Component } from 'react';
import './App.css';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleRegistration(this.state);
  }

  render() {
    return(

      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Create a username</label>
          <input type="text" className="form-control" id="username" name="username" onChange={this.handleInput} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Enter your email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" onChange={this.handleInput} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Choose a password</label>
          <input type="password" className="form-control" id="password" name="password1" onChange={this.handleInput} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Enter Password Again</label>
          <input type="password" className="form-control" id="password" name="password2" onChange={this.handleInput} />
        </div>
        <button type="button" className="btn btn-link" onClick={() => this.props.handleNavigation('login')}>Already have an account? Login!</button>
        <button type="submit" className="btn btn-primary">REGISTER</button>
      </form>

    )
  }
}

export default Registration

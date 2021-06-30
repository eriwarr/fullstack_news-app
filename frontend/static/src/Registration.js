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
    this.props.selection('profile')
  }

  render() {
    return(
      <div className="signup-form">
        <form onSubmit={this.handleSubmit}>
          <h2>Register</h2>
		      <p className="hint-text">"Create your account. It's free and only takes a minute."</p>
            <div className="form-group">
              <input className="username" className="form-control" name="username" placeholder="Username" required="required" onChange={this.handleInput}/>
            </div>
            <div className="form-group">
              <input className="email" className="form-control" name="email" placeholder="Email" required="required" onChange={this.handleInput}/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="password1" placeholder="Password" required="required" onChange={this.handleInput}/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="password2" placeholder="Confirm Password" required="required" onChange={this.handleInput}/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
            </div>
        </form>
        <div className="text-center">Already have an account?<button type="button" className="btn" onClick={() => this.props.handleNavigation('login')}>Login!</button></div>
      </div>
    )
  }
}

export default Registration

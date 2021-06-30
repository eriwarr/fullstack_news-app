import { Component } from 'react';
import './App.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleLogin(this.state);
  }

  render() {
    return(

      <div className="signup-form">
        <form onSubmit={this.handleSubmit}>
          <h2>Sign In</h2>
          <p className="hint-text">"Create your account. It's free and only takes a minute."</p>
            <div className="form-group">
              <input className="username" className="form-control" id="username" name="username" placeholder="Username" required="required" onChange={this.handleInput}/>
            </div>
            <div className="form-group">
              <input className="email" className="form-control" id="email" name="email" placeholder="Email" required="required" onChange={this.handleInput}/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="password" name="password" placeholder="Password" required="required" onChange={this.handleInput}/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success btn-lg btn-block">Log In</button>
            </div>
        </form>
        <div className="text-center">Already have an account?<button type="button" className="btn" onClick={() => this.props.handleNavigation('login')}>Register!</button></div>
      </div>

      // <form onSubmit={this.handleSubmit}>
      //   <div className="mb-3">
      //     <label htmlFor="username" className="form-label">Username</label>
      //     <input type="text" className="form-control" id="username" name="username" onChange={this.handleInput} />
      //   </div>
      //   <div className="mb-3">
      //     <label htmlFor="email" className="form-label">Email address</label>
      //     <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" onChange={this.handleInput} />
      //     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      //   </div>
      //   <div className="mb-3">
      //     <label htmlFor="password" className="form-label">Password</label>
      //     <input type="password" className="form-control" id="password" name="password" onChange={this.handleInput} />
      //   </div>
      //   <button type="button" className="btn btn-link" onClick={() => this.props.handleNavigation('register')}>Need an account? Register!</button>
      //   <button type="submit" className="btn btn-primary">Login</button>
      // </form>
    )
  }
}

export default Login

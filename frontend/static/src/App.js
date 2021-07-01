import './App.css';
import { Component } from 'react';
import Cookies from 'js-cookie';
import CreateProfile from './CreateProfile';
import Registration from './Registration';
import Login from './Login';
import ArticleList from './ArticleList';
import NewPost from './NewPost';
import ProfileDetail from './ProfileDetail';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 'articles',
      user: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  async handleLogin(user) {

    this.setState({ user: user.username});
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user)
    };
    const handleError = (err) => console.warn(err);
    const response = await fetch('rest-auth/login/', options).catch(handleError);

    if(response.ok) {
      const data = await response.json().catch(handleError);
      Cookies.set('Authorization', `Token ${data.key}`);
      this.setState({selection: 'articles'});
    } else {
      // throw error
    }
  }

  async handleRegistration(user){
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user)
    };
    const handleError = (err) => console.warn(err);
    const response = await fetch('/rest-auth/registration/', options).catch(handleError);
    if(response.ok) {
      const data = await response.json().catch(handleError);
      Cookies.set('Authorization', `Token ${data.key}`);
      this.setState({ selection: 'profile' });
    } else {
      // throw an Error
    }
  }

  async handleLogout(){
    const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
  };

    const handleError = (err) => console.warn(err);
    const response = await fetch('/rest-auth/logout/', options).catch(handleError);
    if(response.ok) {
    Cookies.remove('Authorization');
    this.setState({selection: 'login'});
}
  }

  handleNavigation(selection) {
    this.setState({selection});
  }


  render() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Eric's News App</Navbar.Brand>
      <Nav className="mr-auto">
        <button className="btn btn-link text-decoration-none" onClick={() => this.setState({selection: 'articles'})}>Home</button>
        {!!Cookies.get('Authorization') && <button className="btn btn-link text-decoration-none" onClick={() => this.setState({selection: 'profile'})}>View Profile</button>}
        {!!Cookies.get('Authorization') && <button className="btn btn-link text-decoration-none" onClick={() => this.setState({selection: 'newpost'})}>Add New Post</button>}
      </Nav>
        {!!Cookies.get('Authorization')
        ? <button className="btn btn-link text-decoration-none" onClick={this.handleLogout}>LOGOUT</button>
        : <button className="btn btn-link text-decoration-none" onClick={() => this.setState({selection: 'signup'})}>Sign Up</button>
        }
   </Navbar>
    {this.state.selection === 'login' && <Login handleLogin={this.handleLogin} handleNavigation={this.handleNavigation}/>}
    {this.state.selection === 'signup' && <Registration handleRegistration={this.handleRegistration} handleNavigation={this.handleNavigation}/>}
    {this.state.selection === 'profile' && <ProfileDetail/>}
    {this.state.selection === 'articles' && <ArticleList/>}
    {this.state.selection === 'newpost' && <NewPost handleNavigation={this.handleNavigation}/>}
    {this.state.selection === 'create-profile' && <CreateProfile/>}

    </>
  );
  }
}

export default App;

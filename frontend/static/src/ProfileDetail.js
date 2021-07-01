import './App.css';
import { Component } from 'react';

class ProfileDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      preview: '',
    }
    this.handleEditProfile = this.handleEditProfile.bind(this);
  }

  componentDidMount (){
    fetch('api/v1/users/profiles/user')
      .then(response => response.json())
      .then(data => this.setState({preview: data}));
  }

  async handleEditProfile(e) {
    console.log('testing')
  }

  render() {

    return(
      <>
      <div className="container App-header">
        <h2>Card Image</h2>
        <div className="card">
          <img className="card-img-top" src={this.state.preview.avatar} alt="profile"/>
          <div className="card-body">
            <h4 className="card-title">{this.state.preview.display_name}</h4>
            <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            <button className="btn btn-primary edit-profile" onClick={this.handleEditProfile}>Edit Profile</button>
          </div>
        </div>
      </div>

      </>
    )
  }
}
export default ProfileDetail

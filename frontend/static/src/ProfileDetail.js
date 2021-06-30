import './App.css';
import { Component } from 'react';

class ProfileDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      preview: '',

    }
    this.handleViewProfile = this.handleViewProfile.bind(this);
    this.handleEditProfile = this.handleEditProfile.bind(this);
  }

  async handleViewProfile(e) {
    await fetch('api/v1/users/profiles/user')
      .then(response => response.json())
      .then(data => this.setState({preview: data}));

      // .then(data => this.setState({ preview: data.avatar}));


    }

  async handleEditProfile(e) {

  }

  render() {
    return(
      <>
      <button type="button" onClick={this.handleViewProfile}>View Profile</button>
      <button type="button" onClick={this.handleEditProfile}>Edit Profile</button>
      <p>{this.state.preview.display_name}</p>
      {this.state.preview
        // Allows us to show the data
        ? <img src={this.state.preview.avatar} alt="testing"/>
        : null
      }

      </>
    )
  }
}
export default ProfileDetail

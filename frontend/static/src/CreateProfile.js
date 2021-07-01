import './App.css';
import { Component } from 'react';
import Cookies from 'js-cookie';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      avatar: null,
      preview: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  handleImage(e) {
    let file = e.target.files[0];
    this.setState({
      avatar: file,
    });

    console.log(this.state.avatar)

    // Allows use to read the contents of the file is asynchronous
    let reader = new FileReader();
    // Same as .then will wait until file is read and then set the value to state
    reader.onloadend = () => {
      this.setState({
        preview: reader.result,
      });
    }
    // Read the data file as as url
    reader.readAsDataURL(file);
  }

  async handleSubmit(e) {
      e.preventDefault();
      let formData = new FormData();
      formData.append('avatar', this.state.avatar);
      formData.append('display_name', this.state.display_name);

      const options = {
        method: 'POST',
        headers: {
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: formData,
      }
      const response = await fetch('api/v1/users/profiles/', options);
      console.log(response);
    }


  render() {
  return (
    <>
    <form onSubmit={this.handleSubmit}>
    <input type="text" name="display_name" value={this.state.display_name} onChange={this.handleInput}/>
    <input type="file" name="avatar" onChange={this.handleImage}/>

    {this.state.avatar
      // Allows us to show the data
      ? <img src={this.state.preview} alt=""/>
      : null
    }
    <button type="submit">CREATE PROFILES!</button>
    </form>

    </>
  );
  }
}

export default CreateProfile;

import React, { Component } from "react";

class UserForm extends Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
  };

  handleUsernameUpdate = (evt) => {
    this.setState({ username: evt.target.value });
  };
  handleFirstnameUpdate = (evt) => {
    this.setState({ first_name: evt.target.value });
  };
  handleLastnameUpdate = (evt) => {
    this.setState({ last_name: evt.target.value });
  };
  handleEmailUpdate = (evt) => {
    this.setState({ email: evt.target.value });
  };

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.onFormSubmit({ ...this.state });
  };
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <title> Username </title>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameUpdate}
          />
        </div>
        <div>
          <title> Username </title>
          <input
            type="text"
            value={this.state.first_name}
            onChange={this.handleFirstnameUpdate}
          />
        </div>
        <div>
          <title> Lastname </title>
          <input
            type="text"
            value={this.state.last_name}
            onChange={this.handleLastnameUpdate}
          />
        </div>
        <div>
          <title> Email </title>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmailUpdate}
          />
        </div>

        <button type="submit"> Submit </button>
      </form>
    );
  }
}

export default UserForm;

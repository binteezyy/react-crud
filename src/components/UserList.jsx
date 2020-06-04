import React, { Component } from "react";
import User from "./User";
import UserForm from "./UserForm";
import "./User.css";
class UserList extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("http://localhost:8000/api/users/")
      .then((response) => response.json())
      .then((data) => {
        {
          this.setState(() => {
            return {
              data,
            };
          });
        }
      });
  }

  createNewUser = (user) => {
    fetch("http://localhost:8000/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((user) => {
        this.setState({ data: this.state.data.concat([user]) });
      });
  };

  deleteUser = (userId) => {
    fetch("http://localhost:8000/api/users/" + userId + "/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      this.setState({
        data: this.state.data.filter((user) => user.id !== userId),
      });
    });
  };

  render() {
    return (
      <div>
        <table>
          <tr>
            <th> ID </th> <th> Username </th> <th> Firstname </th>{" "}
            <th> Lastname </th> <th> Email address</th>
          </tr>
          {this.state.data.map((user) => (
            <User key={user.id} user={user} onDeleteUser={this.deleteUser} />
          ))}
        </table>
        <UserForm onFormSubmit={this.createNewUser} />
      </div>
    );
  }
}

export default UserList;

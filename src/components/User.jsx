import React, { Component } from "react";

class User extends Component {
  handleDelete = () => {
    this.props.onDeleteUser(this.props.user.id);
  };
  render() {
    return (
      <div>
        <tr>
          <td> {this.props.user.id} </td> <td> {this.props.user.username} </td>
          <td>{this.props.user.first_name} </td>
          <td> {this.props.user.last_name} </td>
          <td> {this.props.user.email}</td>
          <td> as</td> <td> asd</td>
        </tr>
        <button onClick={this.handleDelete}> Delete </button>
      </div>
    );
  }
}

export default User;

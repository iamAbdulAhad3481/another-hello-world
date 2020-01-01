import React, { Component } from 'react'

export class DisplayUsers extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className="container col-md-7 text-justify">
        {
          users.length > 0 ?
            <table className="table table-hover table-striped  ">
              <thead className="thead-dark">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              {users.map(user =>
                <tr key={user.id}>
                  <td>{user.id} </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td><button className="btn btn-primary" >Edit</button></td>
                  <td><button className="btn btn-danger" >Delete</button></td>
                </tr>
              )}
            </table>
            : null
        }
      </div>
    )
  }
}

export default DisplayUsers

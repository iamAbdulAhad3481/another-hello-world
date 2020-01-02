import React, { Component } from 'react'

class GetUsers extends Component {

  render() {
    const { users, errorMsg, deleteHandler, openModal } = this.props
    return (
      <div className="container p-3">
        {
          users.length > 0 ?
            <>
              <table className="table table-hover text-left mt-4">
                <thead className="">
                  <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                {
                  users.map(user =>
                    <tr key={user.id}>
                      <td>{user.id} </td>
                      <td>{user.name} </td>
                      <td>{user.email} </td>
                      <td>{user.phone} </td>
                      <td><button className="btn btn-primary" onClick={() => openModal(user)}>Edit</button></td>
                      <td><button className="btn btn-danger" onClick={() => deleteHandler(user)}>Delete</button></td>
                    </tr>)
                }
              </table>
            </>
            : <h2>{errorMsg}</h2>
        }
      </div>
    )
  }
}

export default GetUsers

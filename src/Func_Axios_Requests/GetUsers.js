import React from 'react';

function GetUsers({ users, error, deleteHandler, editHandler }) {
  return (
    <div className="container">
    {
      users.length > 0 ?
        <table className="table table-hover table-striped ">
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
              <td><button type="button" class="btn btn-dark" onClick={() => editHandler(user)}>Edit</button></td>
              <td><button type="button" class="btn btn-dark" onClick={() => deleteHandler(user)}>Delete</button></td>
            </tr>
          )}
        </table>
        : <h2>{error}</h2>
    }
  </div>
  )
}
export default GetUsers;


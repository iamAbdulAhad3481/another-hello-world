import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Delete } from '../Redux/User/UserActions'

class DisplayUsers extends Component {
  deleteHandler = (user) => {
    const { deleteUser } = this.props
    deleteUser(user)
  }
  render() {
    const { users,openModal } = this.props;
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
                  <td><button className="btn btn-primary" onClick={()=>openModal(user)}>Edit</button></td>
                  <td><button className="btn btn-danger" onClick={() => this.deleteHandler(user)}>Delete</button></td>
                </tr>
              )}
            </table>
            : null
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: (user) => dispatch(Delete(user))
  }
}
export default connect(null,mapDispatchToProps)(DisplayUsers) 

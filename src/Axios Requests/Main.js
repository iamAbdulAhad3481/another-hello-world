import React, { Component } from 'react'
import GetUsers from './GetUsers'
import axios from 'axios'
import EditUserModal from './EditUserModal'
import AddUserModal from './AddUserModal'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      error: null,
      showModal: false,
      selectedUser: {},
      isAddUser: false
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => { this.setState({ users: response.data }) })
      .catch(error => { this.setState({ error: error.message }) })
  }

  closeEditModal = () => {
    this.setState({ showModal: false })
  }

  openUserModal = () => {
    this.setState({ isAddUser: true })
  }
  closeUserModal = () => {
    this.setState({ isAddUser: false })

  }

  addUser = (user) => {
    axios.post('https://jsonplaceholder.typicode.com/users', user)
      .then(response => {
        const users = [...this.state.users, response.data];

        console.log(users)
        this.setState({ users, isAddUser: false, })
      })
      .catch(error => this.setState({ error: error.message }))
  }

  deleteUser = (user) => {
    console.log(user);
    const id = user.id;
    axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .then(response => {
        const newUsers = this.state.users.filter(currentUser => currentUser.id !== id)
        console.log(newUsers)
        this.setState({ users: newUsers })
      })
      .catch(error => this.setState({ error: error.message }))
  }

  editUser = (user) => {
    this.setState({ showModal: true, selectedUser: user, })
  }

  saveModalDetails = (user) => {
    // console.log(user)
    axios.put(`http://jsonplaceholder.typicode.com/users/${user.id}`, user)
      .then(response => {
        const index = this.state.users.findIndex((prevUser) => prevUser.id === user.id)
        console.log(index)
        const tempUser = this.state.users
        tempUser[index] = user;
        this.setState({ users: tempUser, showModal: false })
      })
      .catch(error => {
        console.log(error)
      })

  }


  render() {
    return (
      <div className="container col-md-9 text-left">
        {!this.state.isAddUser && <GetUsers users={this.state.users} error={this.state.error} deleteHandler={this.deleteUser} editHandler={this.editUser} />}
        {!this.state.isAddUser && this.state.showModal && <EditUserModal saveModalDetails={this.saveModalDetails} selectedUser={this.state.selectedUser} closeEditModal={this.closeEditModal} />}
        {!this.state.isAddUser && <button className="btn btn-primary  ml-3 mb-3 " onClick={this.openUserModal}>Add User</button>}
        {this.state.isAddUser && <AddUserModal closeUserModal={this.closeUserModal} addUser={this.addUser} />}

      </div>
    )
  }
}
export default Main






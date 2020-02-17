import React, { Component } from 'react';
import { userAxios } from '../config';
import Table from './Table';
import Form from './Form';
import Modal from './Modal';
import toast from '../toast';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      errorMsg: '',
      isAddUser: false,
      showModal: false,
      selectedUser: []
    }
  }

  componentDidMount() {
    userAxios
      .get('/users')
      .then(response => this.setState({ users: response.data }))
      .catch(error => this.setState({ errorMsg: error.message }))
  }

  deleteUser = id => {
    const confirm = window.confirm('Are you sure you want to delete');
    if (confirm) {
      userAxios
        .delete(`/users/${id}`)
        .then(() => {
          const updatedUsers = this.state.users.filter(user => user.id !== id);
          this.setState({ users: updatedUsers });
          toast.success('Employee deleted successfully');
        })
        .catch(error => {
          this.setState({ errorMsg: error.message });
          toast.error('User is not deleted');
          });
    }
  }

  addUserForm = () => {
    this.setState({ isAddUser: true });
  }
  closeUserForm = () => {
    this.setState({ isAddUser: false });
  }

  addUser = user => {
    userAxios
      .post('/users', user)
      .then(res => {
        const users = [...this.state.users, res.data];
        this.setState({ users, isAddUser: false });
        toast.success('User added succesfully');
      })
      .catch(error => {
        this.setState({ errorMsg: error.message, isAddUser: false })
        toast.error('User is not deleted');
      });
  }

  openModal = user => {
    this.setState({ showModal: true, selectedUser: user });
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  saveModalDetails = user => {
    const { users } = this.state
    userAxios
      .put(`/users/${user.id}`, user)
      .then(() => {
        const index = users.findIndex(prevUser => prevUser.id === user.id);
        const tempUsers = users;
        tempUsers[index] = user;
        this.setState({ users: tempUsers, showModal: false });
        toast.success('Employee updated successfully');
      })
      .catch(error => {
        this.setState({ errorMsg: error.message, showModal: false});
        toast.error('User is not updated');
      });
  }

  render() {
    const { users, errorMsg, isAddUser, showModal, selectedUser } = this.state
    return (
      <div className="container text-left">
        {!isAddUser && <Table users={users} errorMsg={errorMsg} deleteHandler={this.deleteUser} openModal={this.openModal} />}
        {!isAddUser && <button className="btn btn-primary  ml-3 mb-3" onClick={this.addUserForm}>Add User</button>}
        {isAddUser && <Form closeUserForm={this.closeUserForm} addUser={this.addUser} />}
        {!isAddUser && showModal && < Modal closeModal={this.closeModal} selectedUser={selectedUser} saveModalDetails={this.saveModalDetails} />}
      </div>
    )
  }
}

export default Main



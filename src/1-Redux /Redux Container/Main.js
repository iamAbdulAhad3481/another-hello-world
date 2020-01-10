import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers, Delete, Add, Edit } from '../Redux/User/UserActions'
import DisplayUsers from './DisplayUsers'
import AddUser from './AddUser'
import EditUser from './EditUser'


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: {},
      isAddUser: false,
      showModal: false,
      selectedUser: {}
    }
  }

  componentDidMount() {
    const { fetchUser } = this.props
    // console.log(this.props)
    // console.log("Dispatching action")
    fetchUser()
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const { users } = this.props;
      console.log('Component Did Update')
      this.setState({ users })
    }
  }
  deleteUser = user => {
    console.log(user)
    const { Delete } = this.props;
    Delete(user)
  }

  addUser = user => {
    console.log(user);
    const { Add } = this.props;
    Add(user)
  }
  openUserForm = () => {
    this.setState({ isAddUser: true })
  }
  closeUserForm = () => {
    this.setState({ isAddUser: false })
  }

  openModal = (user) => {
    this.setState({ showModal: true, selectedUser: user })
  }
  closeModal = () => {
    this.setState({ showModal: false })
  }
  editUser = user => {
    const { Edit} = this.props;
    const id=user.id
    const index = this.state.users.findIndex(user => user.id === id)
    Edit(user,index)
    this.setState({ showModal: false})
  }


  render() {
    const { users, isAddUser, showModal, selectedUser } = this.state
    return (
      <div>
        <DisplayUsers users={users} deleteHandler={this.deleteUser} openModal={this.openModal} />
        <button className="btn btn-primary " onClick={this.openUserForm}>Add User</button>
        {isAddUser && <AddUser addUser={this.addUser} closeUserForm={this.closeUserForm} />}
        {showModal && <EditUser user={selectedUser} closeModal={this.closeModal} editHandler={this.editUser} />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUsers()),
    Delete: (user) => dispatch(Delete(user)),
    Add: (user) => dispatch(Add(user)),
    Edit: (user,index) => dispatch(Edit(user,index))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)

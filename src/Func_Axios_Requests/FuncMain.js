import React, { useState, useEffect } from 'react'
import axios from 'axios'

import GetUsers from './GetUsers'
import EditUserModal from './EditUserModal'
import AddUserModal from './AddUserModal'

function FuncMain() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  const [isAddUser, setIsAddUser] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => setError(error.message))
  }, [])

  const deleteUser = (user) => {
    console.log(user);
    const id = user.id;
    axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .then(response => {
        const newUsers = users.filter(currentUser => currentUser.id !== id);
        console.log(newUsers);
        setUsers(newUsers)
      })
      .catch(error => setError(error.message))
  }

  const editUser = (user) => {
    setSelectedUser(user)
    setShowModal(true)
  }

  const saveModalDetails = (user) => {
    axios.put(`http://jsonplaceholder.typicode.com/users/${user.id}`, user)
      .then(response => {
        const index = users.findIndex((prevUser) => prevUser.id === user.id);
        console.log(index);
        const tempUser = users;
        tempUser[index] = user;
        setUsers(tempUser);
        setShowModal(false);
      })
      .catch(error => console.log(error))
  }
  const closeEditModal = () => {
    setShowModal(false)
  }
  const openUserModal = () => {
    setIsAddUser(true)
  }

  const closeUserModal = () => {
    setIsAddUser(false)
  }

  const addUser = (user) => {
    
    axios.post('https://jsonplaceholder.typicode.com/users', user)
      .then(response => {
        const Newusers = [...users, response.data];
        console.log(users)
        setUsers(Newusers);
        setIsAddUser(false);
      })
      .catch(error => setError(error.message))
  }


  return (
    <div>
      {!isAddUser && <GetUsers users={users} error={error} deleteHandler={deleteUser} editHandler={editUser} />}
      {!isAddUser && showModal && <EditUserModal saveModalDetails={saveModalDetails} selectedUser={selectedUser} closeEditModal={closeEditModal} />}
      {!isAddUser && <button className="btn btn-primary  mb-3 " onClick={openUserModal}>Add User</button>}
      {isAddUser && <AddUserModal closeUserModal={closeUserModal} addUser={addUser} />}
    </div>
  )
}

export default FuncMain
import React, { useState, useEffect } from 'react';
import {userAxios} from '../config';
import GetUsers from './GetUsers';
import EditUserModal from './EditUserModal';
import AddUserModal from './AddUserModal';

function FuncMain() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  const [isAddUser, setIsAddUser] = useState(false);

  useEffect(() => {
    userAxios
      .get('/users')
      .then(res => setUsers(res.data))
      .catch(error => setError(error.message))
  }, [])

  const deleteUser = user => {
    const id = user.id;
    userAxios
      .delete(`/users/${user.id}`)
      .then(() => {
        const newUsers = users.filter(currentUser => currentUser.id !== id);
        setUsers(newUsers);
      })
      .catch(error => setError(error.message));
  }

  const editUser = user => {
    setSelectedUser(user);
    setShowModal(true);
  }

  const saveModalDetails = user => {
    userAxios
      .put(`/users/${user.id}`, user)
      .then(res => {
        const index = users.findIndex((prevUser) => prevUser.id === user.id);
        const tempUser = users;
        tempUser[index] = user;
        setUsers(tempUser);
        setShowModal(false);
      })
      .catch(error => setError(error.message));
  }
  const closeEditModal = () => {
    setShowModal(false);
  }
  const openUserModal = () => {
    setIsAddUser(true);
  }

  const closeUserModal = () => {
    setIsAddUser(false);
  }

  const addUser = user => {
    
    userAxios.
      post('/users', user)
      .then(res => {
        const Newusers = [...users, res.data];
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
export default FuncMain;
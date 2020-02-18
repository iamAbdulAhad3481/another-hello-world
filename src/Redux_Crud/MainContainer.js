import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../Redux/User/UserActions";
import DisplayUsers from "./DisplayUsers";
import AddUser from "./AddUser";
import EditModal from "./EditModal";

function MainContainer({ fetchUser, userData }) {
  const [isAddUser, setIsAddUser] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    fetchUser();
  }, []);

  const addUserForm = () => setIsAddUser(true);
  const closeUserForm = () => setIsAddUser(false);

  const openModal = user => {
    setShowModal(true);
    setSelectedUser(user);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {userData.error && <h2>Error</h2>}
      {userData.users && !isAddUser && (
        <DisplayUsers users={userData.users} openModal={openModal} />
      )}
      {!isAddUser && (
        <button className="btn btn-primary  ml-3 mb-3" onClick={addUserForm}>
          Add User
        </button>
      )}
      {isAddUser && <AddUser closeUserForm={closeUserForm} />}
      {!isAddUser && showModal && (
        <EditModal
          closeModal={closeModal}
          selectedUser={selectedUser}
          users={userData.users}
        />
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

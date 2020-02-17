import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const EditModal = ({ closeModal, saveModalDetails, selectedUser }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        name: selectedUser.name,
        email: selectedUser.email,
        phone: selectedUser.phone,
        id: selectedUser.id,
      })
    }

  }, [selectedUser])

  const handleSave = () => {
    saveModalDetails(formData);
  }
  
  const { name, email, phone } = formData;
  return (
    <div>
      <Modal show="true" >
        <Modal.Header closeButton> <Modal.Title>Edit User</Modal.Title> </Modal.Header>
        <Modal.Body>
          <form>

            <div class="form-group">
              <label >Name:</label>
              <input value={name} name="name" onChange={e => setFormData({ ...formData, name: e.target.value })} class="form-control" />
            </div>
            <div class="form-group">
              <label >Email:</label>
              <input type="text" class="form-control" value={email} name="email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
            </div>
            < div class="form-group">
              <label >Phone:</label>
              <input type="text" class="form-control" value={phone} name="phone" onChange={e => setFormData({ ...formData, phone: e.target.value })} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}> Close</Button>
          <Button variant="primary" onClick={handleSave} >Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditModal;

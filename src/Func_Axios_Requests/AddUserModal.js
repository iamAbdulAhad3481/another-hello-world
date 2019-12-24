import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

function AddUserModal(props) {
  const [user, setUser] = useState({ id: '', name: '', email: ''});
  const handleSave = e => props.addUser(user);

  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show="true">

      <Modal.Header > <Modal.Title id="contained-modal-title-vcenter">Add User</Modal.Title> </Modal.Header>
      <Modal.Body className="col-md-7">
        <form>
          <div class="form-group">
            <label >Id:</label>
            <input value={user.id} name="id" onChange={(e) => setUser({...user,id:e.target.value})} class="form-control" />
          </div>
          <div class="form-group">
            <label >Name:</label>
            <input type="text" class="form-control" value={user.name} name="name" onChange={(e) => setUser({...user,name:e.target.value})} />
          </div>
          < div class="form-group">
            <label >Email:</label>
            <input type="text" class="form-control" value={user.email} name="email" onChange={(e) => setUser({...user,email:e.target.value})} />
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button className="btn btn-danger" onClick={handleSave}>Save</Button>
        <Button onClick={props.closeUserModal} >Close</Button>
      </Modal.Footer>

    </Modal>
  )
}

export default AddUserModal


import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class AddUserModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      email: ''
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSave = e => {
    const user = this.state;
    this.props.addUser(user);
  }


  render() {
    const { id, name, email } = this.state;
    return (
      <div>
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show="true">

          <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
              Add User
                    </Modal.Title>
          </Modal.Header>
          <Modal.Body className="col-md-7">
            <form>

              <div class="form-group">
                <label >Id:</label>
                <input value={id} name="id" onChange={this.changeHandler} class="form-control" />
              </div>
              <div class="form-group">
                <label >Name:</label>
                <input type="text" class="form-control" value={name} name="name" onChange={this.changeHandler} />
              </div>
              < div class="form-group">
                <label >Email:</label>
                <input type="text" class="form-control" value={email} name="email" onChange={this.changeHandler} />
              </div>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button className="btn btn-danger" onClick={this.handleSave}>Save</Button>
            <Button onClick={this.props.closeUserModal} >Close</Button>
          </Modal.Footer>



        </Modal>

      </div>
    )
  }
}

export default AddUserModal

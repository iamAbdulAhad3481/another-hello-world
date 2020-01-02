import React, { Component } from 'react'

class AddUserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: ''
    }
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSave = e => {
    e.preventDefault();
    const user = this.state;
    const { addUser } = this.props
    addUser(user)
  }

  render() {
    const { name, email, phone } = this.state
    const { closeUserForm } = this.props
    return (
      <div className="container  mt-4 ">
        <div className="card col-md-6  m-auto">
          <h5 className="  text-center py-4 "><strong className=" display-4 text-dark" style={{ fontWeight: "normal" }}>Edit User</strong></h5>
          <hr />
          <div class="card-body ">
            <form onSubmit={this.handleSave} className="text-left" style={{ color: "#757575" }}>
              <div className=" form-group">
                <label >Name:</label>
                <input type="text" value={name} name="name" onChange={this.changeHandler} className="form-control" placeholder="Codility" />
              </div>
              <div className="form-group">
                <label >Email:</label>
                <input type="text" className="form-control" value={email} name="email" onChange={this.changeHandler} placeholder="Email or Login" />
              </div>
              < div className="form-group">
                <label >Phone:</label>
                <input type="text" className="form-control" value={phone} name="phone" onChange={this.changeHandler} placeholder="+92-*******" />
              </div>
              <button className="btn btn-danger" type="submit" >Save</button>
              <button className="btn btn-secondary ml-3" onClick={closeUserForm} >Close</button>
            </form>

          </div>
        </div>
      </div >
    )
  }
}

export default AddUserForm

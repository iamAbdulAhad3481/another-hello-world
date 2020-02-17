import React, { useState } from 'react';

const Form = ({ closeUserForm, addUser }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSave = e => {
    e.preventDefault();
    addUser(formData);
  };

  const { name, email, phone } = formData; 
  return (
    <div className="container  mt-4 ">
        <div className="card col-md-6  m-auto">
          <h5 className="  text-center py-4 "><strong className=" display-4 text-dark" style={{ fontWeight: "normal" }}>Edit User</strong></h5>
          <hr />
          <div class="card-body ">
            <form onSubmit={handleSave} className="text-left" style={{ color: "#757575" }}>
              <div className=" form-group">
                <label> Name:</label>
                <input type="text" value={name} name="name" onChange={ e => setFormData({...formData, name: e.target.value})} className="form-control" placeholder="Codility" />
              </div>
              <div className="form-group">
                <label> Email:</label>
                <input type="text" className="form-control" value={email} name="email" onChange={ e => setFormData({...formData, email: e.target.value})} placeholder="Email or Login" />
              </div>
              < div className="form-group">
                <label> Phone:</label>
                <input type="text" className="form-control" value={phone} name="phone" onChange={ e => setFormData({...formData, phone: e.target.value})} placeholder="+92-*******" />
              </div>
              <button className="btn btn-danger" type="submit" >Save</button>
              <button className="btn btn-secondary ml-3" onClick={closeUserForm} >Close</button>
            </form>

          </div>
        </div>
      </div >
  )
}
export default Form;

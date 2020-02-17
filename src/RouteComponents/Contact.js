import React from 'react';
import './RouteStyle.css';

function Contact() {
  return (
    <div className="mainDiv border-0 rounded " >
    <form className="pt-3">

      <div class="form-group col-md-7">
        <label for="inputEmail4">Email</label>
        <input type="email" class="form-control" id="inputEmail4" />
      </div>
    
      <div class="form-group  col-md-7">
        <label for="inputPassword4">Password</label>
        <input type="password" class="form-control" id="inputPassword4" />
      </div>

      <div class="form-group col-md-7">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>

      <div class="form-group col-md-7">
        <label for="inputCity">City</label>
        <input type="text" class="form-control" id="inputCity" />
      </div>
      
      <div class="form-group col-md-7">
        <label for="inputState">State</label>
        <select id="inputState" class="form-control">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>

      <div className="form-group col-md-7">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck">Check me out</label>
        </div>
      </div>

      <div className="form-group col-md-7">
        <button type="submit" class="btn btn-success">Sign in</button>
      </div>

    </form>
  </div>
  )
}
export default Contact;

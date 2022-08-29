import React from "react";


const Form =()=>{
    return(
        <>
        <div className="form5">
         <form className="row2">
          <h1 className="register">Register</h1>
          <p>Create your account. Its free and only takes a minutes</p>
          <hr />

        <div className="col-md-4">
          <label className="form-label">Full name</label>
          <input type="text" className="form-control" id="validationDefault01" placeholder= "Full Name" required />
        </div>
        <div className="col-md-4">
          <label  className="form-label">Email</label>
          <input type="text" className="form-control" id="validationDefault02" placeholder= "Email" required />
        </div>
        <div className="col-md-4">
          <label  className="form-label">Username</label>
          <input type="text" className="form-control" id="validationDefault03"  placeholder= "Username"required />
        </div>
        <div className="col-md-4">
          <label  className="form-label">Password</label>
          <input type="text" className="form-control" id="validationDefault05" placeholder= "*********"required />
        </div>
        <div className="col-md-4">
   <label  className="form-label"> Confirm Password</label>
   <input type="text" className="form-control" id="validationDefault05" placeholder= "*********"required />
 </div> <br />
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck2" required />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div><br />
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
      </div>
        </>
    );
}

export default Form;
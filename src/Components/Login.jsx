import React from "react";
import {Link} from "react-router-dom"
const Login =()=>{
    return(
        <>
        <div className="login">
        <div className="abc">
        <h3>Welcome to Shopping Mall! Log in</h3>
        <form className="row2">
        <div className="form-group">
          <label >Email address</label>
          <input type="email" className="form-control"  placeholder="Enter email" required />

          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div><br />
        <div className="form-group">
          <label >Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
        </div><br/>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
        </div><br />

        <button type="submit" className="btn-1 ">Log in</button>
        <p>or,login with</p>
        <div className="btn-f">
        <button  className="btn-2 "><i class="fa-brands fa-facebook-f"></i>Facebook</button>
        <button  className="btn-3"><i class="fa-brands fa-google"></i>Google</button>
        </div>
        <p>Don't have an account <Link to ="/Form"> <b>Sign Up</b></Link> </p>

      </form>
      </div>
      </div>
      
        </>
    );
}
export default Login;
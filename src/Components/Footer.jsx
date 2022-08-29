import React from "react";

const Footer =()=>{
    return(
        <>
        <div className="footer">
            <div className="col-a">
                <h3>Useful Link</h3>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contacts</a>
                <a href="#">Shop</a>
                <a href="#">Blog</a>
            </div>

            <div className="col-b">
                <h3>NewsLetter</h3>
                <form>
                    <input type="email" className="form-footer" placeholder="Enter your Email Address" required/><br /><br />
                    <button  className="btn" type="Submit">Subscribe Now</button>
                </form>
            </div>

            <div className="col-c">
                <h3>Contact</h3>
                <p>123, XYZ road, BSK3 <br/>
                Biratnagar, Morang, Nepal</p>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>
        </>
    );
}
export default Footer;
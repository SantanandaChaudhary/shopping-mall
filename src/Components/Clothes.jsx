import React from "react";
import {Link} from "react-router-dom"

const Clothes=()=>{
    return(
        <>
        <div className="row3">
        <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://5.imimg.com/data5/FH/KJ/OI/SELLER-3023183/men-branded-slim-fit-shirt-1000x1000.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Shirt</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/About" className="btn">Go somewhere</Link>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://www.bugatti-fashion.com/en/Magazine/fileadmin/bugatti/magazine/Magazin_Ratgeber/20190327_Magazin_Ratgeber_Slim_Jeans/20192703_bugatti_Magazin_Slim_Jeans.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title"> Poision Jeans</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://www.insidehook.com/wp-content/uploads/2022/02/Spring-Jackets.jpg?resize=1200%2C630" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Jackets</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LGf7GrmASR2ifr_aydU2928xq37AKzVmxMS9g4wtWCy_NRUUy8Dm-SUkJyqmBlECCzI&usqp=CAU" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Sweater</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://www.gotway.com.np/image/images/PlhcGm7Q4PWeNxqHXIqAQx73Wme0lg8aF6YuMHsG.jpg?p=full" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Half Pant</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        </div>
        </>
    );
}
export default Clothes;
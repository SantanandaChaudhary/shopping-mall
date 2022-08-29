import React from "react";
import {Link} from "react-router-dom"
const Shoes =()=>{
    return(
        <>
        <div className="row3">
         <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://static-01.daraz.com.np/p/ce3073c942b9ff221f021e8748fe91a8.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Gold star</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link  to="/Gold"  className="btn ">Product Details</Link>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://5.imimg.com/data5/SELLER/Default/2020/8/KG/AJ/MD/64760880/adidas-sports-shoes-500x500.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Adidass</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn ">Product Details</a>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://cms-cdn.thesolesupplier.co.uk/2022/05/air-jordan-4-retro-gs-military-black-front_w900.jpeg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Jordan</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn ">Product Details</a>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e5af7319-a671-4187-a10a-020e09e7b3db/air-max-2021-mens-shoes-fnRMh3.png" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Nike</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn ">Product Details</a>
        </div>
      </div>
      </div>
        </>
    );
}
export default Shoes;
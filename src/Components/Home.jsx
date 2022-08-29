import React from "react";
import { Link } from "react-router-dom";

const Home =()=>{
    return(
        <>
                            <div className="row4">
                        <div className="card0">
                            <img  className="img1" src="https://thumbs.dreamstime.com/b/
            shopping-trolley-full-food-vector-illustration-shopping-trolley-full-food-168323149.jpg" alt="abc" /><br />
                            <div className="dropdown">
                    <a className=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Grocery
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>

                        </div>
                        <div className="card0">
                        <img className="img1" src="https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_Samsung_Galaxy_A53.jpg" alt="abc" /><br />
                        <Link to="/Mobile">Mobile</Link>
                        </div>

                        <div className="card0">
                        <img  className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFtUXr4N1CBhitZhijBi867xUSIYJcDBn6g&usqp=CAU" 
            alt="abc" /><br />
                        <div className="dropdown">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Fashion
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                        </div>

                        <div className="card0">
                        <img className="img1" src="https://www.thebestsingapore.com/wp-content/uploads/2014/07/Best-Places-to-buy-Consumer-Electronics.jpg" 
            alt="abc" /><br />
                        <div className="dropdown">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Electronics
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                        </div>

                        <div className="card0">
                        <img className="img1" src="https://assetscdn1.paytm.com/images/catalog/product/H/HO/HOMOMEGA-DELUXETTK-6433225C8096E1/1594122581348_3.jpg?imwidth=282&impolicy=hq" alt="abc" /><br />
                        <div className="dropdown">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Home
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                        </div>

                        <div className="card0">
                        <img  className="img1" src="https://media.istockphoto.com/photos/set-of-contemporary-house-appliances-isolated-on-white-picture-id1174598609?k=20&m=1174598609&s=612x612&w=0&h=c5rP2tqv0Uck6zm21hBYhEyVy9EBAA7C5VGI4sgfmzo=" alt="abc" /><br />
                        <div className="dropdown">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Appliances
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                        </div>

                        <div className="card0">
                        <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJj-X1VYWXFoHZMhNONP-Z5fL2o1FNdOMIag&usqp=CAU" 
            alt="abc" /><br />
                        <div className="dropdown">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Beauty & toys
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                        </div>
                    </div>

                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
     <div className="carousel-indicators">
       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" 
aria-label="Slide 1" />
       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
     </div>
     <div className="carousel-inner">
       <div className="carousel-item active">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2600be113930417.603190b8e54cd.jpg" className="d-block w-100" alt="..." />
       </div>
       <div className="carousel-item">
         <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/
cyber-monday-clothes-sale-ad-design-template-41ee71b978ca61439cd6bc1ac5332d8b_screen.jpg?ts=1561414497" className="d-block w-100" 
alt="..." />
       </div>
       <div className="carousel-item">
         <img src="https://c8.alamy.com/comp/R7NJKG/
realistic-face-cosmetic-cleansing-mask-ads-splash-background-with-drops-charcoal-skincare-hydrating-facial-cream-for-design-or-advertis
ing-3d-R7NJKG.jpg" className="d-block w-100" alt="..." />
       </div>
     </div>
     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true" />
       <span className="visually-hidden">Previous</span>
     </button>
     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true" />
       <span className="visually-hidden">Next</span>
     </button>
   </div>

   <div className="row">
        <h1>View our Products</h1>
            <div className="card" style={{width: '18rem'}}>
                <img src="https://media.istockphoto.com/id/1079117394/photo/great-sneaker.webp?s=612x612&w=is&k=20&
c=QJ6C7if6KiPvN2LM53A67IgAZlH9YmOhcsDEY9vtjxs=" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Shoes</h5>
                    <Link to="/Shoes" className="btn ">View more</Link>
                 </div>
            </div>


            <div className="card" style={{width: '18rem'}}>
                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&
ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoZXN8ZW58MHx8MHx8&w=1000&q=80" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Clothes</h5>
                    <Link to="/Clothes" className="btn " id="btn-a">View More</Link>
                </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
                <img src="https://img.freepik.com/premium-photo/lay-out-huge-decorative-cosmetic-set_23-2148181437.jpg?w=2000" 
className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Cosmetic</h5>
                    <Link to="/Cosmetic" className="btn">View more</Link>
                </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
                <img src="https://wpusa-aws-media.s3-accelerate.amazonaws.com/2021/01/Watch-Collection.jpg"
                 className="card-img-top" alt="..." />
               <div className="card-body">
                    <h5 className="card-title">Watch</h5>
                    <Link to="/Watch" className="btn">View more</Link>
                </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
                 <img src="https://c8.alamy.com/comp/F1HRC0/turkey-istanbul-the-grand-bazaar-kapalar-in-istanbul-is-one-of-the-F1HRC0.jpg" 
className="card-img-top" alt="..." />
                  <div className="card-body">
                     <h5 className="card-title">Bags</h5>
                     <Link to="/Bag" className="btn ">View more</Link>
                 </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
              <img src="https://s3-us-west-1.amazonaws.com/faithnetworkuserfilestore/FAITHNETWORK_USERFILESTORE/FAITHNETWORK_USERFILESTORE/
imagelibraries/ministries/dafadbda-be8c-46ef-b469-06c0428c67d7/storiesimages/drygoods.png" 
              className="card-img-top" alt="..." />
                <div className="card-body">
                 <h5 className="card-title">Foods</h5>
                 <Link to="/Food" className="btn ">View more</Link>
               </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
             <img src="https://cdn.ytechb.com/wp-content/uploads/2022/08/ytechb-monthly-wallpaper-collection-august.webp" 
             className="card-img-top" alt="..." />
              <div className="card-body">
                 <h5 className="card-title">Electrical Appliances</h5>
                 <Link to="/Electrical" className="btn ">View more</Link>
              </div>
            </div>

           <div className="card" style={{width: '18rem'}}>
             <img src="https://i0.wp.com/microbialmenagerie.com/wp-content/uploads/2021/07/books.jpg?fit=800%2C533&ssl=1"
              className="card-img-top" alt="..." />
             <div className="card-body">
                 <h5 className="card-title">Book</h5>
                 <Link to="/Books" className="btn ">View more</Link>
             </div>
            </div>

           <div className="card" style={{width: '18rem'}}>
              <img src="https://content.api.news/v3/images/bin/fd843939a2182e19c84d92d970d45a90?width=1024" 
              className="card-img-top" alt="..." />
                <div className="card-body">
                 <h5 className="card-title">Furniture</h5>
                 <Link to="/Furniture" className="btn " id="btn-b">View more</Link>
                </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
              <img src="https://previews.123rf.com/images/denis08131/denis081311710/denis08131171000116/
87751948-vector-set-kitchen-utensils-cooking-tools-flat-style-cook-equipment-isolated-objects.jpg" 
              className="card-img-top" alt="..." />
               <div className="card-body">
                 <h5 className="card-title">Utensils</h5>
                 <Link to="/Utensils" className="btn ">View more</Link>
                </div>
            </div>

        </div>
        
        
        </>
    );
}

export default Home;
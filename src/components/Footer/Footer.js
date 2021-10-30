import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer text-white text-center  ">
           <div className="container py-2">
            <div className="row align-items-center">
                <div className="col-md-3 ">
                   <h6>Thanks for visit the website</h6>
                   <h4>Bongo International Recreation Center </h4>
                   <p><i className="fas fa-map-marker-alt text-primary"></i> Sherpur (Highway),Road-131, Bogura,BD</p>
                </div>
                <div className="col-md-3 bg-gray p-2 pb-3">
                   <h3> Contact us</h3>
                   <div className="">
                       <input className="w-100 px-2" type="email" placeholder="Email" />
                       <input className="w-100 px-2 my-1" type="text" placeholder="Phone" />
                       <textarea className="w-100 px-2 my-1" type="text" placeholder="Description" />
                       <input className="w-100 px-10 bg-info" type="Submit" placeholder="number" />
                   </div>
                </div>
                <div className="col-md-3  p-2 pb-3">
                <h3> Follow us</h3>
                 <div className="text-decoration-none ">
                 
               <a target="_blank" href="www.facebook.com"> Facebook</a>
               <br/>
               <a target="_blank" href="www.instagram.com"> Instagram</a>
               <br/>
               <a target="_blank" href="www.youtube.com"> Youtube</a>
               <br/>
               <a target="_blank" href="www.twitter.com"> Twitter</a>
               <br/>
               <a target="_blank" href="www.google.com"> www.enjoy-bg.bd</a>
                
                 </div>
                  
                </div>
                <div className="col-md-3  p-2 pb-3">
                   <h3> Payment Getway</h3>
                   <img className="w-5" style={{width: "300px"}}  src="https://ps.w.org/all-bd-mobile-payments-gateway/assets/banner-772x250.png?rev=2275212" alt="" />
                </div>
              
            </div>
           </div>
           <div className="py-3">
               <span >© moyna team, Inc. All rights reserved.</span>
           </div>
        </div>
    );
};

export default Footer;
import React from "react";
import offer from "../assets/offer-img.png";
import arr from '../assets/color-arrow.png'
import choco from '../assets/sl-1.png'
import choc from '../assets/sl-1.png'

function Offer() {
  return (
    <>
      <div className="container mt-5 text-center position-relative">
        <div className="card" style={{ width: " 100%", height:"440px",border:"3px solid brown"}}>
          <div className="card-body">
            <h1 className="card-title m-5">Offers on chocolates</h1>
            <h3 className="card-text m-4">
              Get 5% Offer <br />
              any Chocolate items
            </h3>
            <a href="#" className="btn btn-outline-dark">
              BUY NOW
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center position-absolute" style={{ bottom: "-233%",paddingLeft:"12%" }} >
        <img src={offer} alt="" srcset=""  />
        <h5 className="mt-3"  ><a href="" style={{textDecoration:"none"}}><i className="text-dark">See More  <img src={arr} alt="" /></i></a></h5>
       
      </div>
      <div className="container position-absolute" style={{ bottom: "-180%", }} >
        <img src={choco} alt="" srcset="" style={{width:'300px', paddingLeft:"6%"}}  />
       
      </div>
     
    </>
  );
}

export default Offer;

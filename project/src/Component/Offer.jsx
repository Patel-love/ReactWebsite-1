import React from "react";
import offer from "../assets/offer-img.png";
import arr from '../assets/color-arrow.png'

function Offer() {
  return (
    <>
      <div className="container mt-5 text-center position-relative">
        <div className="card" style={{ width: " 100%", height:"440px"}}>
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
    </>
  );
}

export default Offer;

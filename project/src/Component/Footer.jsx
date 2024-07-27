import React from "react";
import logo from "../assets/logo.jpeg";

function Footer() {
  return (
    <>
    
      <div
        className="footer  p-5 text-center position-absolute"
        style={{
          marginTop: "250px",
          backgroundColor: "#f0f0f0",
          padding: "20px"
        }}
      >
        <div className="row justify-content-evenly">
          <div className="col-3">
            <img src={logo} style={{ width: "120px" }} alt="Logo" />
          </div>
          <div className="col-3">
            <h1>Chocolate</h1>
            <p>
              <b>
                Enjoy delicious chocolate every day with our chocolate website.
                Our food product made from cocoa beans, consumed as candy and
                used to make beverages
              </b>
            </p>
            <p className="pt-3">
              <b>© 2024, Chocolate WorkDo, Powered by Shopify</b>
            </p>
          </div>
          <div className="col-3">
            <h1>Navigation :</h1>
            <p>
              <b>Shipping & Delivery</b>
            </p>
            <p>
              <b>Privacy Policy</b>
            </p>
            <p>
              <b>Contact</b>
            </p>
            <p>
              <b>Terms & Conditions</b>
            </p>
          </div>
          <div className="col-3">
            <h1>About us:</h1>
            <p className="pt-3">
              <b>Strawberry Choco</b>
            </p>
            <p>
              <b>Lindt Chocolate</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

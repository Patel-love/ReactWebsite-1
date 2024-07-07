import React from "react";
import cone from "../assets/chocolate1.png";
import ctwo from "../assets/chocolate2.png";
import cthree from "../assets/chocolate3.png";

function Card() {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-around text-center">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={cone}
              class="card-img-top"
              alt="..."
              style={{ height: "200px" }}
            />
            <div class="card-body">
              <h5 class="card-title">Yummy Chocolate</h5>
              <h2 class="card-text">$5.0</h2>
              <a href="#" class="btn btn-primary">
                BUY NOW
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={ctwo}
              class="card-img-top"
              alt="..."
              style={{ height: "200px" }}
            />
            <div class="card-body">
              <h5 class="card-title">Yummy Five-Star</h5>
              <h2 class="card-text">$6.0</h2>
              <a href="#" class="btn btn-primary">
                BUY NOW
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={cthree}
              class="card-img-top"
              alt="..."
              style={{ height: "200px" }}
            />
            <div class="card-body">
              <h5 class="card-title">Yummy DairyMilk</h5>
              <h2 class="card-text">$7.0</h2>
              <a href="#" class="btn btn-primary">
                BUY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

import React from "react";
import sone from "../assets/bg.jpg";
import stwo from "../assets/sl-1.png";

function Slider() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide position-relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={sone}
              className="d-block "
              alt="..."
              style={{ height: "100vh", width: "100%", objectFit: "contain" }}
            />
          </div>
          <div className="carousel-item">
            {/* <img src={stwo} className="d-block w-100" alt="..." /> */}
          </div>
          <div className="carousel-item">
            {/* <img src={} className="d-block w-100" alt="..."/> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div
        className="container text-center position-absolute"
        style={{ top: "35%" }}
      >
        <div className="row justify-content-evenly">
          <div className="col-6 col-sm-3">
            <img src={stwo} alt="" srcset="" style={{ width: "300px" }} />
          </div>
          <div className="col-6 col-sm-3">
            <h3 className="mt-5"><i>Chocolate</i></h3>
            <h1 className="mt-5"><i>Yummy</i></h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;

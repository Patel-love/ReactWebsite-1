import React from "react";
import about from "../assets/about-img.png";
import arrow from '../assets/color-arrow.png'

function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 text-center p-5">
            <h1>
              <i>About Our Company</i>
            </h1>
            <p className="m-4">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English. Many desktop publishing packages
              and web pagend web page editors now use Lorem Ipsum as their
              default model text,
            </p>
            {/* <button type="button" class="btn btn-primary">
              Read More <img src={arrow} alt="" srcset="" />
            </button> */}
             <h5>
               <a href="" className="text-dark" style={{textDecoration:"none"}}><i>Read More <img src={arrow} alt="" srcset="" /></i></a>
            </h5>
          </div>
          <div className="col-6 ">
            <img src={about} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

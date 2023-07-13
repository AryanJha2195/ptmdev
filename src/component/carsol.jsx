import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { img1, img2, img3 } from "./assets";
const carsol = () => {
  return (
    <>
      <div className="text-center">
        <p style={{ fontSize: "2rem", color: "#2C2A50" }}>
          Our community is our superpower
        </p>
      </div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100  "
            src={img1}
            // src="https://www.signupgenius.com/cms/images/school/10%20Ways%20to%20Improve%20Parent%20Teacher%20Communication%20Article%20Image.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 "
            src={img2}
            // src="https://blogs.extramarks.com/blogs/wp-content/uploads/2023/05/new-blog-copy-6@4x-1140x713.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            // src="https://epe.brightspotcdn.com/74/e7/0735f679428d9627c520e4f2b254/2021-bi-9.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default carsol;

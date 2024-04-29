import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../image/image1.jpeg";
import image2 from "../image/image2.jpg";
import image3 from "../image/image3.webp";
import image4 from "../image/image4.jpg";
import image6 from "../image/image6.jpg";
import image7 from "../image/image7.jpg";
// import Footer from "./pages/Footer";

function CustomerReview() {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 200,
    autoplaySpeed: 2000,
    cssEase: "linear",
    variableHeight: true, // Set to true for variable height slides
  };

  return (
    <>
      <div className="text-4xl text-center mb-8 ">
        <h1>What Our Customers Say</h1>
      </div>
      <div className="p-1  overflow-hidden">
        <Slider {...settings}>
          {CustomerReviewData.map((item, index) => (
            <div key={index} className="p-8 h-96 bg-slate-200">
              <div className=" my-5 h-72 p-10 w-[395px] m-auto bg-white   rounded-lg">
                <div>
                  <p className="text-lg mb-5 h-28">{item.message}</p>
                  <div className="flex items-center mt-4">
                    <img
                      className="w-14 h-14 rounded-full mr-4"
                      src={item.imgage}
                      alt=""
                    />
                    <div>
                      <h2 className="font-bold text-xl">{item.name}</h2>
                      <p className="text-gray-500">{item.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default CustomerReview;

const CustomerReviewData = [
  {
    name: "Pramod Mahto",
    imgage: image1,

    position: "Teacher",
    message:
      "The product was well-designed and easy to use. I highly recommend it!",
  },
  {
    name: "Ram Kumar",
    imgage: image2,

    position: "Customer",
    message:
      "I had a great experience with this service. The support team was very helpful.",
  },
  {
    name: "Siv Ram",
    imgage: image3,

    position: "User",
    message:
      "I found the guidance provided by the team to be invaluable. They really went above and beyond!",
  },
  {
    name: "Raja Ram ",
    imgage: image4,

    position: "Student",
    message:
      "The outcome exceeded my expectations. I'm extremely satisfied with the result.",
  },
  {
    name: "Kumar Ram ",
    imgage: image6,

    position: "Student",
    message:
      "The outcome exceeded my expectations. I'm extremely satisfied with the result.",
  },
  {
    name: "Mohan ",
    imgage: image7,

    position: "Student",
    message:
      "The outcome exceeded my expectations. I'm extremely satisfied with the result.",
  },
  {
    name: "Pramod ",
    imgage: image2,

    position: "Researcher",
    message:
      "I had a great experience with this service. The support team was very helpful.",
  },
  {
    name: "Krishana ",
    imgage: image3,

    position: "User",
    message:
      "I found the guidance provided by the team to be invaluable. They really went above and beyond!",
  },
];

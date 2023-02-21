import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="w-full mb-8">
      <div>
        <Slider {...settings}>
          <div>
            <img src="images/carousel1.jpg" className="h-[20rem] w-full relative" alt="캐러셀 이미지" />
          </div>
          <div>
            <img src="images/carousel1.jpg" className="h-[20rem] w-full relative" alt="캐러셀 이미지" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

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
      <Slider {...settings}>
        <div className="">
          <img
            src="https://www.shinhancard.com/pconts/images/dx/event/2022/221013_gosim_PC_5.jpg"
            className="h-[20rem] w-full"
            alt="캐러셀 이미지"
          />
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Slider>
    </div>
  );
}

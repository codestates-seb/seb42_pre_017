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
        <div className='w-full mb-8'>
          <Slider {...settings}>
            <div className='relative'>
              <img
               src='https://media.discordapp.net/attachments/1074547874861437034/1077512574540726333/aurora-ge1e6c05e2_1920.jpg?width=1038&height=692'
               className='h-[20rem] w-full z-0'
               alt='캐러셀이미지'       
              />
            </div>
            <div>
            <div className=''>
              <img
               src='https://media.discordapp.net/attachments/1074547874861437034/1077512574540726333/aurora-ge1e6c05e2_1920.jpg?width=1038&height=692'
               className='h-[20rem] w-full'
               alt='캐러셀이미지'       
              />
            </div>
            </div>
          </Slider>
        </div>
      );
    }


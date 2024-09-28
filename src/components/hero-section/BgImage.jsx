import React from 'react'
import "../../App.css"
import Slider from "react-slick";



function BgImage() {

  const settings = {
    dots: true,
    dotsClass: 'custom-dots',
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div className="w-3 h-3  rounded-full border-2 border-white "></div>  // Custom dot styling
    ), 
  };
  return(
    <div className='relative top-0 w-screen m-0 h-screen'>
      <h1 className="text-white absolute top-1/3 font-semibold text-4xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">
        Discover The Real Value Of Travel
      </h1>
      <div className='z-1'>
      <Slider {...settings}>
        <div className='w-full h-screen m-0 p-0 bg-[url("src/assets/hero-image_1.webp")] bg-no-repeat bg-contain rounded-b-[50%] '></div>
        <div className='w-full h-screen m-0 p-0 bg-[url("src/assets/hero-image_2.webp")] bg-no-repeat bg-contain rounded-b-[50%] '></div>
        <div className='w-full h-screen m-0 p-0 bg-[url("src/assets/hero-image_3.webp")] bg-no-repeat bg-contain rounded-b-[50%] '></div>
      </Slider>
      </div>
    </div>

  )
}

export default BgImage


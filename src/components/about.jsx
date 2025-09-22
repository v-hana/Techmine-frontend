import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image1 from '../../public/images/image1.png'
import Image2 from '../../public/images/image2.jpg'

import "swiper/css";
import "swiper/css/navigation";

const images = [
  Image1,Image2,Image1
];

const About = () => {
  
  return (
    <div className="bg-white px-6 py-12">
<p className="text-yellow-500 font-medium mb-2 pt-2 border-t border-[#CEC38E]">About Company</p>
    <div className="flex gap-8">
      
      <div className=''>
      
      <h1 className="text-6xl font-big-shoulder font-extrabold text-black leading-tight">
        Next-Generation <br/>Reinforcement: ARP Fiberglass <br/>Rebar Excellence
        </h1>
        </div>
      <div className='w-[40%]'>

          <p className="text-lg text-[#A19696] leading-relaxed mb-4">
            Alternative Rebar Plant Saudi Made 100% provides GFRP Rebar All Sizes
            straight and bend deliver to all GCC and African countries. We develop
            and produce Fiberglass rebars and accessories.
          </p>
          <p className="text-lg text-[#A19696] leading-relaxed">
            ARP Fiberglass rebar is a stronger and lighter alternative to
            conventional steel rebar.
        </p>
        </div>
      </div>

    <div className="relative w-full max-w-6xl mx-auto">
      {/* Custom Arrows */}
      <div className="absolute top-4 right-6 z-20 flex space-x-3">
        <div className="swiper-button-prev p-2 rounded-full border border-yellow-400 bg-white shadow hover:bg-yellow-100">
          <ChevronLeft className="w-5 h-5 text-yellow-500" />
        </div>
        <div className="swiper-button-next p-2 rounded-full border border-yellow-400 bg-white shadow hover:bg-yellow-100">
          <ChevronRight className="w-5 h-5 text-yellow-500" />
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={1.25}
        spaceBetween={20}
        className="flex"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex">
            <img
              src={img}
              alt={`Slide ${index}`}
              className={"rounded-xl object-cover h-[400px]"
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>



    </div>
    

  
  )
}

export default About

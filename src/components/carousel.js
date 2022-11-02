import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Photo10      = require("../assets/photo10.jpeg");
const Photo11      = require("../assets/photo11.jpeg");
const Photo12      = require("../assets/photo12.jpeg");

export default function Carousel() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img className="object-fill w-full h-96" src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg" alt="image slide 1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="object-fill w-full h-96" src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg" alt="image slide 2"/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="object-fill w-full h-96" src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg" alt="image slide 3"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
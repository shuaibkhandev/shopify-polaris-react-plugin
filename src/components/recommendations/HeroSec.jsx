import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const sliderImages = [
  {
    id: 1,
    src: "./images/slider01.png",
    alt: "Slider Image 1",
  },
  {
    id: 2,
    src: "./images/slider01.svg",
    alt: "Slider Image 2",
  },
  {
    id: 3,
    src: "./images/slider01.png",
    alt: "Slider Image 3",
  },
];

const HeroSec = () => {
  return (
    <div className="rec_hero_sec">
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {sliderImages.map((image) => (
        <SwiperSlide key={image.id}>
          <img src={image.src} alt={image.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default HeroSec;

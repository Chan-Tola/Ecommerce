import p1 from "../../assets/images/Banner/TEN11 - End of Season App Banner-1.jpg";
import p2 from "../../assets/images/Banner/TEN11 x Hanuman - app banner2.jpg";
import p3 from "../../assets/images/Banner/Ten11 - Hiphop Collection web and app Banner3 .jpg";
import p4 from "../../assets/images/Banner/Ten11 - Hiphop Collection web and app Banner4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplaySpeed = 3000; // Time in milliseconds
  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed,
    dots: true, // Enable dots
    beforeChange: (current, next) => setActiveIndex(next), // Update active index before slide changes
    customPaging: (i) => (
      <div className="custom-dot">
        <div
          className="progress-bar"
          style={{
            animation: `${
              i === activeIndex ? `progress ${autoplaySpeed}ms linear` : "none"
            }`,
          }}
        ></div>
      </div> // Custom structure for dots
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "2px", // Positioned at the bottom
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "15rem",
        }}
      >
        {dots}
      </div>
    ),
  };

  const banners = [
    { id: 1, title: "image01", image: p1, leftbtn: "shop women", rightbtn: "shop men" },
    { id: 2, title: "image02", image: p2, leftbtn: "shop women", rightbtn: "shop men" },
    { id: 3, title: "image03", image: p3, leftbtn: "shop women", rightbtn: "shop men" },
    { id: 4, title: "image04", image: p4, leftbtn: "shop women", rightbtn: "shop men" },
  ];

  return (
    <Slider {...settings}>
      {banners.map(({ image, title, leftbtn, rightbtn }, index) => (
        <section key={index} className="w-screen h-full relative">
          <img src={image} alt={title} className="w-screen h-full object-cover" />
          <section className="absolute bottom-8 flex gap-5 justify-center w-full">
            <button className="border text-xl bg-white font-bold uppercase text-black  px-[2rem] h-[45px]">
              {leftbtn}
            </button>
            <button className="border text-xl bg-white text-black font-bold uppercase px-[2rem] h-[45px]">
              {rightbtn}
            </button>
          </section>
        </section>
      ))}
    </Slider>
  );
};

export default Carousel;

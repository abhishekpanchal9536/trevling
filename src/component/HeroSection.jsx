import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  const slides = [
    {
      id: 1,
      title: "Explore Nature",
      image: "src/assets/imges/trainimage.avif"
    },
    {
      id: 2,
      title: "City Life",
      image: "src/assets/imges/cityimage.avif"
    },
    {
      id: 3,
      title: "Mountains",
      image: "src/assets/imges/kedarnathimage.avif"
    },
    {
      id: 4,
      title: "Beaches",
      image: "src/assets/imges/kedarnathimage.avif"
    },
    {
      id: 5,
      title: "Desert",
      image: "src/assets/imges/cityimage.avif"
    },
    {
      id: 6,
      title: "Adventure",
      image: "src/assets/imges/trakingimage.avif"
    }
  ];

  return (
    <div className="w-full  bg-gray-100 py-10">
      <div className=" mx-auto px-4">
        <div className="slider-container">
          <Slider {...settings} className="overflow-hidden">
            {slides.map((slide) => (
              <div key={slide.id}>
                <div className="h-64 md:h-80 lg:h-96 relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-3xl md:text-4xl font-bold">
                      {slide.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

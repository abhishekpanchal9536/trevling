import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndiaHeroSection = () => {
  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
  };

  const cardSliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      title: "Explore Nature",
      image: "src/assets/imges/Explore Nature.avif",
    },
    { id: 2, title: "WildLife", image: "src/assets/imges/WildLife.avif" },
    {
      id: 3,
      title: "Mountains",
      image: "src/assets/imges/Mountains.avif",
    },
    { id: 4, title: "Beaches", image: "src/assets/imges/Beaches.avif" },
    { id: 5, title: "Desert", image: "src/assets/imges/Desert.avif" },
    { id: 6, title: "Adventure", image: "src/assets/imges/Adventure.avif" },
  ];

  return (
    <div className="w-full h-auto md:h-[600px] bg-gradient-to-r from-yellow-100 via-amber-100 to-orange-100 flex flex-col md:flex-row shadow-lg overflow-hidden">
      {/* Left Smaller Slider */}
      <div className="md:w-2/5 w-full h-[300px] md:h-auto p-4 bg-white">
        <Slider {...mainSliderSettings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <div className="h-[280px] md:h-[520px] relative overflow-hidden shadow-md">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <h2 className="text-white text-xl md:text-2xl font-bold">
                    {slide.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Right Bigger Content */}
      <div className="md:w-3/5 w-full flex flex-col justify-between p-6 space-y-6 bg-gradient-to-b from-white via-amber-50 to-yellow-50">
        {/* Heading Text */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
            Let us plan you a perfect India Holiday
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-4 max-w-full">
            Let us plan you a perfect India holiday filled with rich culture,
            breathtaking landscapes, historic wonders, and unforgettable
            experiences. From serene backwaters to vibrant cities, we craft
            personalized journeys that suit your interests. Discover the magic
            of India with comfort, adventure, and memories that last a lifetime.
          </p>
        </div>

        {/* Card Slider */}
        <div>
          <Slider {...cardSliderSettings}>
            {slides.slice(0, 4).map((card) => (
              <div key={card.id} className="px-2">
                <div className="bg-white shadow-md overflow-hidden hover:shadow-lg transition hover:scale-[1.02] duration-300">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-32 md:h-36 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-md md:text-lg font-semibold text-gray-800">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      Discover {card.title.toLowerCase()} beauty & culture.
                    </p>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white text-sm px-3 py-1">
                      Explore
                    </button>
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

export default IndiaHeroSection;

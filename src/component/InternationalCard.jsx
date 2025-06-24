import React from "react";

const InternationalCard = () => {
  const cards = [
    {
    title: "Eiffel Tower, Paris",
    src: "src/assets/imges/Eiffel Tower, Paris.avif",
  },
  {
    title: "Great Wall of China",
    src: "src/assets/imges/Great Wall of China.avif",
  },
  {
    title: "Bali Beach, Indonesia",
    src: "src/assets/imges/Bali Beach, Indonesia.avif",
  }, 
  {
    title: "Swiss Alps Skiing",
    src: "src/assets/imges/Swiss Alps Skiing.avif",
  },
  {
    title: "Sydney Opera House",
    src: "src/assets/imges/Sydney Opera House.avif",
  },
  {
    title: "New York City Skyline",
    src: "src/assets/imges/New York City Skyline.avif",
  },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-700 mb-6">
          Best Places in International
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Best places in international travel include famous spots like the
          Eiffel Tower in Paris, the Great Wall of China, and the beaches of
          Bali. Tourists love sports like skiing in Switzerland, surfing in
          Australia, and hiking in New Zealand. These destinations offer
          adventure, culture, and beauty.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 px-4 pb-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[48%] lg:w-[31%] h-60 bg-amber-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              src={card.src}
              alt={card.title}
            />
            <p className="absolute text-white text-xl font-bold text-center bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/40 rounded-lg py-1">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default InternationalCard;

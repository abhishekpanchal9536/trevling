import React from "react";

const CardSummer = () => {
  const cards = [
    {
      title: "Hiker Beautiful Mountains",
      src: "src/assets/imges/navimage_files/village-country_688085-11.jpg",
    },
    {
      title: "Royal Palace Jaipur",
      src: "src/assets/imges/Royal Palace Jaipur.avif",
    },
    {
      title: "Serene Kerala Backwaters",
      src: "src/assets/imges/Serene Kerala Backwaters.avif",
    },
    {
      title: "Snowy Manali Hills",
      src: "src/assets/imges/Snowy Manali Hills.avif",
    },
    {
      title: "Beaches of Goa",
      src: "src/assets/imges/Beaches of Goa.avif",
    },
    {
      title: "Temples of Madurai",
      src: "src/assets/imges/Temples of Madurai.avif",
    },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-700 mb-6">
          Best Places in National
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          India is filled with beautiful destinations. In Rajasthan, visit
          Jaipur for royal palaces. Kerala offers serene backwaters in Alleppey.
          Himachal Pradesh boasts hill towns like Manali. Goa is perfect for
          beaches. In Uttarakhand, explore Rishikesh. Tamil Nadu has temples
          like Madurai.
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

export default CardSummer;

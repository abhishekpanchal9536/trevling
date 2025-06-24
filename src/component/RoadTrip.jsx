const RoadTrip = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 justify-between items-start">
        
        {/* Horizontal Card (Image Only) */}
        <div className="bg-white shadow-lg  overflow-hidden w-full md:w-2/3">
          <img
            src="src/assets/imges/road trip.png"
            alt="Road Planning"
            className="w-full h-64 md:h-96 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Vertical Card (Image + Text) */}
        <div className="bg-white shadow-lg  overflow-hidden w-full md:w-1/3">
          <img
            src="src/assets/imges/navimage_files/male-with-backpack-standing-cliff-enjoying-view-sea-near-mountain_181624-1752.jpg"
            alt="Packing Essentials"
            className="w-full h-60 md:h-64 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-bold text-gray-800">Pack Smart</h2>
            <p className="text-gray-600 mt-2">
              Don’t forget to carry essentials like snacks, power banks, and water for a smooth ride.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default RoadTrip;

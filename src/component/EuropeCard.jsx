const EuropeCard = () => {
const mainPlace = {
  country: "France",
  place: "Eiffel Tower",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
};

const sidePlaces = [
  {
    country: "Italy",
    place: "Colosseum",
    image:
      "src/assets/imges/Italy.avif",
  },
  {
    country: "UK",
    place: "Big Ben",
    image:
      "src/assets/imges/UK.avif",
  },
  {
    country: "Spain",
    place: "Sagrada Familia",
    image:
      "src/assets/imges/Spain.avif",
  },
  {
    country: "Germany",
    place: "Brandenburg Gate",
    image:
      "src/assets/imges/Brandenburg Gate.avif",
  },
];
    return (
    <>
     <div className="bg-amber-100 p-4 md:p-10">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-8 border-b-4 inline-block border-amber-500 pb-2">
        Explore Top Destinations In Europe
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Small Card */}
        <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={mainPlace.image}
            alt={mainPlace.place}
            className="h-96 w-full object-cover"
          />
          <div className="p-2">
            <h2 className="text-base font-bold text-gray-800">{mainPlace.place}</h2>
            <p className="text-gray-500 text-sm">in {mainPlace.country}</p>
          </div>
        </div>

        {/* Right Large Grid of Cards */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {sidePlaces.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={place.image}
                alt={place.place}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {place.place}
                </h3>
                <p className="text-gray-600 text-sm">in {place.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};
export default EuropeCard;

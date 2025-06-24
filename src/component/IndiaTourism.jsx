const tourismExperiences = [
  {
    title: "Explore the Backwaters of Kerala",
    image: "src/assets/imges/Explore the Backwaters of Kerala.avif",
  },
  {
    title: "Camel Safari in Rajasthan",
    image: "src/assets/imges/Camel Safari in Rajasthan.avif",
  },
  {
    title: "Spiritual Journey in Varanasi",
    image: "src/assets/imges/Spiritual Journey in Varanasi.avif",
  },
  {
    title: "Himalayan Trek in Himachal",
    image: "src/assets/imges/Himalayan Trek in Himachal.avif",
  },
];

const IndiaTourism = () => {
    return(
   <div className="bg-white text-black py-10 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center uppercase border-b-2 border-gray-900 inline-block">
        Top India Tourism Experiences
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {tourismExperiences.map((exp, index) => (
          <div key={index} className="relative group overflow-hidden border border-gray-800">
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-30 transition duration-300">
              <h3 className="text-white text-lg font-semibold px-4 text-center">
                {exp.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}
export default IndiaTourism ;
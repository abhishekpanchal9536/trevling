import { Tab } from '@headlessui/react';

  const cities = [
  { title: "Kashmir", image: "src/assets/imges/Kashmir.avif" },
  { title: "Amritsar", image: "src/assets/imges/Amritsar.avif" },
  { title: "Jaipur", image: "src/assets/imges/Jaipur.avif" },
  { title: "Ladakh", image: "src/assets/imges/Ladakh.avif" },
  { title: "Rishikesh", image: "src/assets/imges/Rishikesh.avif" },
  { title: "Varanasi", image: "src/assets/imges/Varanasi.avif" },
];
const southCities = [
  { title: "Munnar", image: "src/assets/imges/Munnar.avif" },
  { title: "Coorg", image: "src/assets/imges/Coorg.avif" },
  { title: "Ooty", image: "src/assets/imges/Ooty.avif" },
  { title: "Pondicherry", image: "src/assets/imges/Pondicherry.avif" },
  { title: "Hampi", image: "src/assets/imges/Hampi.avif" },
  { title: "Alleppey", image: "src/assets/imges/Alleppey.avif" },
];

const eastIndiaCities = [
  { title: "Kolkata", image: "src/assets/imges/Kolkata.avif" },
  { title: "Darjeeling", image: "src/assets/imges/Darjeeling.avif" },
  { title: "Ranchi", image: "src/assets/imges/Ranchi.avif" },
  { title: "Sundarbans", image: "src/assets/imges/Sundarbans.avif" },
  { title: "Gangtok", image: "src/assets/imges/Gangtok.avif" },
  { title: "Bhubaneswar", image: "src/assets/imges/Bhubaneswar.jpg" },
];

const westIndiaCities = [
  { title: "Mumbai", image: "src/assets/imges/Mumbai.avif" },
  { title: "Goa", image: "src/assets/imges/Goa.avif" },
  { title: "Udaipur", image: "src/assets/imges/Udaipur.avif" },
  { title: "Ahmedabad", image: "src/assets/imges/Ahmedabad.jpg" },
  { title: "Kutch", image: "src/assets/imges/Kutch.avif" },
  { title: "Mount Abu", image: "src/assets/imges/Mount Abu.avif" },
];
const centerIndiaCities = [
  { title: "Bhopal", image: "src/assets/imges/Bhopal.avif" },
  { title: "Indore", image: "src/assets/imges/Indore.avif" },
  { title: "Khajuraho", image: "src/assets/imges/Khajuraho.avif" },
  { title: "Nagpur", image: "src/assets/imges/Nagpur.avif" },
  { title: "Raipur", image: "src/assets/imges/Raipur.avif" },
  { title: "Jabalpur", image: "src/assets/imges/Jabalpur.avif" },
];



const IndiaDisa = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Tab.Group>
        <Tab.List className="flex space-x-4 border-b">
          <Tab
            className={({ selected }) =>
              selected
                ? 'border-b-2 border-blue-500 text-blue-600 font-semibold px-4 py-2'
                : 'text-gray-600 px-4 py-2 hover:text-blue-500'
            }
          >
            North India
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? 'border-b-2 border-blue-500 text-blue-600 font-semibold px-4 py-2'
                : 'text-gray-600 px-4 py-2 hover:text-blue-500'
            }
          >
        South India
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? 'border-b-2 border-blue-500 text-blue-600 font-semibold px-4 py-2'
                : 'text-gray-600 px-4 py-2 hover:text-blue-500'
            }
          >
          Esat India
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? 'border-b-2 border-blue-500 text-blue-600 font-semibold px-4 py-2'
                : 'text-gray-600 px-4 py-2 hover:text-blue-500'
            }
          >
            West India
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? 'border-b-2 border-blue-500 text-blue-600 font-semibold px-4 py-2'
                : 'text-gray-600 px-4 py-2 hover:text-blue-500'
            }
          >
           Center India
          </Tab>
        </Tab.List>

        <Tab.Panels className="mt-6">
          <Tab.Panel>
         <div className="bg-orange-50 py-10 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        North India Highlights
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cities.map((city, index) => (
          <div
            key={index}
            className="relative h-40 w-full overflow-hidden group shadow-md"
          >
            <img
              src={city.image}
              alt={city.title}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-lg md:text-xl font-semibold">
                {city.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-yellow-50 py-10 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        South India Highlights
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {southCities.map((city, index) => (
          <div
            key={index}
            className="relative h-40 w-full overflow-hidden group shadow-md"
          >
            <img
              src={city.image}
              alt={city.title}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-lg md:text-xl font-semibold">
                {city.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
          </Tab.Panel>
          <Tab.Panel>
             <div className="bg-yellow-50 py-10 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        East India Highlights
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {eastIndiaCities.map((city, index) => (
          <div
            key={index}
            className="relative h-40 w-full overflow-hidden group shadow-md"
          >
            <img
              src={city.image}
              alt={city.title}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-lg md:text-xl font-semibold">
                {city.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-yellow-50 py-10 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        West India Highlights
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {westIndiaCities.map((city, index) => (
          <div
            key={index}
            className="relative h-40 w-full overflow-hidden group shadow-md"
          >
            <img
              src={city.image}
              alt={city.title}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-lg md:text-xl font-semibold">
                {city.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
          </Tab.Panel>
          <Tab.Panel>
             <div className="bg-yellow-50 py-10 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Central India Highlights
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {centerIndiaCities.map((city, index) => (
          <div
            key={index}
            className="relative h-40 w-full overflow-hidden group shadow-md"
          >
            <img
              src={city.image}
              alt={city.title}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-lg md:text-xl font-semibold">
                {city.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default IndiaDisa;

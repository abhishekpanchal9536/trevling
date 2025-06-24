import React from "react";

const travelStories = [
  {
    title: "Tea Gardens of Assam",
    description: "The Tea Gardens of Assam offer lush green landscapes, serene environments, and world-renowned tea plantations, making it a peaceful and refreshing travel destination.",
    image: "src/assets/imges/Tea Gardens of Assam.avif",
  },
  {
    title: "Desert Festival of Rajasthan",
    description: "The Desert Festival of Rajasthan is a vibrant cultural celebration in Jaisalmer, showcasing folk music, dance, camel races, and traditional Rajasthani attire and crafts.",
    image: "src/assets/imges/Desert Festival of Rajasthan.avif",
  },
];



const LatestTravel = () =>{
    return(
       <div className="w-full bg-white py-10 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 border-b border-gray-300 inline-block">
        Our Latest Travel Stories
      </h2>

      <div className="space-y-12">
        {travelStories.map((story, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            <img src={story.image} alt={story.title} className="w-full md:w-1/2 h-64 object-cover" />
            <div className="flex-1 bg-gray-100 p-6 flex items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-600">{story.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}
export default LatestTravel;
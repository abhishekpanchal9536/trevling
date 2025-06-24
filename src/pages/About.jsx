const About = ()=>{
    return(
        <>
      <section className="relative bg-gradient-to-tr from-white via-blue-50 to-indigo-100 py-24 px-4 md:px-16 overflow-hidden">
      {/* Decorative Glow Circle */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-300 opacity-20 rounded-full blur-3xl z-0"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-800">
            About <span className="text-indigo-600">Ghumanchale</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We help you explore India beyond just tourist spots — connecting you to culture, people, and nature through curated travel experiences.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="backdrop-blur-md bg-white/60 border border-indigo-200 rounded-2xl p-6 shadow-lg transition transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-indigo-700 mb-2">🌍 Our Mission</h3>
            <p className="text-gray-700">
              To inspire people to travel deeper and connect more meaningfully with the places they visit.
            </p>
          </div>

          {/* Card 2 */}
          <div className="backdrop-blur-md bg-white/60 border border-indigo-200 rounded-2xl p-6 shadow-lg transition transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-indigo-700 mb-2">🧳 Experience India</h3>
            <p className="text-gray-700">
              Trek through the Himalayas, sail Kerala's backwaters, or ride camels in Rajasthan — we take you there.
            </p>
          </div>

          {/* Card 3 */}
          <div className="backdrop-blur-md bg-white/60 border border-indigo-200 rounded-2xl p-6 shadow-lg transition transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-indigo-700 mb-2">💡 Why Choose Us?</h3>
            <p className="text-gray-700">
              10,000+ happy travelers, local guides, hand-picked stays, and seamless planning.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-20 flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Made for Explorers</h3>
            <p className="text-gray-600 leading-relaxed">
              Every journey with us is crafted to awaken your curiosity and leave you with unforgettable memories.
              We don't just show you India — we help you experience it from the inside out.
            </p>
            <a
              href="/"
              className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
            >
              Start Your Journey
            </a>
          </div>
          <div className="md:w-1/2  overflow-hidden shadow-2xl">
            <img
              src="src/assets/imges/Made for Explorers.avif"
              alt="Travel India"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
        </>
    )
}
export default About;
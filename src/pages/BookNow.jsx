import toast from "react-hot-toast";

const BookNow = () => {
  const handelSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    toast.success("Submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl p-6 md:p-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Book Your Journey</h2>

        <form className="space-y-6" onSubmit={handelSubmit}>
          {/* Destination */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Destination</label>
            <input
              type="text"
              placeholder="Enter destination"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Date Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Check-in Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Check-out Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Travelers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Adults</label>
              <input
                type="number"
                min="1"
                placeholder="Number of adults"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Children</label>
              <input
                type="number"
                min="0"
                placeholder="Number of children"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition duration-200"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookNow;

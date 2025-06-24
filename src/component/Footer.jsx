
 
 const Footer = () => {
    return(
        <>
  <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Ghumanchale</h2>
          <p className="text-sm text-gray-400">
            Discover amazing places with us. From beaches to mountains, we help you travel better.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Tours</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400">📍 New Delhi, India</p>
          <p className="text-sm text-gray-400">📞 +91 9536581896</p>
          <p className="text-sm text-gray-400">✉️ hello@ghumanchale.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><i className="fab fa-facebook"></i> Facebook</a>
            <a href="#" className="hover:text-pink-400"><i className="fab fa-instagram"></i> Instagram</a>
            <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i> Twitter</a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Ghumanchale. All rights reserved.
      </div>
    </footer>

        </>
    );
};
export default Footer ;
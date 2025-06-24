const NotFound = () =>{
    return(
        <>
         <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-blue-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-blue-700 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
        </>
    )
}
export default NotFound;
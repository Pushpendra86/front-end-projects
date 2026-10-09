const App = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="w-full min-h-16 flex items-center justify-between px-5 md:px-10">
        {/* Logo */}
        <div>
          <img
            src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.jpg"
            alt="Nike Logo"
            className="w-16 h-10 object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <a href="#menu" className="hover:text-red-600">
            MENU
          </a>
          <a href="#location" className="hover:text-red-600">
            LOCATION
          </a>
          <a href="#about" className="hover:text-red-600">
            ABOUT
          </a>
          <a href="#contact" className="hover:text-red-600">
            CONTACT
          </a>
        </div>

        {/* Logout */}
        <button
          type="button"
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
        >
          LOGOUT
        </button>
      </nav>

      {/* Hero Section */}
      <main>
        <section className="w-full max-w-7xl mx-auto min-h-[500px] flex flex-col md:flex-row items-center px-5 md:px-10 py-10">
          {/* Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight">
              YOUR FEET DESERVE THE BEST
            </h1>

            <p className="mt-5 max-w-lg text-gray-600 leading-relaxed">
              YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
              SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button
                type="button"
                className="bg-red-600 px-5 py-3 text-white font-bold hover:bg-red-700 transition"
              >
                Shop Now
              </button>

              <button
                type="button"
                className="border border-gray-800 px-5 py-3 font-bold hover:bg-gray-100 transition"
              >
                Category
              </button>
            </div>

            {/* Available On */}
            <div className="mt-6">
              <p className="text-sm text-gray-600">Also available on</p>

              <div className="flex items-center gap-4 mt-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMv9K3i3_jTzbWgZwCMHPnw9k8J3GgeKN--rIrqzNOGMcCKoaWxlpVfE&s=10"
                  alt="Online shopping platform"
                  className="w-8 h-8 object-contain"
                />

                <img
                  src="https://w7.pngwing.com/pngs/141/900/png-transparent-amazon-com-amazon-echo-amazon-music-the-everything-store-jeff-bezos-and-the-age-of-amazon-kindle-fire-black-friday-miscellaneous-text-logo.png"
                  alt="Amazon"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Shoe Image */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex items-center justify-center">
            <img
              src="/shoe_image.png"
              alt="Nike shoe"
              className="w-full max-w-xl h-auto object-contain"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;

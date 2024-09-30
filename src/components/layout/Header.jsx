import React from "react";

const Header = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('../src/assets/scott.jpg')` }}
    >
      <div className="flex flex-col justify-center items-start h-full px-8 md:px-16 lg:px-24 text-white font-montserrat">
        {/* Slogan Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 py-3 px-6 rounded-full shadow-lg flex items-center space-x-4 animate-bounce">
          <span className="text-sm md:text-lg font-bold uppercase tracking-wider">
            Not the best fitness club, but the best version of yourself
          </span>
        </div>

        {/* Main Hero Text */}
        <div className="mt-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Welcome to <br />
            <span className="text-orange-500">PowerPeak</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-md leading-relaxed">
            Join our community and start your fitness journey today.
          </p>

          {/* Call to Action Button */}
          <div className="mt-6">
            <a
              href="/membership"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

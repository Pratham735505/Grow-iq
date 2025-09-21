import  { useState, useEffect } from 'react';



// The Header component with a dynamic cinematic banner
const Header = () => {
  const banners = [
    {
      title: "GROW-IQ",
      tagline: "Education Point - Student's First Choice",
      subtitle: "Our Classes - 6th to 12th (C.B.S.E., I.C.S.E. & U.P. BOARD)",
      motto: "Where Excellence Meets Education"
    },
    {
      title: "Special Preparation",
      tagline: "U.P.P, RRB, SSC, Nursing Officer Batch",
      subtitle: "Physics, Chemistry, Maths & Biology",
      motto: "Unlocking Your Potential for Success"
    },
    {
      title: "Expert Faculty",
      tagline: "Er. ARJUN SIR & Er. A.K. NAGVANSHI SIR",
      subtitle: "Uttar Pradesh - Kanchanpur Medical Road, Gorakhpur",
      motto: "Guiding You Towards Your Goals"
    }
  ];

  const [currentBanner, setCurrentBanner] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextBanner = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
      setIsAnimating(false);
    }, 500); // Match animation duration
  };

  const prevBanner = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
      setIsAnimating(false);
    }, 500); // Match animation duration
  };

  useEffect(() => {
    const interval = setInterval(nextBanner, 5000);
    return () => clearInterval(interval);
  }, [currentBanner]);

  return (
    <header className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden rounded-b-3xl shadow-2xl transition-all duration-700 ease-in-out bg-white">
      {/* Dynamic Text Banner */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex flex-col items-center justify-center p-4 md:p-16 lg:p-24 transition-all duration-1000 ease-in-out ${
            index === currentBanner ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Text Container with animation */}
          <div
            className={`text-center transition-all duration-500 ease-in-out transform ${
              isAnimating ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
            }`}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-500 drop-shadow-md">
              {banner.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 drop-shadow-md">
              {banner.tagline}
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-4 text-gray-600 drop-shadow-md">
              {banner.subtitle}
            </h2>
            <p className="mt-2 text-md md:text-lg italic text-red-500 drop-shadow-md">
              "{banner.motto}"
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center p-4 z-20">
        <button
          onClick={prevBanner}
          className="p-3 cursor-pointer bg-gray-200 bg-opacity-50 rounded-full text-black hover:bg-opacity-75 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          aria-label="Previous Banner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center p-4 z-20">
        <button
          onClick={nextBanner}
          className="p-3 cursor-pointer bg-gray-200 bg-opacity-50 rounded-full text-black hover:bg-opacity-75 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          aria-label="Next Banner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBanner ? 'bg-black scale-125' : 'bg-gray-400 opacity-50'
            }`}
          ></div>
        ))}
      </div>
    </header>
  );
};
export default Header;

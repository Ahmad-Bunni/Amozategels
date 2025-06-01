import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [showDescription, setShowDescription] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    // Trigger animations with delays
    const timer1 = setTimeout(() => setShowDescription(true), 800);
    const timer2 = setTimeout(() => setShowCTA(true), 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center h-full">
      <div className="flex flex-col opacity-90 bg-gray-50 py-8 space-y-6">
        <span
          className={` text-cyan-800 text-3xl md:text-5xl font-bold px-4 font-kanit`}
        >
          Precision in Every Tile
        </span>

        {/* Animated description section */}
        <div
          className={`px-4 transition-all duration-1000 ease-out transform ${
            showDescription
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-3xl">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-kanit">
              <span className="font-bold text-cyan-800">Amoza Tegels</span> is a
              premier tile installation company specializing in precision
              craftsmanship and superior quality workmanship.
            </p>
          </div>
        </div>

        {/* Animated call-to-action section */}
        <div
          className={`px-4 transition-all duration-1000 ease-out transform ${
            showCTA ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gray-600 text-base md:text-lg font-kanit mb-4">
            Discover the quality of our work and explore our portfolio of tile
            installations.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 font-kanit group"
            >
              View Our Work
              <svg
                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            <Link
              to="/quote"
              className="inline-flex items-center bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 font-kanit group"
            >
              Request a Quote
              <svg
                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

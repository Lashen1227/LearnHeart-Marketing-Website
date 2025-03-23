import { useState } from "react";
import { FaUserPlus, FaHandshake, FaLightbulb } from "react-icons/fa";

const Works = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="works" className="py-16 bg-[#080831] text-white border-t border-gray-700">
      <div className="container px-5 mx-auto text-center md:px-10 lg:px-16">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl text-[#B3C5EF]">
          How LearnHeart Works
        </h1>
        <p className="mb-12 text-lg text-gray-400 sm:text-l">
          Three easy steps to start making a difference in rural Sri Lankan education.
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Step 1 */}
          <div className="p-8 bg-[#161B22] rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(96,165,250,0.3)]">
            <div className="flex justify-center mb-4">
              <FaUserPlus className="text-[#60A5FA] text-5xl" />
            </div>
            <h2 className="mb-4 text-xl font-semibold text-[#B3C5EF]">Step 1: Sign Up</h2>
            <p className="text-gray-400">
              Create your profile as a volunteer, school, or organization using our secure authentication system.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-8 bg-[#161B22] rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(96,165,250,0.3)]">
            <div className="flex justify-center mb-4">
              <FaHandshake className="text-[#60A5FA] text-5xl" />
            </div>
            <h2 className="mb-4 text-xl font-semibold text-[#B3C5EF]">Step 2: Connect</h2>
            <p className="text-gray-400">
              Browse opportunities, request seminars, or offer your skills based on your role in the platform.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-8 bg-[#161B22] rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(96,165,250,0.3)]">
            <div className="flex justify-center mb-4">
              <FaLightbulb className="text-[#60A5FA] text-5xl" />
            </div>
            <h2 className="mb-4 text-xl font-semibold text-[#B3C5EF]">Step 3: Make an Impact</h2>
            <p className="text-gray-400">
              Host or join seminars, share knowledge, and help bridge the education gap in rural Sri Lanka.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <button
            className="px-6 py-3 text-lg font-semibold text-white bg-[#60A5FA] rounded-lg shadow-lg hover:bg-[#4A90E2] transition duration-300"
            onClick={openModal}
          >
            Watch Demo Video
          </button>
          <button
            className="px-6 py-3 text-lg font-semibold text-white bg-[#60A5FA] rounded-lg shadow-lg hover:bg-[#4A90E2] transition duration-300"
            onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Your Journey →
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl mx-4 bg-[#161B22] rounded-lg shadow-lg p-6 h-[80vh] overflow-y-auto">
            <button
              className="absolute text-gray-400 top-1 right-1 hover:text-white"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative h-full">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/Gxb9RMJ9Ars?autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
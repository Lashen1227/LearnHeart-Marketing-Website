import { FaUserPlus, FaHandshake, FaLightbulb } from "react-icons/fa";

const Works = () => {
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

        <div className="flex justify-center mt-12">
          <button
            className="px-6 py-3 text-lg font-semibold text-white bg-[#60A5FA] rounded-lg shadow-lg hover:bg-[#4A90E2] transition duration-300"
            onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Your Journey →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;

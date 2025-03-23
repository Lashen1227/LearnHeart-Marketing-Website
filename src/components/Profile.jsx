import { Typewriter } from "react-simple-typewriter";
import CoverImage from "../assets/images/cover.png";
import Wave from "./Wave";

const Profile = () => {
  return (
    <section id="home" className="pt-16 text-gray-600 bg-darkblue body-font lg:min-h-100vh">
      <div className="flex flex-col items-center gap-2 p-5 mx-auto md:pt-12 md:px-7 lg:py-20 lg:flex-row-reverse min-h-fit">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="false"
          className="w-5/6 sm:max-w-xs md:max-w-sm lg:max-w-md sm:w-2/6 lg:mr-10 xl:mr-20 lg:p-5 lg:w-1/3 xl:w-1/4 "
        >
          <img
            className="object-cover object-center"
            src={CoverImage}
          />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow lg:pr-4 lg:mr-14 md:mb-0 xl:scale-105">
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="mb-4 text-4xl font-medium text-center text-white title-font md:text-5xl"
          >
            Build Connections Across{" "}
          </h2>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="mb-4 text-5xl font-medium text-dark-orange lg:inline-block"
          >
            &nbsp;
            <Typewriter
              words={["LearnHeart"]}
              loop={false}
              typeSpeed={200}
              deleteSpeed={200}
              delaySpeed={1150}
            />
          </div>
            <p
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              data-aos-once="false"
              className="mb-2 text-lg leading-relaxed text-white md:text-xl"
            >
              Sri Lanka&apos;s first platform connecting  schools with <br/> volunteers and educational opportunities.
            </p>

          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="false"
            className="flex justify-center mt-4 gap-x-4 md:gap-x-5 md:justify-between"
          >
            <button className="inline-flex p-2 py-3 text-sm text-white duration-300 bg-black border border-white rounded-full focus:outline-none md:text-base lg:text-lg xl:px-10 hover:scale-110">
              <a href="https://learnheart.onrender.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                Join Us Now
              </a>
            </button>

          </div>
        </div>
      </div>
      <Wave />
    </section>
  );
};

export default Profile;

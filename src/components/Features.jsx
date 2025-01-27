import Demo from "./Demo";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.webp";
import img4 from "../assets/images/image4.webp";

const Features = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section id="features" className="text-gray-600 body-font">
      <div className="px-3 py-8 mx-auto text-center sm:mx-6 md:mx-12 xl:mx-40">
        <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-4xl">
          Core Features
        </h1>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          transitionDuration={500}
          className="mt-4"
        >
          {/* Carousel Items */}
          <div className="p-6 mx-2 transition-transform duration-300 rounded-lg shadow-lg hover:scale-105 bg-[#d9d9d9]">
            <h2 className="text-lg font-medium text-gray-900">
              Connectiong Together
            </h2>
            <img src={img1} alt="Feature 1" className="w-full h-40" />
            <p className="mt-2 text-sm text-gray-600">
              Description of feature 1.
            </p>
          </div>
          <div className="p-6 mx-2 transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105">
            <h2 className="text-lg font-medium text-gray-900">
              User Dashboard
            </h2>
            <img src={img2} alt="Feature 2" className="w-full h-40" />
            <p className="mt-2 text-sm text-gray-600">
              Description of feature 2.
            </p>
          </div>
          <div className="p-6 mx-2 transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105">
            <h2 className="text-lg font-medium text-gray-900">Resourse Bank</h2>
            <img src={img3} alt="Feature 3" className="w-full h-40" />
            <p className="mt-2 text-sm text-gray-600">
              Description of feature 3.
            </p>
          </div>
          <div className="p-6 mx-2 transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105">
            <h2 className="text-lg font-medium text-gray-900">
              Skill Verification
            </h2>
            <img src={img4} alt="Feature 4" className="w-full h-40" />
            <p className="mt-2 text-sm text-gray-600">
              Description of feature 4.
            </p>
          </div>
        </Carousel>
      </div>
      <Demo />
    </section>
  );
};

export default Features;

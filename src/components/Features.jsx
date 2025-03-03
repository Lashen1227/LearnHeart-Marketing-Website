import Demo from "./Demo";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.webp";
import img4 from "../assets/images/image4.webp";
import img5 from "../assets/images/image5.png";

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
    <section id="features" className="text-gray-600 body-font bg-[#0a192f] py-10">
      <div className="px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
        <h1 className="text-2xl font-medium text-[#B3C5EF] sm:text-4xl">
          Core Features
        </h1>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={5000}
          transitionDuration={2000}
          className="mt-4"
        >
          {[img1, img2, img3, img4, img5].map((image, index) => (
            <div
              key={index}
              className="p-6 mx-2 transition-transform duration-300 rounded-lg shadow-lg hover:scale-105 bg-[#112240] h-96 border border-blue-500"
            >
              <h2 className="text-lg font-medium text-white">
                {[
                  "Connecting Together",
                  "User Dashboard",
                  "Resource Bank",
                  "Skill Verification",
                  "Compliance with SDG Goal",
                ][index]}
              </h2>
              <img src={image} alt={`Feature ${index + 1}`} className="w-full h-40 rounded-md" />
              <p className="mt-2 text-sm text-gray-300">
                {["A platform that connects volunteers, organizations, and schools to collaborate on impactful seminars and events. It streamlines booking, organizing, and participation for community-driven initiatives.",
                  "The platform offers three separate dashboards: one for volunteers to manage opportunities, one for organizations to schedule and manage events, and one for schools to browse and book seminars. Each dashboard is tailored to its users' needs.",
                  "The platform includes a resource bank that offers a collection of study materials. It provides a wide range of educational content to support seminars and learning initiatives. Users can easily browse and utilize resources to enhance their knowledge and event experiences.",
                  "The platform includes a skill verification process to assess and validate the skills of volunteers. Schools and organizations can confidently rely on verified volunteers for their events and initiatives.",
                  "The platform aligns with the SDG Goal 4 on Quality Education by facilitating access to educational resources, promoting skill development, and supporting meaningful learning opportunities through seminars and workshops. It fosters inclusive and equitable education for all participants."][index]}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
      <Demo />
    </section>
  );
};

export default Features;

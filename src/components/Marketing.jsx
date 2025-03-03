import ChooseUSImage from "../assets/images/study.jpg";

const Marketing = () => {
  return (
    <section id="marketing" className="py-16 body-font bg-gray-50">
      <div className="container px-5 mx-auto md:px-10 lg:px-16">
        {/* Why LearnHeart Section */}
        <div className="flex flex-col items-center justify-between mb-20 lg:flex-row">
          {/* Image Section */}
          <div className="mb-10 lg:w-1/2 lg:mb-0 lg:pr-10">
            <img
              src={ChooseUSImage}
              alt="Why Choose Us"
              className="object-cover w-full h-64 rounded-lg shadow-2xl md:h-[400px] transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          {/* Text Section */}
          <div className="lg:w-1/2 lg:pl-10">
            <h1 className="mb-6 text-2xl font-medium text-darkblue sm:text-4xl">
              Why LearnHeart?
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              LearnHeart is a platform that provides a seamless learning
              experience for students and educators. Our platform is designed
              to be user-friendly, intuitive, and accessible to all users. We
              offer a wide range of features that make it easy for students to
              learn, collaborate, and engage with their peers and teachers.
            </p>
          </div>
        </div>

        {/* Discover LearnHeart Section */}
        <div className="flex flex-col items-center justify-between lg:flex-row">
          {/* Text Section */}
          <div className="mb-10 lg:w-1/2 lg:mb-0 lg:pr-10">
            <h1 className="mb-6 text-2xl font-medium text-darkblue sm:text-4xl">
              Discover LearnHeart
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Explore our platform through this demo video. It highlights key
              features, showcases how to get started, and provides a glimpse into
              what makes our platform stand out. Watch the video to learn more!
            </p>
          </div>
          {/* Video Section */}
          <div className="lg:w-1/2 lg:pl-10">
            <div>
              <iframe
                className="w-full h-64 max-w-xl transition-transform duration-300 rounded-lg shadow-lg md:h-80 hover:scale-105"
                src="https://www.youtube.com/embed/Y6kXiw5nt9E"
                title="Discover LearnHeart"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
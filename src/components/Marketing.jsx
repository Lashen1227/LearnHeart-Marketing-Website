const Marketing = () => {
  return (
    <section id="marketing" className="body-font">
      <div className="p-5 mx-auto mt-3 md:mt-5 md:mx-10 lg:mx-16">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          {/* Left Section: Title */}
          <div className="lg:w-1/2">
            <h1 className="mb-4 text-2xl font-medium text-gray-800 sm:text-4xl">
              Discover LearnHeart
            </h1>
            <p className="text-lg leading-relaxed text-gray-600">
              Explore our platform through this demo video. It highlights key
              features, showcases how to get started, and provides a glimpse into
              what makes our platform stand out. Watch the video to learn more!
            </p>
          </div>
          
          {/* Right Section: Video */}
          <div className="lg:w-1/2">
            <iframe
              className="w-full h-64 max-w-xl rounded-lg shadow-lg md:h-80"
              src="https://www.youtube.com/embed/1agRuNIytSg"
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;

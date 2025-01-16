import DemoVedio from "../assets/vedios/demo.mp4";

const Demo = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="p-4 pt-0 mx-auto mt-5 md:p-5 md:mx-20 lg:mx-32 xl:mx-56">
        <div
        >
          <video
            className="object-contain w-full h-full col-span-3 rounded-md sm:col-span-4 md:col-span-5 lg:col-span-6 border-t-gray-200 md:shadow-md"
            loop
            muted
            autoPlay
          >
            <source src={DemoVedio} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Demo;

import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="py-2 mt-2 font-normal text-center text-white bg-darkblue text-md md:py-3 md:mt-4">
      <img src={Logo} alt="Logo" className="h-8 mx-auto md:h-20"/>
      {/* <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="text-xs ">
        Copywrite by <span className="font-bold"> Team CodeNova</span>
      </p> */}
    </div>
  );
};

export default Footer;

import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="py-2 mt-2 font-normal text-center text-white bg-darkblue text-md md:py-3 md:mt-4">
      <img src={Logo} alt="Logo" className="h-8 mx-auto md:h-20"/><br />
        {/* Copyright */}
        <div className="pt-6 text-center border-t border-gray-700">
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} <span className="font-bold">Team CodeNova</span>. All rights reserved.
          </p>
        </div>
    </div>
  );
};

export default Footer;

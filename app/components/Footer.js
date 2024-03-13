

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
  
      <div className="flex bg-greybg flex-col pb-8 gap-y-6 pt-[100px] md:flex md:flex-row md:justify-between w-full lg:mx-auto lg:w-[1200px]">
      <div className="text-black justify-center flex text-[16px] gap-x-6">
          <a href="http://">DATENSCHUTZ</a>
          <a href="http://">IMPRESSUM</a>
        </div>

        <div className="flex gap-x-6 justify-center text-2xl">
          <a
            href="https://web.facebook.com/profile.php?id=100029004735020&_rdc=1&_rdr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/stefan_porkert/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.youtube.com/channel/UCNoS7iHoYfZZHJo4j8UK1bQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiYoutube />
          </a>
        </div>
        <div className="flex justify-center">
          
            <p>© reanalog by Stefan Porkert </p>
     
        </div> 
      </div>

  );
};

export default Footer;

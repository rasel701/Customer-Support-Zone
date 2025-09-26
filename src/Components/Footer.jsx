import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
const Footer = () => {
  return (
    <div className="  max-w-[90%] mx-auto  ">
      <div className=" flex-col flex  space-y-3 justify-center items-center px-2 space-x-4 pt-18 pb-24 lg:flex-row lg:justify-between lg:items-start">
        <div className="w-[80%%] lg:w-[25%]">
          <h2 className="text-[20px] font-bold text-white">
            CS — Ticket System
          </h2>
          <p className="mt-2 text-[16px] text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="">
          <h2 className="text-[20px] font-bold text-white">Company</h2>
          <ul className="mt-2 text-[16px] text-gray-400 space-y-2.5">
            <li>About</li>
            <li>Our Mission</li>
            <li>Contact Saled</li>
          </ul>
        </div>
        <div className=" ">
          <h2 className="text-[20px] font-bold text-white">Services</h2>
          <ul className="mt-2 text-[16px] text-gray-400 space-y-2.5">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div className=" ">
          <h2 className="text-[20px] font-bold text-white">Information</h2>
          <ul className="mt-2 text-[16px] text-gray-400 space-y-2.5">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        <div className="">
          <h2 className="font-bold text-[20px] text-white">Social Links</h2>
          <ul className="mt-2 text-[16px]  space-y-2.5">
            <li className="flex items-center gap-2">
              <FaSquareXTwitter size={26} className="text-white rounded-full" />
              <span className="text-gray-400"> @CS — Ticket System</span>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-white" size={26} />
              <span className="text-gray-400"> @CS — Ticket System</span>
            </li>
            <li className="flex items-center gap-2">
              <FaFacebook size={26} className="text-white" />
              <span className="text-gray-400">@CS — Ticket System</span>
            </li>
            <li className="flex items-center gap-2">
              <ImMail4 className="text-white" size={26} />
              <span className="text-gray-400"> support@cst.com</span>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-1 border-gray-800 my-4" />
    </div>
  );
};

export default Footer;

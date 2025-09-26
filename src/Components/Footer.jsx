import React from "react";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <h2>CS — Ticket System</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li>About</li>
            <li>Our Mission</li>
            <li>Contact Saled</li>
          </ul>
        </div>
        <div>
          <h2>Services</h2>
          <ul>
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div>
          <h2>Information</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        <div>
          <h2>Social Links</h2>
          <ul>
            <li>
              <span className=" text-white p-3 rounded-full inline-flex">
                <FaFacebook size={24} />
              </span>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

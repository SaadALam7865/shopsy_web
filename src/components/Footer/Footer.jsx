import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.png";

import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaGithub,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#about",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white  pb-20 mt-6 ">
      <div className="container">
        <div data-aos = "zoom-in" className="grid md:grid-cols-3    pt-3">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl  text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              quos repellat laudantium dolor sit amet consect.
            </p>
          </div>

          {/* Footer Links */}
          <div className="py-8 px-3 flex gap-16">
            {/* Important Links Section */}
            <div className="flex-2">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Section */}
            <div className="flex-2 ml-20">
              <h1 className="sm:text-3xl  font-bold sm:text-left text-justify mb-3">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    key={link.title}
                  >
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links & Contact Info */}
          <div className="py-8 px-4 ml-40 ">
            <div className="flex items-center gap-3">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="#">
                <FaGithub className="text-3xl" />
              </a>
            </div>

            <div className="mt-6 ">
              <div className="flex items-center gap-5 mt-3">
                <FaLocationArrow className="text-primary" />
                <p>Karachi, Pakistan</p>
              </div>
              <div className="flex items-center gap-5 mt-3 ">
                <FaMobileAlt className="text-primary" />
                <p>+921234567</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}
      <div className="text-center  py-4 border-t border-gray-900">
        <p className="text-orange-200 text-sm mr-36 mb-4  ">
          &copy; {new Date().getFullYear()} Shopsy. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

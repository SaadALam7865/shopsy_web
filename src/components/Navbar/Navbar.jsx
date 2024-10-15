import React from "react";
import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
   
  {
    id: 1,
    name: "home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  }, {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  }, {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];


const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2 sm:py-0">
        <div className="container flex justify-between items-centre">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="logo" className="w-10 uppercase"></img>
              Shopsy
            </a>
          </div>
          {/* Search bar &  */}
          <div className="flex justify-between items-center gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px]
                    transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1
                    focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* Order button */}
          <button
            onClick={() => alert("Ordering not available yet")}
            className="bg-gradient-to-r from-primary to to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Order
            </span>
            <FaCartShopping className="text-xl drop-shadow-sm cursor-pointer" />
          </button>
          {/* Darkmode switch */}
          <div>
           
          </div>
          </div>
      
        </div>
      </div>
      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {
            Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
                >{data.name}</a>
              </li>) )}
              {/* dropdown and links */}
              <li>
                <a href="#"
                className="flex items-center gap-[2px] py-2">
                 Trending
                 <span>
                 <FaCaretDown className="transition-all duration-200 group-hover: rotate-180"/>
                 </span>
                </a>
              </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

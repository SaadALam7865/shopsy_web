
import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import Img5 from "../../assets/women/women5.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: "5.0",
    color: "white",
    aosDelay: "0",
     price: "$30.0"
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: "4.5",
    color: "Red",
    aosDelay: "200",
     price: "$25.0"
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: "4.7",
    color: "brown",
    aosDelay: "400",
     price: "$20.0"
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: "4.4",
    color: "yellow",
    aosDelay: "600",
     price: "$15.0"
  },
  {
    id: 5,
    img: Img5,
    title: "Fashion T-Shirt",
    rating: "4.5",
    color: "pink",
    aosDelay: "800",
    price: "$10.0"
  },
];

const Product = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header Section */}
        <div data-aos="fade-up" className="text-center mb-10 max-w-[600px] mx-auto">
          <p className=" text-primary text-2xl">Top Trending Products for You</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            commodi?
          </p>
        </div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-5">
            {/* Card Section */}
            {ProductsData.map((data) => (
              <div data-aos = "fade-up"
              data-aos-delay = {data.aosDelay}
              key={data.id} className="space-y-3"> 

                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-primary hover:text-black">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    
                    <span>{data.rating}</span>
                  </div>
                  <div className="flex items-center font-semibold">
                     <p>{data.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View Button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer  bg-primary text-white font-semibold py-1 px-5 rounded-full transform transition duration-500 hover:scale-110 ">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

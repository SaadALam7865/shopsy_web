import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const bannerImg = {
  backgroundImage: `url(${Banner})`, // Template literals ka istemal kiya gaya hai
  backgroundPosition: "center", // "centre" ko "center" mein badla gaya hai
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-gray-100 mb-20 text-white"
      style={bannerImg} // "BannerImg" ko "bannerImg" mein badla gaya hai
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Project
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter Your Email"
            className="w-full p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

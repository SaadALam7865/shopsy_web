import React from "react";
import Slider from "react-slick";

const TestimonialsData = [
  {
    id: 1,
    name: "Satya Nadella",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AnmJE-s1MTqVzhBlWU8Ks7QqhetHXhf4dUnIslPvnxFQ_PFMNLDxMNyp-WCzl7IY-DI&s",
  },
  {
    id: 2,
    name: "John Doe",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    img: "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
  },
  {
    id: 3,
    name: "Sam altmon",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    img: "https://static.euronews.com/articles/stories/07/39/08/60/1200x675_cmsv2_29b93bf4-842d-5deb-a4e4-85cf3490d059-7390860.jpg",
  },
  {
    id: 4,
    name: "sundar pichai",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhV4ITfYxYfeX9UDaCjIr-yYIvPHx1vljPDA&s",
  },
  {
    id: 5,
    name: "victor",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    img: "https://fastly.picsum.photos/id/11/367/267.jpg?hmac=Pqqy5lI70sWPJXIxlIgdd2tcga3zmI8Otf9rnP5t8T0",
  },
];

const Testimonials = () => {

  var settings = {
      dots:true,
      arrows:false,
      infinite:true,
      speed:500,
      slidesToScroll:1,
      autoplay:true,
      autoPlaySpeed:2000,
      cssEase: "linear",
      pauseOnHover:true,
      pauseOnFocus:true,
      responsive:[
        {
          breakpoint:10000,
          settings:{
            slidesToShow: 3,
            slidesToScroll: 1,
            Infinite:true,
          },
        },
        {
          breakpoint:1024,
          settings:{
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide:2,
          },
        },
        {
          breakpoint:640,
          settings:{
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };



  return (
    <div className="py-10 pb-10">
      <div className="container">
        {/* Header SEction */}
        <div
          data-aos="fade-up"
          className="text-center mb-10 max-w-[600px] mx-auto"
        >
          <p className="text-sm text-xl  text-primary">
            What are customer are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            commodi?
          </p>
        </div>
        {/* Testimonial Card Section */}
        <div data-aos = "zoom-in" className="mb-6">
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              
             <div className="my-6">
                <div
                key={data.id}
                className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative"
                >
               <div>
                <img src={data.img} alt="" 
                className="rounded-full h-24 w-24"/>
               </div >
               <div className="flex flex-col items-center gap-4">
                <div className="space-y-3">
                <p className="text-xs text-gray-500">{data.text}</p>
                <h1 className="text-xl font-bold text-black/80">{data.name}</h1>
                </div>
               </div>
               <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
             </div>
             </div>
            ) )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

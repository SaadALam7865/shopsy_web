
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from './components/Products/products';
import Aos from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import TrendingProducts from "./components/TrendingProducts/TrendingProducts";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
 React.useEffect(() => {
           Aos.init ({
               offset:100,
               duration:800,
               easing:"ease-in-sine",
               delay:100,
           });
           Aos.refresh()
 },[])

 return(
  <div> 
    <Navbar/>
    <Hero/>
    <Products/>
    <TopProducts/>
    <Banner/> 
    <Subscribe/>
    <TrendingProducts/> 
    <Testimonials/>
     <Footer/>
  </div>
 )
}

export default App;
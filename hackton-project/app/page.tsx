import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Hero from "./components/Hero/page";
import Shop from "./components/Shop/page";
import TopProducts from "./components/TopProducts/page";
import { PiFlagBanner } from "react-icons/pi";
import About from "./components/About/page";
import Banner from "./components/Banner/page";
import Blogs from "./components/Blogs/page";
import Products from "./components/Products/page";
import ContactUs from "./components/ContactUs/page";
import Footer from "./components/Footer/page";



export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PiFlagBanner />
      <TopProducts />
      <Banner />
      <Blogs />
      <Shop />
      <About />
      <Products />
      <ContactUs />
      <Footer />
  
      
    </div>
  );
}

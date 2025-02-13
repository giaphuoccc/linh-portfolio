import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

import Header from './component/Header.jsx';
import Highlights from './component/Highlights';
import ProjectSection from './component/ProjectSection';
import BrandLogos from './component/BrandLogos';
import RecentProjects from './component/RecentProjects';
import ContactSection from './component/ContactSection';
import Footer from './component/Footer.jsx';

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Thời gian animation (ms)
      once: true, // Animation chỉ chạy 1 lần
      easing: "ease-in-out", // Hiệu ứng chuyển động
    });
  }, []);

  return (
    <div className="flex overflow-hidden flex-col py-12 bg-zinc-900 bg-cover bg-center min-h-screen">
      <div className="flex flex-col px-20 w-full max-w-full mx-0 max-md:px-5">
        <Header />
        
        {/* Thêm hiệu ứng fade-up */}
        <div
          data-aos="fade-up"
          className="self-start mt-32 text-6xl font-bold leading-tight max-md:mt-10 max-md:text-4xl text-transparent gradient-gold"
        >
          {"Linh's Portfolio"}
        </div>

        <div
          data-aos="fade-up"
          className="mt-8 text-4xl font-medium leading-[50px] w-[832px] max-md:max-w-full text-[#D9C4A9]"
        >
          Design is a journey where empathy helps us create a connection between
          people and the object. This way, design becomes more than just a
          product, it becomes an experience.
        </div>

        {/* Đường kẻ ngăn cách */}
        <div data-aos="fade-up" className="flex shrink-0 mt-32 max-w-full h-0.5 w-full max-md:mt-10 max-md:mr-1 
            bg-[linear-gradient(to_right,rgb(36,34,32),rgb(105,95,80),rgb(36,34,32))]"/>

        {/* Hiệu ứng slide-in cho phần giới thiệu thương hiệu */}
        <div data-aos="fade-right" className="mt-32 text-5xl font-medium leading-[62px] w-[738px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[58px] gradient-gold">
          Proud to have contributed
          <br />
          {"to these brands' projects"}
        </div>

        {/* UI UX Design */}
        <div data-aos="fade-up" className="self-start mt-16 text-4xl font-medium leading-tight max-md:mt-10 gradient-gold">
          UI UX design
        </div>
        <BrandLogos type="uiux" />

        {/* Graphic Design */}
        <div data-aos="fade-up" className="self-start mt-16 text-4xl font-medium leading-tight max-md:mt-10 gradient-gold">
          Graphic design
        </div>
        <BrandLogos type="graphic" />

        {/* Đường kẻ */}
        <div data-aos="fade-up" className="flex shrink-0 mt-32 max-w-full h-0.5 w-full max-md:mt-10 max-md:mr-1 bg-[linear-gradient(to_right,rgb(36,34,32),rgb(105,95,80),rgb(36,34,32))]"/>

        {/* Highlights */}
        <div data-aos="fade-left" className="self-start mt-32 text-5xl font-medium leading-tight max-md:mt-10 max-md:ml-1 max-md:text-4xl gradient-gold">
          The highlights
        </div>
        <Highlights />

        {/* Đường kẻ ngăn cách */}
        <div data-aos="fade-up" className="flex shrink-0 mt-32 max-w-full h-0.5 w-full max-md:mt-10 max-md:mr-1 
            bg-[linear-gradient(to_right,rgb(36,34,32),rgb(105,95,80),rgb(36,34,32))]"/>

        {/* Dự án */}
        <div data-aos="fade-up" className="self-start mt-32 text-5xl font-medium leading-tight max-md:mt-10 max-md:text-4xl gradient-gold">
          Explore my <br/> latest works
        </div>
        <ProjectSection />

        {/* Recent Projects */}
        <div data-aos="fade-up" className="self-start mt-32 text-5xl font-medium leading-tight max-md:mt-10 max-md:text-4xl gradient-gold">
          And recently...
        </div>
        <RecentProjects />

        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
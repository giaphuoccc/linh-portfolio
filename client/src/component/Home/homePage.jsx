import { useEffect } from "react";
//import { useState } from "react";
//import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from './component/Header.jsx';
import ProjectCard from './component/ProjectCard.jsx';
import BrandContributions from './component/BrandContribution.jsx';
import Introduction from './component/Introduction.jsx';
import Footer from './component/Footer.jsx';

// Hàm để tách phần chữ và phần hình ảnh trong content
// const parseContent = (htmlContent) => {
//     // Tạo một DOMParser để phân tích HTML
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(htmlContent, "text/html");

//     // Tìm phần chữ trong <p> trước <img>
//     const text = doc.querySelector("p") ? doc.querySelector("p").textContent.trim() : '';  // Chỉ lấy phần text của <p>

//     // Tìm phần hình ảnh từ thẻ <img>
//     const imageSrc = doc.querySelector("img") ? doc.querySelector("img").src : '';  // Lấy src của ảnh từ thẻ <img>

//     return { text, imageSrc };
// };

const Portfolio = () => {
  //const [projects, setProjects] = useState([]); // State lưu danh sách bài viết

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 120,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });

    AOS.refresh();

    // Fetch bài đăng từ backend, chỉ lấy category "Home"
    //fetchProjects();
  }, []);

  const mainProjects = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets%2F4f495b6d81d24533a0f9f7f4a35d3038%2F1816da467e121f20b796ccb8775819e9f72acab2?placeholderIfAbsent=true",id: "ecomerchant", title: "ECO-Merchant", category: "Mobile Application", iconSrc: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/0404193747db913381f0cc842754092042d98933593f7a2754183fbecd6fd541?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets%2F4f495b6d81d24533a0f9f7f4a35d3038%2F8b5bf6789ca9b34aff0547cc917c274177004851?placeholderIfAbsent=true",id: "pharmacity", title: "Pharmacity", category: "Mobile Application", iconSrc: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/0404193747db913381f0cc842754092042d98933593f7a2754183fbecd6fd541?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets%2F4f495b6d81d24533a0f9f7f4a35d3038%2Fb8226bb90b07559f0e821ca7ea0163939778d50a?placeholderIfAbsent=true",id: "cyhome", title: "Cyhome", category: "Portal & Mobile Application", iconSrc: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/25fd667b634f9ac91d3bcacd43da27fd94ac1fb7da987e2bcb5a6fcc375d7bea?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&" },
  ];

  return (
    <div className="flex overflow-hidden flex-col items-center px-20 py-12 bg-zinc-900 max-md:px-5">
      <Header data-aos="fade-down" />

      <div className="flex flex-col mt-32 max-w-full w-[940px] max-md:mt-10">
        <Introduction data-aos="fade-down" />

        {/* Đường kẻ vàng */}
        <div className="flex shrink-0 mt-24 h-0.5 w-full max-w-[940px] mx-auto px-20 max-md:px-5 max-md:mt-10 
          bg-[linear-gradient(to_right,rgb(36,34,32),rgb(105,95,80),rgb(36,34,32))]"
          data-aos="fade-down"
        />

        <div className="flex flex-col mt-24 w-full max-w-[940px] max-md:mt-10 max-md:max-w-full">
          <h2 className="text-5xl font-medium leading-[62px] w-[337px] max-md:text-4xl max-md:leading-[58px] gradient-gold"
              data-aos="fade-down">
            Explore my latest works
          </h2>

          {mainProjects.map((project, index) => (
            <div data-aos="fade-down" key={index}>
              <ProjectCard {...project} />
            </div>
          ))}

        </div>

        {/* Đường kẻ vàng */}
        <div className="flex shrink-0 mt-24 h-0.5 w-full max-w-[940px] mx-auto px-20 max-md:px-5 max-md:mt-10 
          bg-[linear-gradient(to_right,rgb(36,34,32),rgb(105,95,80),rgb(36,34,32))]"
          data-aos="fade-down"
        />

        <div data-aos="fade-down">
          <BrandContributions />
        </div>
      </div>
      
      <div data-aos="fade-down" className="flex flex-col items-center w-full">
          <Footer />
      </div>
    </div>
  );
};

export default Portfolio;

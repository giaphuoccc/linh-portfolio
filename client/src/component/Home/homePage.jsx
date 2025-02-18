import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from './component/Header.jsx';
import ProjectCard from './component/ProjectCard.jsx';
import BrandContributions from './component/BrandContribution.jsx';
import RecentProjects from './component/RecentProjects.jsx';
import Introduction from './component/Introduction.jsx';
import Footer from './component/Footer.jsx';

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,  // 🔥 Hiệu ứng chạy trong 1200ms
      offset: 120,     // 🔥 Hiệu ứng kích hoạt khi phần tử cách 120px từ đáy viewport
      easing: "ease-in-out",
      once: false,     // 🔥 Cho phép hiệu ứng chạy lại khi cuộn lên/xuống
      mirror: false,   // 🔥 Tránh hiệu ứng bị giật khi scroll ngược lên
    });
  
    AOS.refresh(); // 🔥 Đảm bảo AOS cập nhật khi DOM thay đổi
  }, []);

  const mainProjects = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/318da8905dcc088fa15065db51d2ff4b9221e3f03a50e1f74273b1c6d256d486?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", title: "Pharmacity", category: "Landing page", iconSrc: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/7ba013f64d390806c165c86785fce5900357a09f2b70e501f351d3dd80c046f7?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/318da8905dcc088fa15065db51d2ff4b9221e3f03a50e1f74273b1c6d256d486?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", title: "Pharmacity", category: "Landing page", iconSrc: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/0404193747db913381f0cc842754092042d98933593f7a2754183fbecd6fd541?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/318da8905dcc088fa15065db51d2ff4b9221e3f03a50e1f74273b1c6d256d486?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", title: "Pharmacity", category: "Landing page", iconSrc: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/25fd667b634f9ac91d3bcacd43da27fd94ac1fb7da987e2bcb5a6fcc375d7bea?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&" },
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

          <div data-aos="fade-down">
            <RecentProjects />
          </div>
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

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./component/Header.jsx";
import Overview from "./component/Overview.jsx";
import KeyChallenges from "./component/KeyChallenges.jsx";
import ProcessSection from "./component/ProcessSection.jsx";
import DesignEnhancement from "./component/DesignEnhancement.jsx";
import LessonsLearned from "./component/LessonLearned.jsx";
import UpNext from "./component/UpNext";
import Footer from "./component/Footer";

function DetailPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Hiệu ứng chạy trong 1s, chỉ chạy 1 lần
  }, []);

  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-12 pb-24 bg-white max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-[1060px] max-md:max-w-full">
        {/* Header */}
        <div data-aos="fade-down">
          <Header />
        </div>

        {/* Overview */}
        <div data-aos="fade-down">
          <Overview />
        </div>

        {/* Product Image */}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/99c6ce03dc41cdb1725c256eedb378d46eda5480f487186bf955661e69891a31?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&"
          alt="Pharmacity product overview"
          className="object-contain mt-16 max-w-full rounded-2xl aspect-[1.75] w-[940px] max-md:mt-10"
          data-aos="fade-down"
        />

        <div className="flex my-20 w-full bg-[#F5F5F5] min-h-[2px] max-md:my-5" />

        {/* Key Challenges */}
        <div data-aos="fade-down">
          <KeyChallenges />
        </div>

        <div className="flex my-20 w-full bg-[#F5F5F5] min-h-[2px] max-md:my-5" />

        {/* Process Section */}
        <div data-aos="fade-down">
          <ProcessSection />
        </div>

        <div className="flex my-20 w-full bg-[#F5F5F5] min-h-[2px] max-md:my-5" />

        {/* Design Enhancement */}
        <div data-aos="fade-down">
          <DesignEnhancement />
        </div>

        {/* Lessons Learned */}
        <div data-aos="fade-down">
          <LessonsLearned />
        </div>

{/* Up Next */}
<div className="!w-[932px]" data-aos="fade-down">
  <UpNext />
</div>







        <div className="flex my-20 w-full bg-[#F5F5F5] min-h-[2px] max-md:my-5" />

        {/* Footer */}
        <div data-aos="fade-down">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
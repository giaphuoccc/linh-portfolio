"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ProjectHeader from "./component/ProjectHeader";
import ProjectOverview from "./component/ProjectOverview";
import KeyChallenges from "./component/KeyChallenges";
import DesignSection from "./component/DesignSection";
import WebappSection from "./component/WebappSection";
import SummarySection from "./component/SummarySection";
import Footer from "./component/Footer";

function CyHomeProject() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 120,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });

  }, []);

  return (
    <main className="mx-auto my-0 bg-white max-w-[940px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter+Display:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div data-aos="fade-down">
        <ProjectHeader />
      </div>
      <article className="py-16 max-md:p-8">
        <div data-aos="fade-down">
          <ProjectOverview />
        </div>
        <div className="flex my-20 w-full bg-[#F5F5F5] min-h-[2px] max-md:my-5" />
        <div data-aos="fade-down">
          <KeyChallenges />
        </div>
        <div className="flex my-20 w-full bg-[#F5F5F5] min-h-[2px] max-md:my-5" />
        <div data-aos="fade-down">
          <DesignSection />
        </div>
        <div className="flex my-20 w-full bg-[#F5F5F5] min-h-[2px] max-md:my-5" />
        <div data-aos="fade-down">
          <WebappSection />
        </div>
        <div data-aos="fade-down">
          <SummarySection />
        </div>
        <div className="flex my-20 w-full bg-[#F5F5F5] min-h-[2px] max-md:my-5" />
        <div data-aos="fade-down">
          <Footer />
        </div>
      </article>
    </main>
  );
}

export default CyHomeProject;

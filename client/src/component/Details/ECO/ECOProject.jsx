"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ProjectTitle from "./component/ProjectHeader";
import ProjectOverview from "./component/ProjectOverview";
import KeyChallenges from "./component/KeyChallenges";
import DesignProcess from "./component/DesignProcess";
import Summary from "./component/Summary";
import Footer from "./component/Footer"; // If you want to add a footer like in CyHome

const EcoMerchantCaseStudy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 120,
      easing: "ease-in-out",
      once: false, // Chỉ chạy animation một lần để tránh lag
      mirror: false,
    });

  }, []);

  return (
    <main className="mx-auto my-0 bg-white max-w-[940px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
      {/* Google Font Link (optional, similar to CyHome) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter+Display:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Project Header */}
      <div data-aos="fade-down">
        <ProjectTitle />
      </div>

      <article className="py-16 max-md:p-8">
        {/* Project Overview */}
        <div data-aos="fade-down">
          <ProjectOverview />
        </div>

        {/* Divider */}
        <div className="flex my-20 w-full bg-[#F5F5F5] min-h-[2px] max-md:my-5" />

        {/* Key Challenges */}
        <div data-aos="fade-down">
          <KeyChallenges />
        </div>

        {/* Divider */}
        <div className="flex my-20 w-full bg-[#F5F5F5] min-h-[2px] max-md:my-5" />

        {/* Design Process */}
        <div data-aos="fade-down">
          <DesignProcess />
        </div>

        {/* Summary */}
        <div data-aos="fade-down">
          <Summary />
        </div>

        {/* Divider */}
        <div className="flex my-20 w-full bg-[#F5F5F5] min-h-[2px] max-md:my-5" />
        
        {/* Footer (Optional) */}
        <div data-aos="fade-down">
          <Footer />
        </div>
      </article>
    </main>
  );
};

export default EcoMerchantCaseStudy;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from './component/Header.jsx';
import ExperienceItem from './component/ExperienceItem.jsx';
import Footer from './component/Footer.jsx';
import InfoSection from './component/InfoSection.jsx';
import ExperienceSection from './component/ExperienceSection.jsx';
import Divider from './component/Divider.jsx';

const experiences = [
  {
    title: "Senior Product designer",
    company: "FINVIET",
    description: "B2B2C fintech company",
    period: "08/2022 - Present",
    responsibilities: [
      "Responsible for enhancing M2B2C e-commerce platform's user experience.",
      "Manage and maintain a library of design assets and resources.",
      "Communicate and work closely with stakeholders (PO, BOD, Business Unit...) to gather requirements, provide updates, and get feedbacks and improve, create new features."
    ]
  },
  {
    title: "Product designer",
    company: "PHARMACITY",
    description: "The retail pharmacy chain in Vietnam.",
    period: "08/2021 - 08/2022",
    responsibilities: [
      "Work together with the product team to create a wireframe, prototype new features, and improve existing ones on the website and mobile app.",
      "Collaborate with other teams, such as marketing, sales, and CRM, to receive requests and support to design features and landing pages.",
      "Using a heat map, review and record user and departmental comments to help enhance the product.",
      "Manage tasks, support team members, and estimate the time required to deliver designs on time."
    ]
  },
  {
    title: "Lead designer",
    company: "CYHOME",
    description: "Residential property management platforms",
    period: "05/2019 - 10/2023",
    responsibilities: [
      "Redesign a resident and PMS (Property Management System) app completely new with a user-friendly interface that makes it simpler for everyone to use.",
      "Support graphic designer to make digital banner, standee, flyer ... and print marketing & sales materials.",
      "Mentor 1 designer entering the field and lead 1 graphic designer."
    ]
  },
  {
    title: "UI/UX designer",
    company: "Saigontechnology",
    description: "Outsourcing",
    period: "03/2018 - 05/2019",
    responsibilities: [
      "Work with another team like technician, PM, mobile team... to define a solution to solve client's problem with different business like: Loyalty app, health app, bitcoin,...and learning a new technical like AR...",
      "Design the user-friendly UI with mockups and prototype."
    ]
  },
  {
    title: "UI/UX designer",
    company: "EZSOLUTION",
    description: "Sales management software company",
    period: "05/2016 - 01/2018",
    responsibilities: []
  },
  {
    title: "Graphic designer",
    company: "ZINGMP3 & ZINGTV",
    description: "Vietnam's leading online music website & film",
    period: "10/2015 - 04/2016",
    responsibilities: []
  }
];

function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 120,
      easing: "ease-in-out",
      once: false,
      mirror: false
    });
  
    AOS.refresh(); // Cập nhật AOS khi có thay đổi
    console.log("AOS initialized");
  }, []);
  

  return (
    <div className="flex overflow-visible flex-col items-center px-20 pt-12 pb-28 bg-[#EEEDEA] max-md:px-5 max-md:pb-24">
      <div className="flex flex-col max-w-full w-[945px]">
        <Header data-aos="fade-down" />

        <div data-aos="fade-down" className="flex flex-col items-center mt-32 w-full max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
          <InfoSection
            title="Hello."
            content="I'm Linh, I've been working as a product designer for 8 years. My focus is on creating designs that are simple to use and easy to understand. I'm passionate about learning and improving user experiences for people."
            isFirst={true}
            
          />

          <Divider data-aos="fade-down" />

          <InfoSection
            title="How can I help"
            content="With my experience, I'm happy to help turn your idea into a design. I also work closely with other teams to find the best solutions to support your business growth."
            data-aos="fade-down"
          />

          <Divider data-aos="fade-down" />

          <div data-aos="fade-down">
            <ExperienceSection
              title="Experiences"
              experiences={experiences.map((exp, index) => (
                <ExperienceItem key={index} {...exp} isLast={index === experiences.length - 1} data-aos="fade-down" />
              ))}
            />
          </div>


          <Divider data-aos="fade-down" />

          <div data-aos="fade-down">
            <InfoSection
              title="Skills"
              content={
                <ul className="flex flex-wrap gap-x-3 gap-y-1 text-2xl leading-[38px]">
                  <li>• UI design</li>
                  <li>• Attention to detail</li>
                  <li>• Problem-solving</li>
                  <li>• Adaptability</li>
                  <li>• Critical thinking</li>
                  <li>• Teamwork</li>
                  <li>• Communication</li>
                </ul>
              }
            />
          </div>


          <Divider data-aos="fade-down" />

          <div data-aos="fade-down">
            <InfoSection
              title="Tools"
              content={
                <ul className="flex flex-wrap gap-x-3 gap-y-1 text-2xl leading-[38px]">
                  <li>• Figma</li>
                  <li>• Sketch App</li>
                  <li>• Photoshop</li>
                  <li>• Illustrator</li>
                  <li>• Prototype</li>
                </ul>
              }/>
          </div>
        </div>

        <Divider data-aos="fade-down" />
        
        <div data-aos="fade-down" className="flex flex-col items-center w-full">
          <Footer />
        </div>


      </div>
    </div>
  );
}

export default AboutPage;

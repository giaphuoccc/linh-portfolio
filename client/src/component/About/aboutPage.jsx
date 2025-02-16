import SectionHeader from './component/SectionHeader.jsx';
import ExperienceList from './component/ExperienceList.jsx';
import Divider from './component/Divider.jsx';
import SkillsAndTools from './component/SkillsAndTools.jsx';
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-12 pb-28 bg-gray-200 max-md:px-5 max-md:pb-24">
      <div className="flex flex-col max-w-full w-[943px]">
        <div className="flex flex-wrap gap-5 justify-between w-full text-2xl text-black max-md:max-w-full">
          <div className="flex gap-2 items-center whitespace-nowrap">
            <div className="self-stretch my-auto">Linh</div>
            <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-neutral-900 w-[27px]" />
            <div className="self-stretch my-auto">Quach</div>
          </div>
          <div 
            className="text-black cursor-pointer" 
            onClick={() => navigate("/home")}>
            Home
          </div>
        </div>
        <div className="flex flex-col items-center mt-32 w-full max-md:mt-10 max-md:max-w-full">
          <SectionHeader
            title="Hello."
            content="I'm Linh, I've been working as a product designer for 8 years. My focus is on creating designs that are simple to use and easy to understand. I'm passionate about learning and improving user experiences for people."
          />
          <Divider />
          <SectionHeader
            title="How can I help"
            content="With my experience, I'm happy to help turn your idea into a design. I also work closely with other teams to find the best solutions to support your business growth."
          />
          <Divider />
          <div className="mt-24 w-full max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="text-5xl font-medium leading-tight text-black max-md:mt-10 max-md:text-4xl">
                    Experiences
                </div>
                </div>
                <ExperienceList />
            </div>
          </div>
          <Divider />
          <SkillsAndTools
            title="Skills"
            content="UI design • Attention to detail • Problem-solving • Adaptability • Critical thinking • Teamwork • Communication"
          />
          <Divider />
          <SkillsAndTools
            title="Tools"
            content="Figma • Sketch App • Photoshop • Illustrator • Prototype"
          />
        </div>
        <Divider />
        <div className="flex flex-wrap gap-3 items-center self-center mt-24 text-4xl font-semibold leading-tight text-black uppercase max-md:mt-10 max-md:max-w-full">
          <div className="self-stretch my-auto max-md:max-w-full">
            Thank you for scrolling here
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/fa7be8521ed845ef036c8fe2e3f8bd0a421ecdce9202699e9193991f6efac330?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
            alt=""
          />
        </div>
        <div className="self-center mt-8 text-3xl leading-tight text-center text-black max-md:max-w-full">
          {"Let's work together or just have a chat."}
        </div>
        <div className="flex flex-wrap justify-between items-center mt-32 text-xl font-semibold tracking-wider leading-snug text-black whitespace-nowrap max-md:mt-10">
          <div className="flex-1 shrink self-stretch my-auto uppercase basis-0">
            Behance
          </div>
          <div className="self-stretch my-auto">qtuyetlinh@gmail.com</div>
          <div className="flex-1 shrink self-stretch my-auto text-right uppercase basis-0">
            linkedin
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
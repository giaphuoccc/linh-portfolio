import Header from './component/Header.jsx';
import Highlights from './component/Highlights';
import ProjectSection from './component/ProjectSection';
import BrandLogos from './component/BrandLogos';
import RecentProjects from './component/RecentProjects';
import ContactSection from './component/ContactSection';
import Footer from './component/Footer.jsx';

function homePage() {
  return (
    <div className="flex overflow-hidden flex-col py-12 bg-zinc-900 bg-cover bg-center min-h-screen">
      <div className="flex flex-col px-20 w-full max-w-full mx-0 max-md:px-5">
        <Header />
        <div className="self-start mt-32 text-6xl font-bold leading-tight max-md:mt-10 max-md:text-4xl text-orange-200">
          {"Linh's Portfolio"}
        </div>
        <div className="mt-8 text-4xl font-medium text-orange-200 leading-[50px] w-[832px] max-md:max-w-full">
          Design is a journey where empathy helps us create a connection between
          people and the object. This way, design becomes more than just a
          product, it becomes an experience.
        </div>
        <div className="flex shrink-0 mt-32 max-w-full h-0.5 w-full max-md:mt-10 max-md:mr-1 bg-gray-700" />
        <div className="mt-32 text-5xl font-medium leading-[62px] w-[738px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[58px] text-white">
          Proud to have contributed
          <br />
          {"to these brands' projects"}
        </div>
        <div className="self-start mt-16 text-4xl font-medium leading-tight max-md:mt-10 text-white">
          UI UX design
        </div>
        <BrandLogos type="uiux" />
        <div className="self-start mt-16 text-4xl font-medium leading-tight max-md:mt-10 text-white">
          Graphic design
        </div>
        <BrandLogos type="graphic" />
        <div className="flex shrink-0 mt-32 max-w-full h-0.5 w-full max-md:mt-10 max-md:mr-1 bg-gray-700" />
        <div className="self-start mt-32 text-5xl font-medium leading-tight max-md:mt-10 max-md:ml-1 max-md:text-4xl text-white">
          The highlights
        </div>
        <Highlights />
        <div className="flex shrink-0 mt-32 max-w-full h-0.5 w-full max-md:mt-10 max-md:mr-1 bg-gray-700" />
        <div className="mt-32 text-5xl font-medium leading-[62px] w-[337px] max-md:mt-10 max-md:text-4xl max-md:leading-[58px] text-white">
          Explore my latest works
        </div>
        <ProjectSection />
        <div className="self-start mt-32 text-5xl font-medium leading-tight max-md:mt-10 max-md:text-4xl text-white">
          And recently...
        </div>
        <RecentProjects />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default homePage;
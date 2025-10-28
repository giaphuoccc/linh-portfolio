export default function Background() {
  const experiences = [
    {
      role: "Product designer",
      company: "Finviet",
      description: "B2B2C fintech company",
      period: "08/2022 - Present"
    },
    {
      role: "UI/UX designer",
      company: "Pharmacy",
      description: "The retail pharmacy chain in Vietnam.",
      period: "08/2021 - 08/2022"
    },
    {
      role: "Product Designer",
      company: "Cyhome",
      description: "Residential property management platforms",
      period: "10/2015 - 04/2016"
    },
    {
      role: "UI/UX designer",
      company: "Saigontechnology",
      description: "Outsourcing",
      period: "03/2018 - 05/2019"
    },
    {
      role: "UI/UX designer",
      company: "Ezsolution",
      description: "Sales management software company",
      period: "05/2016 - 01/2018"
    },
    {
      role: "Graphic designer",
      company: "ZINGMP3 & ZINGTV",
      description: "Vietnam's leading online music website & flim",
      period: "10/2015 - 04/2016"
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 lg:py-32 px-4 md:px-8 lg:px-20 border-t border-[#F0B519] border-opacity-[0.564706]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section badge */}
        <div className="inline-flex items-center gap-2.5 px-8 py-2.5 bg-portfolio-brown rounded-[40px] mb-12 md:mb-20">
          <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18 1.125C19.9688 1.125 21.5859 2.74219 21.5859 4.71094C21.5859 6.53906 19.5469 8.29688 19.5469 12.4453V15.2578C22.2891 14.1328 25.7344 11.0391 27.4219 9.63281C28.0547 9 28.9688 8.57812 29.9531 8.57812C31.9219 8.57812 33.5391 10.1953 33.5391 12.1641C33.5391 13.9219 32.2734 15.3984 30.5156 15.6797C26.8594 16.3125 24.1875 16.1719 21.7266 17.9297C24.2578 19.6875 26.8594 19.5469 30.5156 20.1797C32.2031 20.4609 33.5391 21.9375 33.5391 23.6953C33.5391 25.6641 31.9219 27.2812 29.9531 27.2812C28.9688 27.2812 28.0547 26.8594 27.4219 26.2266C25.7344 24.75 22.2891 21.7266 19.5469 20.6016V23.4141C19.5469 27.5625 21.5859 29.3203 21.5859 31.1484C21.5859 33.1172 19.9688 34.7344 18 34.7344C16.0312 34.7344 14.4141 33.1172 14.4141 31.1484C14.4141 29.25 16.5234 27.7031 16.5234 23.4141V20.6016C13.7812 21.7266 10.3359 24.8203 8.64844 26.2266V26.1562C8.01562 26.8594 7.10156 27.2812 6.04688 27.2812C4.07812 27.2812 2.46094 25.6641 2.46094 23.6953C2.46094 21.7969 3.86719 20.3203 5.69531 20.1094C9.21094 19.4766 11.8828 19.6172 14.3438 17.8594C11.8828 16.1016 9.28125 16.2422 5.69531 15.6094C3.86719 15.4688 2.46094 13.9219 2.46094 12.0234C2.46094 10.0547 4.07812 8.4375 6.04688 8.4375C7.03125 8.4375 7.94531 8.85938 8.64844 9.5625V9.49219C10.3359 10.9688 13.7812 13.9922 16.5234 15.1172V12.3047C16.5234 8.01562 14.4141 6.46875 14.4141 4.57031C14.4141 2.60156 16.0312 0.984375 18 0.984375V1.125Z" fill="white"/>
          </svg>
          <h2 className="text-white font-bricolage text-2xl md:text-[40px] font-semibold">
            My background
          </h2>
        </div>

        {/* Experience timeline */}
        <div className="max-w-[970px] mx-auto space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div className="flex-1">
                <h3 className="text-portfolio-brown font-inter text-2xl md:text-[32px] font-semibold leading-[140%] mb-2">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-portfolio-brown font-inter text-lg md:text-2xl font-semibold leading-[140%]">
                    {exp.company}
                  </span>
                  <div className="w-2 h-2 bg-portfolio-brown rotate-45"></div>
                  <span className="text-portfolio-brown font-inter text-lg md:text-2xl font-normal leading-[140%]">
                    {exp.description}
                  </span>
                </div>
              </div>
              <div className="md:text-right">
                <span className="text-portfolio-brown font-inter text-lg md:text-2xl font-medium leading-[140%]">
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

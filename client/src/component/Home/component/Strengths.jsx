export default function Strengths() {
  const strengths = [
    {
      title: "Get things done, make it work.",
      description: "Make things happen, not just plan them"
    },
    {
      title: "Make complexity feel simple.",
      description: "Good design doesn't hide complexity — it makes it feel effortless"
    },
    {
      title: "A conversation, not a solo performance.",
      description: "Good ideas grow better in good teams"
    },
    {
      title: "A photo? Why not?",
      description: "https://unsplash.com/@linhquach"
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 lg:py-32 px-4 md:px-8 lg:px-20 border-t border-[#F0B519] border-opacity-[0.564706]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section badge */}
        <div className="inline-flex items-center gap-2.5 px-8 py-2.5 bg-portfolio-brown rounded-[40px] mb-6">
          <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18 1.125C19.9688 1.125 21.5859 2.74219 21.5859 4.71094C21.5859 6.53906 19.5469 8.29688 19.5469 12.4453V15.2578C22.2891 14.1328 25.7344 11.0391 27.4219 9.63281C28.0547 9 28.9688 8.57812 29.9531 8.57812C31.9219 8.57812 33.5391 10.1953 33.5391 12.1641C33.5391 13.9219 32.2734 15.3984 30.5156 15.6797C26.8594 16.3125 24.1875 16.1719 21.7266 17.9297C24.2578 19.6875 26.8594 19.5469 30.5156 20.1797C32.2031 20.4609 33.5391 21.9375 33.5391 23.6953C33.5391 25.6641 31.9219 27.2812 29.9531 27.2812C28.9688 27.2812 28.0547 26.8594 27.4219 26.2266C25.7344 24.75 22.2891 21.7266 19.5469 20.6016V23.4141C19.5469 27.5625 21.5859 29.3203 21.5859 31.1484C21.5859 33.1172 19.9688 34.7344 18 34.7344C16.0312 34.7344 14.4141 33.1172 14.4141 31.1484C14.4141 29.25 16.5234 27.7031 16.5234 23.4141V20.6016C13.7812 21.7266 10.3359 24.8203 8.64844 26.2266V26.1562C8.01562 26.8594 7.10156 27.2812 6.04688 27.2812C4.07812 27.2812 2.46094 25.6641 2.46094 23.6953C2.46094 21.7969 3.86719 20.3203 5.69531 20.1094C9.21094 19.4766 11.8828 19.6172 14.3438 17.8594C11.8828 16.1016 9.28125 16.2422 5.69531 15.6094C3.86719 15.4688 2.46094 13.9219 2.46094 12.0234C2.46094 10.0547 4.07812 8.4375 6.04688 8.4375C7.03125 8.4375 7.94531 8.85938 8.64844 9.5625V9.49219C10.3359 10.9688 13.7812 13.9922 16.5234 15.1172V12.3047C16.5234 8.01562 14.4141 6.46875 14.4141 4.57031C14.4141 2.60156 16.0312 0.984375 18 0.984375V1.125Z" fill="white"/>
          </svg>
          <h2 className="text-white font-bricolage text-xl md:text-[40px] font-semibold">
            A few things you can expect from me
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-portfolio-brown font-bricolage text-xl md:text-[32px] font-light ml-0 md:ml-14 mb-12 md:mb-20">
          — maybe a coffee ☕ or many design opinions.
        </p>

        {/* Strength cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {strengths.map((strength, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-b from-[#FFF2D2] to-white p-6 h-[405px] flex flex-col justify-between rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-portfolio-brown font-bricolage text-2xl md:text-[32px] font-medium leading-normal">
                {strength.title}
              </h3>
              <p className="text-portfolio-brown font-bricolage text-lg md:text-2xl font-light leading-normal">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

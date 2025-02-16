const Footer = () => {
  return (
    <>
      <div className="flex shrink-0 mt-24 h-0.5 w-full max-w-[940px] mx-auto px-20 max-md:px-5 max-md:mt-10 
            bg-[linear-gradient(to_right,rgb(36,34,32),rgb(105,95,80),rgb(36,34,32))]"/>
      <div className="flex flex-wrap gap-3 items-center mt-24 text-4xl font-semibold leading-tight uppercase max-md:mt-10 max-md:max-w-full">
        <div className="self-stretch my-auto max-md:max-w-full gradient-gold">
          Thank you for scrolling here
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/a696ff6ff7196186d929a077d5dd4bf38b29b1748906ea8fdb1620124b0f6bb7?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
        />
      </div>
      <div className="mt-8 text-3xl leading-tight text-center max-md:max-w-full text-[#D9C4A9]">
        {"Let's work together or just have a chat."}
      </div>
      <div className="flex flex-wrap justify-between items-center mt-32 max-w-full text-xl font-semibold tracking-wider leading-snug whitespace-nowrap w-[940px] max-md:mt-10 text-[#D9C4A9]">
        <div className="flex-1 shrink self-stretch my-auto uppercase basis-0">
          Behance
        </div>
        <div className="self-stretch my-auto">qtuyetlinh@gmail.com</div>
        <div className="flex-1 shrink self-stretch my-auto text-right uppercase basis-0">
          linkedin
        </div>
      </div>
    </>
  );
};

export default Footer;
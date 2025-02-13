function ContactSection() {
  return (
    <>
      {/* Đường kẻ ngăn cách */}
      <div data-aos="fade-up" className="flex shrink-0 mt-32 max-w-full h-0.5 w-full max-md:mt-10 max-md:mr-1 
          bg-[linear-gradient(to_right,rgb(36,34,32),rgb(105,95,80),rgb(36,34,32))]"/>
      <div className="flex flex-wrap gap-3 items-center self-center mt-32 text-4xl font-semibold leading-tight uppercase max-md:mt-10 max-md:max-w-full gradient-gold">
        <div className="self-stretch my-auto max-md:max-w-full">
          Thank you for scrolling here
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/d5f37b527e5acd500edc868c93d9a45a7537834bd7bea7cd0610a52efd80bc37?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&"
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          alt=""
        />
      </div>
      <div className="self-center mt-8 text-4xl leading-10 text-center text-orange-200 w-[629px] max-md:max-w-full">
        {"Let's work together or just have a friendly chat."}
      </div>
    </>
  );
}

export default ContactSection;
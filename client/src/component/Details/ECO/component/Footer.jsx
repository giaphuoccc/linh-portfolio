function Footer() {
    return (
      <>
        {/* Thank You Message */}
        <div className="flex flex-wrap gap-3 items-center justify-center text-4xl font-semibold leading-tight text-black uppercase max-md:mt-10 max-md:max-w-full">
          <div className="text-center">
            Thank you for scrolling here
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/fa7be8521ed845ef036c8fe2e3f8bd0a421ecdce9202699e9193991f6efac330?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&"
            alt="Thank you emoji"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
        </div>
  
        {/* Subheading */}
        <div className="self-center mt-8 text-3xl leading-tight text-center text-black max-md:max-w-full">
          {"Let's work together or just have a chat."}
        </div>
  
        {/* Footer Links */}
        <div className="flex justify-between items-center mt-32 text-xl font-semibold tracking-wider leading-snug text-black w-full max-md:mt-10">
          <div className="text-left uppercase">
            <a href="https://t.me/linhquach20" target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
          <div className="text-center">qtuyetlinh@gmail.com</div>
          <div className="text-center uppercase">
            <a href="https://www.linkedin.com/in/linh-quach-37624012b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </>
    );
  }
  
  export default Footer;
  
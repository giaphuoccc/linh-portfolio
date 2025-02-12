function Footer() {
  return (
    <div className="flex flex-wrap items-center self-center mt-16 w-full max-w-screen-xl text-xl font-semibold tracking-wider leading-snug text-orange-200 whitespace-nowrap max-md:mt-10 max-md:max-w-full">
      <div className="flex-1 shrink self-stretch my-auto uppercase basis-0">
        <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Behance</a>
      </div>
      <div className="self-stretch my-auto">
        <a href="mailto:qtuyetlinh@gmail.com" className="hover:text-white transition-colors">qtuyetlinh@gmail.com</a>
      </div>
      <div className="flex-1 shrink self-stretch my-auto text-right uppercase basis-0">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">linkedin</a>
      </div>
    </div>
  );
}

export default Footer;
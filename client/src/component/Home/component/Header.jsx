function Header() {
  return (
    <div className="flex flex-wrap gap-5 justify-between w-full text-2xl text-orange-200 max-md:max-w-full">
      <div className="flex gap-2 items-center whitespace-nowrap">
        <div className="self-stretch my-auto">Linh</div>
        <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-orange-200 w-[27px]" />
        <div className="self-stretch my-auto">Quach</div>
      </div>
      <button className="focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50 hover:text-white transition-colors" aria-label="About me">
        About me
      </button>
    </div>
  );
}

export default Header;
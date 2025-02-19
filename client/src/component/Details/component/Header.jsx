function Header() {
    return (
      <div className="flex flex-col self-center max-w-full text-xl text-black w-[940px]">
        <div className="flex gap-2 items-center self-start text-2xl whitespace-nowrap">
          <div className="flex gap-2 items-center self-stretch my-auto text-[#A9A9A9]">
            <div className="self-stretch my-auto">Linh</div>
            <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-neutral-400 w-[27px]" />
            <div className="self-stretch my-auto">Quach</div>
          </div>
          <div className="self-stretch my-auto">/</div>
          <div className="self-stretch my-auto">Pharmacity</div>
        </div>
      </div>
    );
  }
  
export default Header;
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-10 w-full text-2xl text-black max-md:max-w-full">
      <div className="flex flex-1 gap-2 items-center whitespace-nowrap">
        <div className="self-stretch my-auto">Linh</div>
        <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-neutral-900 w-[27px]" />
        <div className="self-stretch my-auto">Quach</div>
      </div>
      {/* Clickable About Me */}
      <div 
        className="cursor-pointer" 
        onClick={() => navigate("/home")}
      >
        Back to home
      </div>
    </div>
  );
}

export default Header;

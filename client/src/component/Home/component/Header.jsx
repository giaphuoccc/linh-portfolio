import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-5 justify-between max-w-full text-2xl text-black w-[943px]">
      <div className="flex gap-2 items-center whitespace-nowrap ">
        <div className="self-stretch my-auto text-[#D9C4A9]">Linh</div>
        <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-[#D9C4A9] w-[20px]" />
        <div className="self-stretch my-auto text-[#D9C4A9]">Quach</div>
      </div>
      
      <div 
        className="text-[#D9C4A9] cursor-pointer" 
        onClick={() => navigate("/about")}>
        About me
      </div>
    </div>
  );
};

export default Header;

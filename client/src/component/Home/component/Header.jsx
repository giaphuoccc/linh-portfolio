import { Link } from "react-router-dom"; // Import Link from React Router

const Header = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-between max-w-full text-2xl text-black w-[943px]">
      <div className="flex gap-2 items-center whitespace-nowrap ">
        {/* Make "Linh" and "Quach" clickable with Link */}
        <Link to="/" className="self-stretch my-auto text-[#D9C4A9]">Linh Quach</Link>
      </div>
      
      {/* Use Link to navigate to About me */}
      <Link to="/about" className="text-[#D9C4A9]">
        About me
      </Link>
    </div>
  );
};

export default Header;

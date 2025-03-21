import { Link } from 'react-router-dom'; // Import Link from React Router

const Header = () => {
  return (
    <div className="flex flex-wrap gap-10 w-full text-2xl text-black max-md:max-w-full">
      <div className="flex flex-1 gap-2 items-center whitespace-nowrap">
        {/* Make "Linh" and "Quach" clickable with Link */}
        <Link to="/" className="self-stretch my-auto">Linh Quach</Link>
      </div>
      {/* Clickable About Me */}
      <div className="cursor-pointer">
        <Link to="/home">Back to home</Link>
      </div>
    </div>
  );
}

export default Header;

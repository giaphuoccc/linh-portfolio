import { Link } from 'react-router-dom'; // Import Link from React Router

function Header() {
    return (
      <div className="flex flex-col self-center max-w-full text-xl text-black w-[940px]">
        <div className="flex gap-2 items-center self-start text-2xl whitespace-nowrap">
          <div className="flex gap-2 items-center self-stretch my-auto text-[#A9A9A9]">
            {/* Make "Linh" and "Quach" clickable with Link */}
            <Link to="/" className="self-stretch my-auto">Linh Quach</Link>
          </div>
          <div className="self-stretch my-auto">/</div>
          <div className="self-stretch my-auto">Pharmacity</div>
        </div>
      </div>
    );
}

export default Header;

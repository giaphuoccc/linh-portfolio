import { Link } from 'react-router-dom';

const ProjectHeader = () => {
  return (
    <header className="flex gap-2 items-center py-16 max-md:p-8 max-sm:flex-col max-sm:items-start">
      <div className="flex gap-2 items-center max-sm:mb-2.5">
        <Link to="/" className="text-2xl text-neutral-400">
          <h1>Linh Quach</h1>
        </Link>
      </div>
      <span className="text-2xl text-neutral-900" aria-hidden="true">
        /
      </span>
      <h2 className="text-2xl text-neutral-900">CYHOME</h2>
    </header>
  );
};

export default ProjectHeader;

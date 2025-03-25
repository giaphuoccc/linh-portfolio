import PropTypes from 'prop-types';

function ExperienceSection({ title, experiences }) {
  return (
    <div className="w-full">
      <div className="flex gap-10 max-md:flex-col items-start">
        {/* Title - Đồng bộ width với InfoSection */}
        <div className="w-[35%] max-md:w-full text-left">
          <h2 className="text-5xl font-medium leading-tight text-black max-md:text-4xl">
            {title}
          </h2>
        </div>
        {/* Content - Đồng bộ width với InfoSection */}
        <div className="w-[65%] max-md:w-full">
          <div className="flex flex-col text-green max-md:mt-10 max-md:max-w-full">
            {experiences}
          </div>
        </div>
      </div>
    </div>
  );
}

ExperienceSection.propTypes = {
  title: PropTypes.string.isRequired,
  experiences: PropTypes.node.isRequired,
};

export default ExperienceSection;

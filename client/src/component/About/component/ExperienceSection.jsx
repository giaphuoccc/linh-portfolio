import PropTypes from 'prop-types';

function ExperienceSection({ title, experiences }) {
  return (
    <>
      <div className="w-full">
        <div className="flex gap-10 max-md:flex-col items-start">
          {/* Title giữ nguyên */}
          <div className="flex w-[20%] max-md:w-full text-left">
            <h2 className="text-5xl font-medium leading-tight text-black max-md:text-4xl">
              {title}
            </h2>
          </div>
          {/* Content - Lùi sang phải 20% */}
          <div className="flex w-[80%] max-md:w-full ml-[15%]">
            <div className="flex flex-col text-green max-md:mt-10 max-md:max-w-full">
              {experiences}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

ExperienceSection.propTypes = {
  title: PropTypes.string.isRequired,
  experiences: PropTypes.node.isRequired,
};

export default ExperienceSection;
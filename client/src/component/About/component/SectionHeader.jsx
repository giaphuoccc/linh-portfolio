import PropTypes from 'prop-types';

function SectionHeader({ title, content }) {
  return (
    <div className="w-full rounded-none">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
          <div className="text-5xl font-bold leading-tight text-black max-md:mt-10 max-md:text-4xl">
            {title}
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[60%] max-md:ml-0 max-md:w-full">
          <div className="text-3xl leading-10 text-black max-md:mt-10 max-md:max-w-full">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Add PropTypes validation
SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default SectionHeader;

import PropTypes from 'prop-types';

function SkillsAndTools({ title, content }) {
    return (
      <div className="flex flex-wrap gap-5 justify-between mt-24 w-full text-black rounded-none max-md:mt-10">
        <div className="self-start text-5xl font-medium leading-tight max-md:text-4xl">
          {title}
        </div>
        <div className="text-3xl leading-10 max-md:max-w-full">
          {content}
        </div>
      </div>
    );
  }

  // ✅ Add PropTypes validation
  SkillsAndTools.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };

  export default SkillsAndTools;
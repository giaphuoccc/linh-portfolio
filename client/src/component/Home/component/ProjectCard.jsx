import PropTypes from "prop-types";

const ProjectCard = ({ imageSrc, title, category, iconSrc }) => {
  return (
    <div className="flex flex-col mt-16 w-full text-xl font-semibold tracking-wider leading-snug text-black uppercase max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${title} project thumbnail`}
        className="object-contain w-full rounded-2xl aspect-[2.13]"
      />
      <div className="flex gap-3 items-center self-start mt-6">
        <div className="self-stretch my-auto text-[#D9C4A9]">{title}</div>
        <img
          loading="lazy"
          src={iconSrc}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
        />
        <div className="self-stretch my-auto text-[#D9C4A9]">{category}</div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
};

export default ProjectCard;

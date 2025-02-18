import PropTypes from 'prop-types';

function InfoSection({ title, content, isFirst }) {
  return (
    <>
      <div className="w-full">
        <div className="flex gap-10 max-md:flex-col items-start">
          {/* Title - Chỉ in đậm nếu là Info đầu tiên */}
          <div className="flex w-[25%] max-md:w-full text-left">
            <h2
              className={`text-5xl leading-tight text-black max-md:text-4xl ${
                isFirst ? "font-bold" : "font-normal"
              }`}
            >
              {title}
            </h2>
          </div>
          {/* Content - Dịch sang phải 20% để căn với experiences */}
          <div className="flex w-[80%] max-md:w-full ml-[15%]">
            <div className="text-2xl leading-[38px] text-black max-md:mt-10 max-md:max-w-full">
              {content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

InfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  isFirst: PropTypes.bool,
};

export default InfoSection;

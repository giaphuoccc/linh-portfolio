import PropTypes from 'prop-types';

function ExperienceItem({ title, company, description, period, responsibilities, isLast }) {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex w-full justify-between items-center">
          <div className="text-3xl font-semibold leading-tight">{title}</div>
          <div className="text-xl leading-snug text-right">{period}</div>
        </div>
        <div className="mt-1 text-xl leading-snug italic">
          <span className="font-bold">{company}</span> - {description}
        </div>
        {responsibilities.length > 0 && (
          <ul className="mt-3 text-xl leading-[32px] list-disc pl-5">
            {responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        )}
      </div>
      
      {/* Thêm Divider nếu không phải item cuối cùng */}
      {!isLast && <div className="my-20 w-full bg-[#E0DEDA] min-h-[2px]" />}
    </>
  );
}

ExperienceItem.propTypes = {
  title: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLast: PropTypes.bool, // 🔥 Thêm prop để kiểm tra item cuối cùng
};

export default ExperienceItem;

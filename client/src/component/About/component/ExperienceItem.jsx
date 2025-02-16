import React from 'react';
import PropTypes from 'prop-types';

const ExperienceItem = ({ title, date, company, description, companyDescription }) => {
    return (
      <div className="flex flex-col mt-10 max-w-full w-[620px]">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
            <div className="self-stretch my-auto text-[32px] font-bold leading-tight">
              {title}
            </div>
            <div className="self-stretch my-auto text-xl leading-snug">
              {date}
            </div>
          </div>
          <div className="mt-2 text-xl leading-snug uppercase max-md:max-w-full">
            <span className="font-bold">{company}</span> - {companyDescription}
          </div>
        </div>
        {description && (
          <div className="mt-5 text-xl  leading-7 max-md:max-w-full">
            {description.split('\n').map((item, index) => (
              <React.Fragment key={index}>
                {item}
                <br />
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    );
  };

// ✅ Adding PropTypes for validation
ExperienceItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  companyDescription: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExperienceItem;
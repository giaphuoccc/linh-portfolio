import ExperienceItem from './ExperienceItem';

const experienceData = [
  {
    title: "Senior Product designer",
    date: "08/2022 - Present",
    company: "FINVIET",
    companyDescription: "B2B2C fintech company",
    description: "Responsible for enhancing M2B2C e-commerce platform's user experience.\nManage and maintain a library of design assets and resources.\nCommunicate and work closely with stakeholders (PO, BOD, Business Unit...) to gather requirements, provide updates, and get feedbacks and improve, create new features."
  },
  {
    title: "Product designer",
    date: "08/2021 - 08/2022",
    company: "PHARMACITY",
    companyDescription: "The retail pharmacy chain in Vietnam.",
    description: "Work together with the product team to create a wireframe, prototype new features, and improve existing ones on the website and mobile app.\nCollaborate with other teams, such as marketing, sales, and CRM, to receive requests and support to design features and landing pages.\nUsing a heat map, review and record user and departmental comments to help enhance the product.\nManage tasks, support team members, and estimate the time required to deliver designs on time."
  },
  {
    title: "Lead designer",
    date: "05/2019 - 10/2023",
    company: "CYHOME",
    companyDescription: "Residential property management platforms",
    description: "Redesign a resident and PMS (Property Management System) app completely new with a user-friendly interface that makes it simpler for everyone to use.\nSupport graphic designer to make digital banner, standee, flyer ... and print marketing & sales materials.\nMentor 1 designer entering the field and lead 1 graphic designer."
  },
  {
    title: "UI/UX designer",
    date: "03/2018 - 05/2019",
    company: "Saigontechnology",
    companyDescription: "Outsourcing",
    description: "Work with another team like technician, PM, mobile team... to define a solution to solve client's problem with different business like: Loyalty app, health app, bitcoin,...and learning a new technical like AR...\nDesign the user-friendly UI with mockups and prototype."
  },
  {
    title: "UI/UX designer",
    date: "05/2016 - 01/2018",
    company: "EZSOLUTION",
    companyDescription: "Sales management software company",
    description: ""
  },
  {
    title: "Graphic designer",
    date: "10/2015 - 04/2016",
    company: "ZINGMP3 & ZINGTV",
    companyDescription: "Vietnam's leading online music website & flim",
    description: ""
  }
];

const ExperienceList = () => {
  return (
    <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
        {experienceData.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
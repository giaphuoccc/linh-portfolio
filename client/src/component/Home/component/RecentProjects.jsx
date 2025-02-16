import ProjectCard from './ProjectCard';

const RecentProjects = () => {
  const projects = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/22a8c92052439c2492d139e0095d70f82d4b2870b4ae66792fd60dd80acb1a06?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", title: "Pharmacity", category: "Landing page", iconSrc: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/76b9f2e8c13ebbc5e850d5e96029329e983b795faffa841d8f5405bd9282f605?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/22a8c92052439c2492d139e0095d70f82d4b2870b4ae66792fd60dd80acb1a06?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", title: "Pharmacity", category: "Landing page", iconSrc: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/c737c4bceeb4f805bf10ba7de222378cda5da976af5ceb8e35769835824a4ddd?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/22a8c92052439c2492d139e0095d70f82d4b2870b4ae66792fd60dd80acb1a06?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", title: "Pharmacity", category: "Landing page", iconSrc: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/2de4a1fdcef4780395b840ab5b7177179772717d9d0bbd57bdcfe20dbbda1df5?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/22a8c92052439c2492d139e0095d70f82d4b2870b4ae66792fd60dd80acb1a06?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", title: "Pharmacity", category: "Landing page", iconSrc: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/3f6a7e981ebfb7cac4015f619e027f75fd1c9b002aa0706ef7e0d4dfd4df2d9c?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&" }
  ];

  return (
    <div className="w-full max-w-[940px] mx-auto">
      <h2 className="mt-30 text-5xl font-medium leading-tight gradient-gold">
        And recently...
      </h2>

      <div className="grid grid-cols-2 gap-6 mt-16 max-md:grid-cols-1 max-md:mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

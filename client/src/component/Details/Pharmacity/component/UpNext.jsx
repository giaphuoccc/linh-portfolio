function UpNext() {
  const projects = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/22a8c92052439c2492d139e0095d70f82d4b2870b4ae66792fd60dd80acb1a06?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&",
      title: "Pharmacity",
      subtitle: "Landing page",
      icon: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/b9388318d82323f2ebad2ec7fa2b9e94dd99362d1fd66b92dfa94dd45d6e9b98?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/22a8c92052439c2492d139e0095d70f82d4b2870b4ae66792fd60dd80acb1a06?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&",
      title: "Pharmacity",
      subtitle: "Landing page",
      icon: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/4b266579f392f3f13ed6d8b5c425e01c9def082fa1b4aa12e064817da98d6df4?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&"
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[762px]">
        {/* Up Next Title */}
        <div className="mt-24 text-5xl font-medium leading-tight text-black text-left max-md:mt-10 max-md:text-4xl">
          Up next...
        </div>

        {/* Project List */}
        <div className="mt-16 max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col w-1/2 max-md:w-full">
                <div className="flex flex-col w-full text-xl font-semibold tracking-wider leading-snug text-black uppercase max-md:mt-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src={project.image}
                    alt={`${project.title} ${project.subtitle}`}
                    className="object-contain max-w-full rounded-2xl aspect-[2.13] w-[457px]"
                  />
                  <div className="flex gap-3 items-center self-start mt-6">
                    <div className="self-stretch my-auto">{project.title}</div>
                    <img
                      loading="lazy"
                      src={project.icon}
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                    />
                    <div className="self-stretch my-auto">{project.subtitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpNext;

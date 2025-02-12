function RecentProjects() {
  const projects = [
    { image: 'https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/32a29e798e231316888adcf2abc393bfde9d7ba3c726b16956cc2820153739ae?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&', title: 'Pharmacity', type: 'Landing page' },
    { image: 'https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/3a5edca4e77b62842f3b9486826542622a7ed1ef50aac2b88502555bab11dec8?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&', title: 'Pharmacity', type: 'Landing page' },
    { image: 'https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/60906db2b739d80dfca5d811fd7993c86d65f827b6fc7421019bef8186246913?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&', title: 'Pharmacity', type: 'Landing page' },
    { image: 'https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/32a29e798e231316888adcf2abc393bfde9d7ba3c726b16956cc2820153739ae?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&', title: 'Pharmacity', type: 'Landing page' },
  ];

  return (
    <div className="grid grid-cols-2 gap-8 mt-16">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col w-full text-xl font-semibold tracking-wider leading-snug text-orange-200 uppercase">
          <img
            loading="lazy"
            src={project.image}
            className="object-cover w-full rounded-2xl aspect-square"
            alt={`${project.title} ${project.type}`}
          />
          <div className="flex gap-3 items-center self-start mt-6">
            <div className="self-stretch my-auto">{project.title}</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/5db40a49a8a0f3f3c770f2df8a37c8dc18adb9b12c7201fea769c7b612079535?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&"
              className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
              alt=""
            />
            <div className="self-stretch my-auto">{project.type}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentProjects;
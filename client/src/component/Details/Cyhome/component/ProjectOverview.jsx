const ProjectOverview = () => {
  return (
    <section>
      <h1 className="mb-10 text-5xl font-medium text-center leading-[62.4px] text-neutral-900 max-sm:text-4xl">
        CYHOME
        <br />
        APARTMENT MANAGEMENT ECOSYSTEM
      </h1>
      <div>
        <h2 className="mb-3 text-xl font-semibold leading-7 text-center uppercase text-neutral-400">
          1. Over view
        </h2>
        <div className="mx-auto mt-0 mb-10 text-xl leading-7 text-center max-w-[550px] text-neutral-900">
          <p>
            CyHome is an ecosystem including applications and webapps to manage and
            serve the management and residents living in the apartment.
          </p>
          <p>The system includes:</p>
          <ul className="list-none">
            <li>- Management webapp</li>
            <li>- Mobile App for technical problem solving in the building</li>
            <li>- Mobile App for shophouse to receive orders</li>
            <li>- Mobile App for residents</li>
          </ul>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ced2c746663109d639c2a9f0fc2cffd51fb83fee"
          className="mb-10 w-full rounded-2xl"
          alt="System Overview"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/57e627eeb16a01c70c89b0887f70f17dfab9bd65"
          className="mb-10 w-full rounded-2xl"
          alt="System Diagram"
        />
      </div>
    </section>
  );
};

export default ProjectOverview;

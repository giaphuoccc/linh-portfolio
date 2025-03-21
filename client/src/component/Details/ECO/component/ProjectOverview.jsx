const ProjectOverview = () => {
    return (
      <div className="flex flex-col gap-2 items-center mb-10">
        {/* Project Overview Title */}
        <h1 className="text-5xl font-medium leading-[62.4px] text-neutral-900 max-md:text-4xl max-sm:text-3xl">
          ECO-Merchant
        </h1>
        <p className="text-5xl font-medium leading-[62.4px] text-neutral-900 max-md:text-4xl max-sm:text-3xl">
          E-commerce platform for M2B2C
        </p>
  
        {/* Section Heading for Overview */}
        <section className="flex flex-col gap-10 items-center mt-10">
          <h2 className="text-xl font-semibold uppercase text-neutral-400">
            1. Overview
          </h2>
          <p className="text-xl text-center max-w-[502px] text-neutral-900">
            ECO Merchant application helps local shops and grocery stores easily
            connect with brands and manufacturers. With competitive prices, easy
            ordering, and convenient payments, businesses can run more smoothly,
            making it easier to stock up and thus increase profits!
          </p>
  
          {/* Images */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87074628649c115474a7a04b96ffad21bfa1e5b2"
            alt="ECO Merchant application overview"
            className="w-full rounded-[16px] mt-[40px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a841cc4627c4ad52be0613cf5c7fd1388cb0113"
            alt="ECO Merchant application features"
            className="w-full rounded-[16px] mt-[60px]"
          />
        </section>
      </div>
    );
  };
  
  export default ProjectOverview;
  
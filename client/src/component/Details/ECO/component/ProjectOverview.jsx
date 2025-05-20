const ProjectOverview = () => {
  return (
    <div className="flex flex-col gap-2 items-center mb-10">
      {/* Project Overview Title */}
      <h1
        className="
          text-[48px]             /* font-size: 20px */
          leading-[1.5]           /* giữ tỷ lệ dòng phù hợp */
          [font-family:'Inter_Display',sans-serif] /* Inter Display */
          max-md:text-[20px]
          max-sm:text-[20px]
          text-neutral-900
          font-medium
        "
      >
        ECO-Merchant
      </h1>
      <p
        className="
          text-[48px]
          leading-[1.5]
          [font-family:'Inter_Display',sans-serif]
          max-md:text-[20px]
          max-sm:text-[20px]
          text-neutral-900
          font-medium
        "
      >
        E-commerce platform for M2B2C
      </p>

      {/* Section Heading for Overview */}
      <section className="flex flex-col gap-10 items-center mt-10">
        <h2
          className="
            text-[20px]
            font-semibold
            uppercase
            [font-family:'Inter_Display',sans-serif]
            text-neutral-400
          "
        >
          1. Overview
        </h2>
        <p
          className="
            text-[20px]
            text-center
            max-w-[502px]
            [font-family:'Inter_Display',sans-serif]
            text-neutral-900
          "
        >
          ECO Merchant application helps local shops and grocery stores easily
          connect with brands and manufacturers. With competitive prices, easy
          ordering, and convenient payments, businesses can run more smoothly,
          making it easier to stock up and thus increase profits!
        </p>

        {/* Images */}

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

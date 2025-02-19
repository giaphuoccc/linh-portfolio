function DesignEnhancement() {
  return (
    <>
      {/* Title */}
      <div className="text-xl font-semibold leading-snug text-center text-[#A9A9A9] uppercase max-md:mt-10">
        4. Design enhancement
      </div>
      <div className="mt-2 text-5xl font-medium leading-tight text-center text-black max-md:max-w-full max-md:text-4xl">
        Challenge: Release new feature
      </div>

      {/* Content Grid */}
      <div className="flex flex-col mt-16 max-w-full text-black w-[940px] max-md:mt-10">
        {/* Tracking */}
        <div className="grid grid-cols-[200px_1fr] gap-5">
          <h2 className="text-3xl font-semibold leading-tight">Tracking</h2>
          <p className="text-xl leading-7">
            After 4 days release, we received 86 orders, but only one of them was successful.
            So, we started to find what happened?
          </p>
        </div>

        {/* So, what happened? */}
        <div className="grid grid-cols-[200px_1fr] gap-5 mt-16">
          <h2 className="text-3xl font-semibold leading-tight">So, what happened?</h2>
          <div className="text-xl leading-7">
            {`User don't know `}<b>{`"What is a valid prescription?"`}</b>
            <br />
            User confusion between prescription and drug packaging.
            <br />
            The instructions are not clear.
          </div>
        </div>

        {/* What we do? */}
        <div className="grid grid-cols-[200px_1fr] gap-5 mt-16">
          <h2 className="text-3xl font-semibold leading-tight">What we do?</h2>
          <p className="text-xl leading-7">
            We decided to make a new guide with pictures to make it easier to understand and more interesting.
            Users MUST read the guide before using it.
          </p>
        </div>
      </div>

      {/* Image */}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/7dc62bda50b913f8e8c5e6197cea47f442151c2c7f00f2850b7a6d46206a48ae?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&"
        alt="New guide with pictures"
        className="object-contain self-stretch mt-24 w-full rounded-3xl aspect-[1.86] max-md:mt-10 max-md:max-w-full"
      />
    </>
  );
}

export default DesignEnhancement;

const DesignSection = () => {
  return (
    <section>
      <h2 className="mb-3 text-xl font-semibold leading-snug text-center text-[#A9A9A9] uppercase max-md:mt-10">
        3. Design
      </h2>
      <h3 className="mx-0 my-10 text-5xl font-medium text-center leading-tight text-black max-sm:text-4xl">
        Resident app design screens
      </h3>
      <div className="space-y-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ad88e6e2a57f25d273bab92ab0cd466d2d5b672"
          className="w-full rounded-3xl aspect-[1.86]"
          alt="Resident App Screens 1"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/35cff5e2d5d1a0e36242ddcb4ce5569cf95f8a64"
          className="w-full rounded-3xl aspect-[1.86]"
          alt="Resident App Screens 2"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/09301587a03ac81387d22af5beb5e17af52bc563"
          className="w-full rounded-3xl aspect-[1.86]"
          alt="Resident App Screens 3"
        />
      </div>
    </section>
  );
};

export default DesignSection;

function ProcessSection() {
    return (
      <>
        <div className="text-xl font-semibold leading-snug text-center text-[#A9A9A9] uppercase max-md:mt-10">
          3. Process
        </div>
        <div className="mt-2 ml-3 text-5xl font-medium leading-tight text-center text-black max-md:max-w-full max-md:text-4xl">
          User flow and design
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/5de268db088892ed816be52ee10b3ac50fc93b933903b1fa2c40667cb69441da?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&"
          alt="User flow diagram"
          className="object-contain self-stretch mt-16 w-full rounded-3xl aspect-[1.86] max-md:mt-10 max-md:max-w-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/3ebc447a441815d42b723176fb810e6b8a2c1e1c2d450e37a2c5b92183af1c40?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&"
          alt="Design mockup"
          className="object-contain self-stretch mt-16 w-full rounded-3xl aspect-[1.86] max-md:mt-10 max-md:max-w-full"
        />
      </>
    );
  }
  
  export default ProcessSection;
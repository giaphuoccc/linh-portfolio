const BrandContributions = () => {
  const uiUxBrands = [
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/8e6961b7e7c5378c1e12b6562dad334865c054872d141232662fcc337e7eacc0?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo", className: "object-contain shrink-0 self-stretch my-auto rounded-md aspect-[1.02] w-[52px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/9d5810c94ac7aa952c2504319710430ec83e74ff2043c8d1eaac9add473f5679?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo", className: "object-contain shrink-0 self-stretch my-auto rounded-md aspect-[2.35] w-[120px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/4834f78957eda9afc2d4b1f919a48cef5547da5b5969b7b5128c338f67ec9f22?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo", className: "object-contain shrink-0 self-stretch my-auto rounded-md aspect-[1.02] w-[52px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/d5352e0680a59854df56190a5b220a7c12c20368240e5194f61696e6db10c38b?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo", className: "object-contain shrink-0 self-stretch my-auto rounded-none aspect-[2.41] w-[123px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/8027355b54f5f81805d6a4d6de449ede99a415eb34f8df9f0fc1a9dbd7cf38bc?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo", className: "object-contain shrink-0 self-stretch my-auto rounded-md aspect-[1.31] w-[67px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/4ea67c6d5521ebc5aad641de3262596a68e6c35309462f2c2b5bbb65a5b17361?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo", className: "object-contain shrink-0 self-stretch my-auto rounded-none aspect-[1.31] w-[67px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/a837435d10badd2934b8acb927099324bbafffd7a721d2668060b09e924c565a?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo", className: "object-contain shrink-0 self-stretch my-auto rounded-md aspect-[2.02] w-[105px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/f3ebaa1a67cd7d89242fe2f0fa1ebc5845ad4b27f8734bafcee11a87b3996e3f?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo", className: "object-contain shrink-0 self-stretch my-auto rounded-md aspect-[0.98] w-[53px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/7525376c9607589a7ac193dfd20e3c0208667a0964a4545aad99755b62a7f6e5?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo", className: "object-contain shrink-0 self-stretch my-auto rounded-md aspect-[1.29] w-[67px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/f4575435654647d56426bb2768a16fc73b614cc7d32a5f4b6aead89a78e310d4?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo", className: "object-contain shrink-0 self-stretch my-auto rounded-none aspect-[1.44] w-[75px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/7e94dea6c62b854f828e713304d044a5305e1c9972c5d45f0108d194907c8120?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo", className: "object-contain shrink-0 self-stretch my-auto rounded-none aspect-[2.35] w-[122px]" },
  ];

  const graphicDesignBrands = [
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/4183b1c993a27e92d404c5d260d468fe5924c1cd9b3a4c7672cdbab140f398c9?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", className: "aspect-[3.57] w-[182px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/516c16be236fa77de7a8a0e03005c84161a3a4e60c16919478ebe91959dac076?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", className: "aspect-square w-[51px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/8b9c8bc129ac08d0d656873ffa5b24d257d1f934a7d70790cf162266d4dbede0?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", className: "aspect-[1.02] w-[52px]" },
  ];

  return (
    <div className="flex flex-col items-start mt-24 max-w-full w-[848px] max-md:mt-10">
      <h2 className="text-5xl font-medium leading-[62px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px] gradient-gold">
        Proud to have contributed
        <br />
        {"to these brands' projects"}
      </h2>
      <h3 className="mt-16 text-4xl font-medium leading-tight max-md:mt-10 text-[#D9C4A9]">
        UI UX design
      </h3>
      <div className="flex flex-wrap gap-6 items-center mt-10 min-h-[52px] max-md:mt-10">
        {uiUxBrands.map((brand, index) => (
          <img key={index} loading="lazy" src={brand.src} alt={brand.alt} className={brand.className} />
        ))}
        <div className="flex flex-col self-stretch my-auto rounded-none w-[183px]">
          <div className="flex flex-col bg-white rounded-md">
            <div className="flex flex-col justify-center px-px py-3 rounded-md bg-blend-color bg-stone-800 bg-white">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/7c2ed7f80d524164ad68b115d698a5d6e692cb911f5162831da322759c5a4749?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&"
                alt="Brand logo"
                className="object-contain aspect-[5.99] w-[180px]"
              />
            </div>
          </div>
        </div>
      </div>
      <h3 className="mt-16 text-4xl font-medium leading-tight max-md:mt-10 text-[#D9C4A9]">
        Graphic design
      </h3>
      <div className="flex flex-wrap gap-6 items-center mt-10 max-md:mt-10">
        {graphicDesignBrands.map((brand, index) => (
          <img key={index} loading="lazy" src={brand.src} alt={brand.alt} className={brand.className} />
        ))}
        <div className="flex flex-col self-stretch my-auto rounded-md w-[209px]">
          <div className="flex flex-col bg-white rounded-md">
            <div className="flex flex-col justify-center p-2.5 bg-white rounded-md bg-blend-color bg-stone-800">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/bd7b4ec531389a25f3d995cc535ce99993ec79fe66a1c1485692ae27598fae70?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&"
                alt="Brand logo"
                className="object-contain rounded-md aspect-[5.78] w-[191px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandContributions;
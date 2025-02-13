import PropTypes from 'prop-types';

function BrandLogos({ type }) {
  const uiuxLogos = [
  { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/d351dc7c090fadeeed8d65f65f6c66aa2d18e92db4bfe8c254ee9a4897e23fa8?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo 1", className: "aspect-square w-[69px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/5db40a49a8a0f3f3c770f2df8a37c8dc18adb9b12c7201fea769c7b612079535?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo 2", className: "w-40 aspect-[2.32]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/f8e2034b55ea5540ce69cacc48a263e30cd379a286ae5c614720fa0fd0971881?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo 3", className: "aspect-square w-[69px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/5565aaeb0d3fbd63f333bc5dbb03bd064365674c690735663446c97abe0ab9c3?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo 4", className: "aspect-[2.33] w-[133px]", containerClass: "bg-stone-800" },
  { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/b32da8cd5d5c0333bbec89adf862b816f1c8f9318aa2199d5516748ad42cb912?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo 5", className: "aspect-[1.3] w-[90px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/e014b522c909394e1730f83863c9fe48fa0e6c2f9f9f6670ae3c41cf8634d140?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo 6", className: "aspect-[1.29] w-[89px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/130a51365b897659b305ce094803622e914592a6393faa2183641cb5db18bb62?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo 7", className: "aspect-[2.03] w-[140px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/c18ba56e72284a138074d2c319f2682e9f0297320cde3045d70a143ec2ff649b?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo 8", className: "aspect-square w-[71px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/7cf3acd6f0e6225abc1532b48e5e28776cfb0df979bf4f3a684fff83ed916935?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo 9", className: "aspect-[1.29] w-[89px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/d31506f875793f021ea3cfb1f4028a70ef1260369d2b26838622ef5b0a7e5b55?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo 10", className: "aspect-[1.45] w-[100px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/cebc63df759b652529d00bc15283acec9c18ad0df4af2a6439f968e18f9accac?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo 11", className: "aspect-[2.91] w-[157px]", containerClass: "w-[162px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/7e40c704298430cfb636c41c949eb814df7ad200ef6703052e197f96d307118a?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Brand logo 12", className: "w-60 aspect-[5.99]", containerClass: "min-w-[240px] w-[244px]" },
];

  const graphicLogos = [
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/77bbe6aef0fdc7cd75defdeed954f50d94bf6d58a76b299087082b4375f65206?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Graphic design brand 1", className: "aspect-[3.51] min-w-[240px] w-[242px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/5095d4cce0d9bcecbef7f1b13378c96a851b0247dde0d5af9ba843986d8265f2?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Graphic design brand 2", className: "aspect-square w-[69px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/f677ebccf856a726cefb1eeaaca49ff5ef92f8d28a654a7b332da65315e4b466?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Graphic design brand 3", className: "aspect-square w-[69px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/49d48200e7d3d014b00103fcab8f94b428bbca7d947b3d1ee361aa0c54115fed?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&", alt: "Graphic design brand 4", className: "aspect-[5.65] w-[254px]", containerClass: "min-w-[240px] w-[278px]" },
  ];

  const logos = type === 'uiux' ? uiuxLogos : graphicLogos;

  return (
    <div className="flex flex-wrap gap-10 items-center mt-10 max-md:mr-0.5 max-md:max-w-full">
      {logos.map((logo, index) => (
        logo.containerClass ? (
          <div key={index} className={logo.containerClass}>
            <div className="flex flex-col bg-white rounded-lg">
              <div className="flex flex-col justify-center px-4 py-1.5 bg-white rounded-lg bg-blend-color">
                <img
                  loading="lazy"
                  src={logo.src}
                  className={logo.className}
                  alt=""
                />
              </div>
            </div>
          </div>
        ) : (
          <img
            key={index}
            loading="lazy"
            src={logo.src}
            className={logo.className}
            alt=""
          />
        )
      ))}
    </div>
  );
}

  BrandLogos.propTypes = {
    type: PropTypes.oneOf(['uiux', 'graphic']).isRequired,
};
  
  export default BrandLogos;
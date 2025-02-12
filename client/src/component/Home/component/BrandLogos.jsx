import PropTypes from 'prop-types';

function BrandLogos({ type }) {
  const uiuxLogos = [
    { src: 'https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/d351dc7c090fadeeed8d65f65f6c66aa2d18e92db4bfe8c254ee9a4897e23fa8?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&', className: 'object-contain shrink-0 self-stretch my-auto rounded-lg aspect-square w-[69px]' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/5db40a49a8a0f3f3c770f2df8a37c8dc18adb9b12c7201fea769c7b612079535?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&', className: 'object-contain shrink-0 self-stretch my-auto w-40 rounded-lg aspect-[2.32]' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/f8e2034b55ea5540ce69cacc48a263e30cd379a286ae5c614720fa0fd0971881?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&', className: 'object-contain shrink-0 self-stretch my-auto rounded-lg aspect-square w-[69px]' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/5565aaeb0d3fbd63f333bc5dbb03bd064365674c690735663446c97abe0ab9c3?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&', className: 'object-contain aspect-[2.33] w-[133px]', containerClass: 'flex flex-col self-stretch my-auto rounded-none w-[164px]' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/b32da8cd5d5c0333bbec89adf862b816f1c8f9318aa2199d5516748ad42cb912?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&', className: 'object-contain shrink-0 self-stretch my-auto rounded-lg aspect-[1.3] w-[90px]' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/e014b522c909394e1730f83863c9fe48fa0e6c2f9f9f6670ae3c41cf8634d140?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&', className: 'object-contain shrink-0 self-stretch my-auto -ml-0.5 rounded-none aspect-[1.29] w-[89px]' },
  ];

  const graphicLogos = [
    { src: 'https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/32a29e798e231316888adcf2abc393bfde9d7ba3c726b16956cc2820153739ae?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&', className: 'object-contain self-stretch my-auto rounded-lg aspect-[3.51] min-w-[240px] w-[242px]' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/3a5edca4e77b62842f3b9486826542622a7ed1ef50aac2b88502555bab11dec8?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&', className: 'object-contain shrink-0 self-stretch my-auto rounded-lg aspect-square w-[69px]' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/60906db2b739d80dfca5d811fd7993c86d65f827b6fc7421019bef8186246913?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&', className: 'object-contain shrink-0 self-stretch my-auto rounded-lg aspect-square w-[69px]' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/f8e2034b55ea5540ce69cacc48a263e30cd379a286ae5c614720fa0fd0971881?apiKey=4f495b6d81d24533a0f9f7f4a35d3038&', className: 'object-contain shrink-0 self-stretch my-auto rounded-lg aspect-square w-[69px]' },
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
const RoleSection = () => (
  <section className="flex flex-col items-center px-4">
    {/* Divider */}
    <div className="flex my-20 w-full bg-[#F5F5F5] min-h-[2px] max-md:my-5" />
    
    {/* Tiêu đề */}
    <h2 className="text-xl font-semibold uppercase text-neutral-400">
      2. Role
    </h2>
    <h3 className="text-4xl font-medium text-neutral-900 mt-3 mb-10 text-center">
      Explore new challenges
    </h3>

    {/* Nội dung 2 cột, gói trong max-w + mx-auto để luôn nằm giữa */}
    <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-4xl mx-auto">
      {/* Văn bản */}
      <p className="text-lg leading-7 text-neutral-900 md:text-left text-center">
        After many years of designing products for end-users&nbsp;(B2C), I’m now
        starting a new chapter as a designer working on products for small
        businesses&nbsp;(B2B). I’ve just joined the company and was given a big
        challenge right away: redesigning the whole app!
        <br />
        <br />
        This role is exciting because it lets me use my current skills and also
        explore a new area that can make a big difference to the product.
      </p>

      {/* Ảnh minh hoạ */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/715423c5781660d6c31efdeed20a7587c0e7d35e?placeholderIfAbsent=true"  /* đổi path nếu cần */
        alt="Illustration: exploring new challenges"
        className="w-full max-w-[300px] mx-auto object-contain"
      />
    </div>

    {/* Divider */}
    <div className="flex my-20 w-full bg-[#F5F5F5] min-h-[2px] max-md:my-5" />
  </section>
);

export default RoleSection;

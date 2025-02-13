function Highlights() {
  const highlights = [
    { number: '20', text: 'Projects' },
    { number: '06', text: 'Industries' },
    { number: '01', text: 'Award winning' },
  ];

  return (
    <div className="mt-16 max-w-full w-[884px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-2 max-md:mt-8">
              <div className="grow text-8xl font-semibold leading-tight max-md:text-4xl gradient-gold">
                {highlight.number}
              </div>
              <div className="my-auto text-4xl font-medium leading-10 text-orange-200">
                <span className="font-bold">+</span>
                <br />
                {highlight.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
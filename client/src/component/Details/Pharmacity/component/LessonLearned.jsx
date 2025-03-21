function LessonsLearned() {
  return (
    <div className="flex flex-col self-stretch px-16 mt-24 w-[1060px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col justify-center items-center px-20 py-16 text-center text-black rounded-2xl bg-zinc-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-[655px] w-full">
          <div className="self-center text-5xl font-medium leading-tight text-white max-md:text-4xl">
            Lessons Learned
          </div>
          <div className="mt-7 text-xl leading-7 text-white max-md:max-w-full">
            The lesson learned while designing this feature is to focus on
            the simplest experiences when users first interact with the app,
            especially those who have never used the feature before and are very
            familiar with common real-life behaviors.
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonsLearned;

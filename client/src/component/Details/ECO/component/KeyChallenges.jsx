const KeyChallenges = () => {
  return (
    <section className="flex flex-col gap-10 items-center">
      <h2 className="text-xl font-semibold uppercase text-neutral-400">
        2. Key Challenges
      </h2>
      <h3 className="text-5xl font-medium leading-[62.4px] text-neutral-900 max-md:text-4xl max-sm:text-3xl">
        The issues
      </h3>
      <div className="flex flex-col gap-16 w-full">
        <div className="flex justify-between max-md:flex-col max-md:gap-6">
          <h4 className="text-3xl font-semibold leading-9 text-neutral-900">
            The issues we noticed
          </h4>
          <p className="text-xl leading-7 max-w-[619px] text-neutral-900">
            Coming up with a lot of issues in the previous version which have an
            {"out of date UI, a UX is not smooth and many many problem couldn't up"}
            to trend for a long time. Especially, thousands of people are using
            the app, and every change is a challenge as it disrupts their
            established habits.
          </p>
        </div>
        <div className="flex justify-between max-md:flex-col max-md:gap-6">
          <h4 className="text-3xl font-semibold leading-9 text-neutral-900">
            Solutions
          </h4>
          <p className="text-xl leading-7 max-w-[619px] text-neutral-900">
            So we decided to redesign with every careful step to ensure that the
            new app can partly bring more convenience to users, contributing to
            higher revenue for the company.
          </p>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/67c11b5fb8a912b38fa4d42b325113dc52fd9014"
        alt="Solution visualization"
        className="w-full rounded-[16px] mt-[60px]"
      />
      <div className="flex gap-5 mt-16 max-md:flex-col">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d93bee9afe35fb4652be46eed348555b3fdbf412"
          alt="User persona visualization"
          className="w-[420px] h-[455px] rounded-[16px]"
        />
        <div className="flex flex-col">
          <h4 className="text-3xl font-semibold leading-9 text-neutral-900">
            User persona
          </h4>
          <dl className="flex gap-5 mt-4">
            <div className="text-xl leading-7 text-neutral-900">
              <dt>Number of user:</dt>
              <dt>Scope of survey:</dt>
              <dt>Number of question:</dt>
              <dt>Time:</dt>
              <dt>Conduct survey:</dt>
              <dt>My role:</dt>
            </div>
            <div className="text-xl leading-7 text-neutral-900">
              <dd>1080</dd>
              <dd>nationwide</dd>
              <dd>9</dd>
              <dd>12-25/12/2022</dd>
              <dd>Sales team</dd>
              <dd>Organize and analyze the data</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="flex gap-5 mt-16 max-md:flex-col">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8affa7dfa7f8409ea80136bf08b2778b9635ca3"
          alt="User survey process"
          className="w-[420px] h-[432px] rounded-[16px]"
        />
        <div className="flex flex-col">
          <h4 className="text-3xl font-semibold leading-9 text-neutral-900">
            User survey
          </h4>
          <p className="mt-4 text-xl leading-7 max-w-[460px] text-neutral-900">
            The PO, I and another designer conducted qualitative research by
            visiting merchants at their grocery stores, asking a number of
            questions to understand their feedback of the app, strengths vs
            limitations, enhancement ideas...
          </p>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/254b66c3e27239ee1819f8fd008fac13a6ec88a0"
        alt="Survey results visualization"
        className="w-full rounded-[16px] mt-[60px]"
      />
    <div className="flex flex-col gap-16 w-full">
        <div className="flex justify-between max-md:flex-col max-md:gap-6">
            <h4 className="text-3xl font-semibold leading-9 text-neutral-900">
            Analyze results
            </h4>
            <p className="text-xl leading-7 max-w-[614px] text-neutral-900">
            After collecting all the data, we proceeded to design a new app. We
            sort features into categories: needs improvement, new features, and
            {"bugs. Then, we prioritize them. To run with the time, we didn't have a"}
            wireframe, so I directly made a new UI.
            </p>
        </div>
    </div>
    </section>
  );
};

export default KeyChallenges;

/* src/component/KeyChallenges.jsx */
const KeyChallenges = () => {
  return (
    <section className="flex flex-col gap-10 items-center">
      {/* ---------- TITLE ---------- */}
      <h2 className="text-xl font-semibold uppercase text-neutral-400">
        3. Key Challenges
      </h2>
      <h3 className="text-5xl font-medium leading-[62.4px] text-neutral-900 max-md:text-4xl max-sm:text-3xl">
        The issues
      </h3>

      {/* ---------- INTRO ---------- */}
      <div className="flex flex-col gap-16 w-full">
        <div className="flex justify-between max-md:flex-col max-md:gap-6">
          <h4 className="text-3xl font-semibold leading-9 text-neutral-900">
            The issues we noticed
          </h4>
          <p className="text-xl leading-7 max-w-[619px] text-neutral-900">
            Coming up with a lot of issues in the previous version which have an
            {" out-of-date UI, a UX not smooth and many problems that couldn't keep "}
            up with trends for a long time. Especially, thousands of people are
            using the app, and every change is a challenge as it disrupts their
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

      {/* ---------- OVERVIEW IMAGE ---------- */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/67c11b5fb8a912b38fa4d42b325113dc52fd9014"
        alt="Solution visualization"
        className="w-full rounded-[16px] mt-[60px]"
      />

      {/* ---------- USER PERSONA ---------- */}
      <div
        className="grid gap-8 mt-16 md:grid-cols-[420px_1fr] max-md:flex max-md:flex-col"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d93bee9afe35fb4652be46eed348555b3fdbf412"
          alt="User persona visualization"
          className="w-[420px] h-[455px] object-cover rounded-[16px]"
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
              <dd>Nationwide</dd>
              <dd>9</dd>
              <dd>12-25/12/2022</dd>
              <dd>Sales team</dd>
              <dd>Organize and analyze the data</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* ---------- USER SURVEY ---------- */}
      <div
        className="grid gap-8 mt-16 md:grid-cols-[420px_1fr] max-md:flex max-md:flex-col"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8affa7dfa7f8409ea80136bf08b2778b9635ca3"
          alt="User survey process"
          className="w-[420px] h-[455px] object-cover rounded-[16px]"
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

      {/* ---------- COMPETITOR RESEARCH ---------- */}
      <section
        className="flex flex-col gap-10 items-center mt-16"
      >
        <h3 className="text-4xl font-medium leading-tight text-neutral-900">
          Competitor Research
        </h3>

        <p className="text-center text-lg leading-7 max-w-xl text-neutral-900">
          We’ve been focusing on researching our competitors in Vietnam,&nbsp;
          especially VinShop and Tello, two big players that have been in the
          market for several years.
        </p>

        {/* bảng so sánh – cập nhật đường dẫn ảnh nếu cần */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/900f52382bab3724acbef73a12d4f475926e2ac7?placeholderIfAbsent=true"
          alt="Competitor feature comparison table"
          className="w-full max-w-[640px] rounded-[16px] shadow"
        />

        <div className="grid md:grid-cols-[250px_1fr] gap-8 w-full max-w-4xl text-neutral-900 text-base leading-7">
          <h4 className="font-semibold text-[28px] w-[210px] break-words">How&nbsp;We Started</h4>
          <p>
            We began by listing all the features that Finviet currently offers.
            Then, we looked at our two big competitors in Vietnam – VinShop and
            Tello – and listed all the features they have.
          </p>

          <h4 className="font-semibold text-[28px] w-[210px] break-words">Comparing&nbsp;the&nbsp;Features</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>What features they have that we don’t</li>
            <li>
              What features we both have, and whether ours are better, the same,
              or need improvement
            </li>
          </ul>

          <h4 className="font-semibold text-[28px] w-[210px] break-words">Organizing&nbsp;the&nbsp;Results</h4>
          <p>
            We put everything into two sheets:
            <br />• One for the full feature comparison
            <br />• One for the gaps and opportunities
            <br />
            These were shared and discussed with different teams in the company.
          </p>

          <h4 className="font-semibold text-[28px] w-[130px] break-words">The&nbsp;Big&nbsp;Question</h4>
          <p>
            After looking at all the data, one important question came up:
            Should we follow our competitors and build the same features, or
            focus on what we do best and make it even better?
          </p>

          <h4 className="font-semibold text-[28px] w-[130px] break-words">What&nbsp;We Decided</h4>
          <p>
            After many meetings and team discussions, we came up with:
            <br />• A list of features we need to improve
            <br />• A list of new features we can build to offer more value to
            our users
          </p>
        </div>
      </section>

      {/* ---------- SURVEY RESULTS IMAGE ---------- */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/254b66c3e27239ee1819f8fd008fac13a6ec88a0"
        alt="Survey results visualization"
        className="w-full rounded-[16px] mt-[60px]"
      />

      {/* ---------- ANALYZE RESULTS ---------- */}
      <div className="flex flex-col gap-16 w-full">
        <div className="flex justify-between max-md:flex-col max-md:gap-6">
          <h4 className="text-3xl font-semibold leading-9 text-neutral-900">
            Analyze results
          </h4>
          <p className="text-xl leading-7 max-w-[614px] text-neutral-900">
            After collecting all the data, we proceeded to design a new app. We
            sort features into categories: needs improvement, new features, and
            {" bugs. Then, we prioritized them. To keep up with time, we skipped "}
            wireframes and moved straight to final UI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyChallenges;

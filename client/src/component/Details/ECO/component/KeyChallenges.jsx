/* src/component/KeyChallenges.jsx */
const KeyChallenges = () => {
  return (
    <section
      className="flex flex-col gap-10 items-center [font-family:'Inter_Display',sans-serif]"
    >
      {/* ---------- TITLE ---------- */}
      <h2 className="          
        text-[20px]          /* 20px */
        font-medium
        uppercase
        text-neutral-400"
      >
        3. Key Challenges
      </h2>
      <h3 className="        
        text-[40px]         /* 40px */
        font-semibold
        text-neutral-900
        text-center"
      >
        The issues
      </h3>

      {/* ---------- INTRO ---------- */}
      <div className="flex flex-col gap-16 w-full">
        <div className="flex justify-between max-md:flex-col max-md:gap-6">
          <h4 className="text-[28px] font-semibold leading-9 text-neutral-900">
            The issues we <br/> noticed
          </h4>
          <p className="text-[20px] leading-7 max-w-[619px] text-neutral-900">
            Coming up with a lot of issues in the previous version which have an
            {" out-of-date UI, a UX not smooth and many problems that couldn't keep "}
            up with trends for a long time. Especially, thousands of people are
            using the app, and every change is a challenge as it disrupts their
            established habits.
          </p>
        </div>

        <div className="flex justify-between max-md:flex-col max-md:gap-6">
          <h4 className="text-[28px] font-semibold leading-9 text-neutral-900">
            Solutions
          </h4>
          <p className="text-[20px] leading-7 max-w-[619px] text-neutral-900">
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
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/676f8eb9e543e647dfb51aad427c3883f3e7b3a7?placeholderIfAbsent=true"
        alt="Overview visualization"
        className="w-full rounded-[16px] mt-[60px]"
      />

      {/* ---------- USER SURVEY ---------- */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/4d5cb90484986235aceb13a3a0136d354b02325a?placeholderIfAbsent=true"
        alt="Secondary overview visualization"
        className="w-full rounded-[16px] mt-[60px]"
      />

      {/* ---------- COMPETITOR RESEARCH ---------- */}
      <section className="flex flex-col gap-10 items-center mt-16">
        <h3
          className="text-[40px] font-semibold text-neutral-900 text-center"
        >
          Competitor Research
        </h3>

        <p className="text-[20px] text-center leading-7 max-w-xl text-neutral-900">
          We’ve been focusing on researching our competitors in Vietnam,&nbsp;
          especially VinShop and Tello, two big players that have been in the
          market for several years.
        </p>

        {/* bảng so sánh */}
        <div className="flex gap-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/900f52382bab3724acbef73a12d4f475926e2ac7?placeholderIfAbsent=true"
            alt="Competitor feature comparison table"
            className="w-full max-w-[480px] rounded-[16px] shadow"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/89f4a036a7f88601e0f1c0e18007e64414b06e0a?placeholderIfAbsent=true"    /* thay thành đường dẫn ảnh bạn muốn thêm */
            alt="Additional competitor flow"
            className="w-full max-w-[480px] rounded-[16px] shadow"
          />
        </div>

        

        <div className="grid md:grid-cols-[250px_1fr] gap-8 w-full max-w-4xl text-neutral-900 text-[20px] leading-7">
          <h4 className="font-semibold text-[28px]">
            How&nbsp;We <br />Started
          </h4>
          <p>
            We began by listing all the features that Finviet currently offers.
            Then, we looked at our two big competitors in Vietnam – VinShop and
            Tello – and listed all the features they have.
          </p>

          <h4 className="font-semibold text-[28px]">
            Comparing&nbsp;the <br />Features
          </h4>
          <p>
            Next, we compared everything side by side:
            <br />• What features they have that we don’t.
            <br />• What features we both have, and whether ours are better, the same, or need improvement.
          </p>

          <h4 className="font-semibold text-[28px]">
            Organizing&nbsp;the <br />Results
          </h4>
          <p>
            We put everything into two sheets:
            <br />• One for the full feature comparison
            <br />• One for the gaps and opportunities
            <br />
            These were shared and discussed with different teams in the company.
          </p>

          <h4 className="font-semibold text-[28px]">
            The&nbsp;Big <br />Question
          </h4>
          <p>
            After looking at all the data, one important question came up:
            Should we follow our competitors and build the same features, or
            focus on what we do best and make it even better?
          </p>

          <h4 className="font-semibold text-[28px]">
            What&nbsp;We <br />Decided
          </h4>
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
          <h4 className="text-[28px] font-semibold leading-9 text-neutral-900">
            Analyze results
          </h4>
          <p className="text-[20px] leading-7 max-w-[614px] text-neutral-900">
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

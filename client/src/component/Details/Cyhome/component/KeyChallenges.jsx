const KeyChallenges = () => {
  return (
    <section>
      <h2 className="mb-3 text-xl font-semibold leading-7 text-center uppercase text-neutral-400">
        2. Key Challenges
      </h2>
      <h3 className="mx-0 my-10 text-5xl font-medium text-center leading-[62.4px] text-neutral-900 max-sm:text-4xl">
        CYHOME APP
      </h3>
      <div className="grid gap-16 max-md:gap-10">
        <article className="grid gap-5 grid-cols-[320px_1fr] max-md:gap-4 max-md:grid-cols-[1fr] max-sm:gap-2.5">
          <h4 className="text-3xl font-semibold leading-9 text-neutral-900">
            Common user problems
          </h4>
          <div className="text-xl leading-7 text-neutral-900">
            <ul className="list-disc">
              <li>
                Difficulty in paying fees in the apartment (management fee,
                utility fee, service fee ...).
              </li>
              <li>Difficult to communicate with management.</li>
              <li>
                Difficult to order services and utilities at the apartment.
              </li>
              <li>{"Can't track notifications in the apartment."}</li>
              <li>The lessor cannot manage the apartment...</li>
            </ul>
          </div>
        </article>

        <article className="grid gap-5 grid-cols-[320px_1fr] max-md:gap-4 max-md:grid-cols-[1fr] max-sm:gap-2.5">
          <h4 className="text-3xl font-semibold leading-9 text-neutral-900">
            User needs
          </h4>
          <div className="text-xl leading-7 text-neutral-900">
            <ul className="list-disc">
              <li>Quick and convenient payment of fees.</li>
              <li>Can pay fees for family members.</li>
              <li>
                Communicate and reflect immediately on issues with management.
              </li>
              <li>Easy to set up and use the gadget.</li>
              <li>Receive instant notifications from management.</li>
              <li>Manage rental apartments.</li>
            </ul>
          </div>
        </article>

        <article className="grid gap-5 grid-cols-[320px_1fr] max-md:gap-4 max-md:grid-cols-[1fr] max-sm:gap-2.5">
          <h4 className="text-3xl font-semibold leading-9 text-neutral-900">
            Solutions
          </h4>
          <div className="text-xl leading-7 text-neutral-900">
            <ul className="list-disc">
              <li>
                {"CyHome to solve the majority of users' problems and needs."}
              </li>
              <li>
                Provide online fee payment feature with a variety of payment
                methods, list fees in the apartment that are entered by the
                management from the PMS system.
              </li>
              <li>
                Provide private communication and reflection channel between
                residents and management.
              </li>
              <li>
                Allow management to put services and utilities on the app for
                residents to book.
              </li>
              <li>
                Notice residents via notification on the app to ensure
                immediacy.
              </li>
              <li>
                Manage information about the number of people living in the
                apartments with the confirmation of management.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default KeyChallenges;

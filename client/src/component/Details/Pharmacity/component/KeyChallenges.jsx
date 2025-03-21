function KeyChallenges() {
  return (
    <div className="max-w-[941px] mx-auto text-left">
      <div className="text-xl font-semibold leading-snug text-center text-[#A9A9A9] uppercase max-md:mt-10">
        2. Key challenges
      </div>
      <div className="mt-3 ml-3 text-5xl font-medium leading-tight text-center text-black max-md:max-w-full max-md:text-4xl">
        Buy prescription drugs
      </div>
      {/* For user */}
      <div className="mt-12 grid grid-cols-[200px_1fr] gap-5">
        <h2 className="text-2xl font-bold">For user</h2>
        <div>
          <h3 className="font-bold">{`User's pain point:`}</h3>
          <p className="mt-2">
            <li>Due to the COVID-19 pandemic, it is impossible to go out to buy regular
            prescription drugs.</li>
            <li>{`Family members and elderly people can't order online by themselves`}</li>
            <li>Relatives living far away do not have the time or means
            for a follow-up examination as soon as the medicine runs out.</li>
          </p>

          <h3 className="mt-4 font-bold">User needs:</h3>
          <ul className="mt-2 list-disc pl-5">
            <li>Even if you are infected with COVID-19, you can still buy medicine and have it delivered to your home.</li>
            <li>Buy prescription drugs for family members, elderly people.</li>
            <li>{`Buy medicine for relatives who are far away and don't have the time or means for a follow-up examination when their medicine runs out.`}</li>
            <li>Buy medicine as a gift.</li>
          </ul>
        </div>
      </div>

      {/* For PMC's business */}
      <div className="grid grid-cols-[200px_1fr] gap-5 mt-8">
        <h2 className="text-2xl font-bold">{`For PMC's business`}</h2>
        <div>
          <p className="mt-2">
            Solve the problem of buying prescription drugs of existing customers at PMC. Increase sales through prescription drug sales.
            Connect with other health service providers in the market to expand the market and increase revenue.
          </p>
        </div>
      </div>

      {/* Technical solution */}
      <div className="grid grid-cols-[200px_1fr] gap-5 mt-8">
        <h2 className="text-2xl font-bold">Technical solution</h2>
        <div>
          <p className="mt-2">
            With an existing team of pharmacists at the pharmacy, PMC has implemented the feature of buying prescription drugs on the application,
            linking with the existing e-pharmacist (online pharmacist) feature to confirm as well.
          </p>
        </div>
      </div>
    </div>
  );
}

export default KeyChallenges;
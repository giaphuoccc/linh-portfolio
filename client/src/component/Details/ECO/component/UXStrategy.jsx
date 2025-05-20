const UXStrategy = () => (
  <section className="my-20 [font-family:'Inter_Display',sans-serif]">

    {/* ----------  TOP HEADER  ---------- */}
    <div className="text-center max-w-3xl mx-auto">
      <p className="uppercase tracking-widest text-xl font-medium text-gray-500 mb-2">
        4. Design
      </p>

      <h2 className="font-semibold text-[40px] md:text-3xl mb-4 leading-snug">
        Time is not on our side <br className="hidden md:block" />
        – only speed matters
      </h2>

      <p className="text-gray-700 text-xl leading-relaxed max-w-lg mx-auto">
        Solving the problem isn’t just about design; it’s also about managing
        and dividing tasks effectively. With me the main person and a junior
        designer supporting, we needed to work together efficiently to speed up
        the progress.
      </p>
    </div>

    {/* ----------  TIMELINE / TASK TABLE IMAGE  ---------- */}
    <figure className="my-12">
      {/* 📌 Thay đổi đường dẫn tới file ảnh của bạn */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4f495b6d81d24533a0f9f7f4a35d3038/4c0a98e8c7c7fde2cac611e1e1d8374c985f6f67?placeholderIfAbsent=true"
        alt="Project timeline showing task breakdown and priorities"
        className="w-full rounded-lg shadow"
      />
    </figure>

    {/* ---------- PROBLEM / SOLUTION / PAYOFF ---------- */}
    {/* ① Giữ lại 3 heading như cũ */}
    <div className="grid md:grid-cols-3 gap-8 mb-4">
      <h3 className="font-semibold text-2xl">Problem</h3>
      <h3 className="font-semibold text-2xl">Solution</h3>
      <h3 className="font-semibold text-2xl">Payoff</h3>
    </div>

    {/* ② Dùng grid 3×3 cho 9 items */}
    <div className="grid md:grid-cols-3 md:grid-rows-3 gap-x-8 gap-y-1 text-[20px] leading-snug text-gray-700">
      {/* Row 1 */}
      <div>
        <strong>Resources:</strong> I was the only designer on this project,
        so with limited support, the workload got pretty heavy. I ended up
        needing a lot of help from the BA for some tasks.
      </div>
      <div>
        <strong>Calling for help:</strong> I reached out to another designer
        for support on certain tasks to make sure everything stayed on track
        and was finished on time.
      </div>
      <div>
        <strong>Working at different times:</strong> Because many people
        worked together at different times, about 30&nbsp;% of the UI design
        didn’t match perfectly.
      </div>

      {/* Row 2 */}
      <div>
        <strong>Design guidelines:</strong> There were no existing design
        guidelines from earlier versions, so I had to start from scratch.
      </div>
      <div>
        <strong>Using available resources:</strong> I made use of an
        existing design system from another team to speed things up and keep
        things consistent.
      </div>
      <div>
        <strong>Hard to control everything:</strong> We used a design system
        made by someone else, but some parts didn’t work well for us. We had
        to change them, which made it harder to keep everything under
        control.
      </div>

      {/* Row 3 */}
      <div>
        <strong>User testing:</strong> There wasn’t much time to learn about
        users, so for some features I had to make a few assumptions on my
        own.
      </div>
      <div>
        <strong>In-house support:</strong> I got quick help from someone in
        the company to test and give feedback, which helped us catch and fix
        issues before launch.
      </div>
      <div>
        <strong>Quick launch, quick fix:</strong> We released the first
        version fast with some guesses. After that, we got feedback quickly
        and made it better in the next version.
      </div>
    </div>

    {/* ----------  UX STRATEGY CARD  ---------- */}
    <div className="bg-[#F5F5F5] px-8 py-12 mt-16 rounded-lg">
      <h2 className="text-center font-semibold text-[40px] mb-2">
        UX Strategy
      </h2>
      <h3 className="text-center text-[40px] font-medium mb-6">
        Don’t reinvent&nbsp;the&nbsp;wheel
      </h3>

      <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto mb-4">
        Our design strategy is grounded in{" "}
        <span className="font-semibold italic">
          Jakob’s Law — “Users spend most of their time on other websites, so
          they expect your site to work the same way as the ones they already
          know.”
        </span>
      </p>

      <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto mb-4">
        The e-commerce market has already shaped user habits through big
        players. That’s why we follow familiar design patterns instead of
        creating something completely new. This helps us:
      </p>

      <ul className="list-disc pl-6 text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto space-y-1">
        <li>Make the site easy to use without extra learning</li>
        <li>Avoid confusion or breaking the shopping flow</li>
        <li>Improve the user experience from browsing to checkout</li>
      </ul>

      <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto mt-6">
        Complying with Jakob’s Law up to 70&nbsp;% doesn’t mean a lack of
        creativity. Instead, we channel our innovation into the remaining
        30&nbsp;% of the UI and micro-interactions — focusing on subtle but
        impactful improvements that make the user experience smoother and more
        delightful.
      </p>
    </div>
  </section>
);

export default UXStrategy;

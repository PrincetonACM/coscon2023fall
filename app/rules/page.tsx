import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-3 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className={`text-3xl font-semibold`}>
          <a href="/">COSCON 2023</a>
        </h1>
        <h1 className={`text-2xl font-semibold text-orange-500`}>
          <a href="/problems">Problems</a>
        </h1>
        <h1 className={`text-2xl font-semibold text-orange-500`}>
          <a href="/rules">Rules</a>
        </h1>
        <h1 className={`text-2xl font-semibold text-orange-500`}>
          <a href="/leaderboard">Leaderboard</a>
        </h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        Contest Rules
        Yes, rules are tedious. But they make things fair, so please read them carefully :-))).

        Eligibility

        Your team can be comprised of at most three members, each of whom must be either an undergraduate or graduate student at Princeton. For your team to be eligible for undergrad prizes, each member must be a currently enrolled undergraduate. However, teams with at least one grad student are still eligible for the graduate placement prize and miscellaneous awards.
        To be eligible for the best freshman/sophomore prize, each member of the team must be a currently enrolled undergraduate student at Princeton graduating in 2025 or 2026.
        To be eligible for the best non-COS/MAT team prize, each member of the team must be concentrating in a field that is neither MAT nor COS. Undecided majors are OK too, but you must be a BSE frosh or an AB frosh/soph to fall into this category!

        Scoring

        The competition will consist of around 9 problems with varying point values. The problem weights will be on the official handout of competition problems, and your team’s final score is simply the total number of accrued points.
        The coding portion of the competition will be held on Codeforces. Solutions to these problems will not be eligible for partial credit. We will, however, be awarding partial credit on the non-coding problems.
        Once the competition period finishes, the undergraduate teams with the top three final scores and the graduate team with the top score will receive placement prizes! If there are ties, then the team who reached their final score earlier will be ranked higher. For example, if Teams A and B are tied at 70 points, but Team A submitted their last correct answer before Team B submitted their last correct answer, then Team A will be ranked higher.

        Allowed Sources and Libraries

        Allowed Sources. You are allowed to use any source on the internet that every Princeton student has access to for free — StackExchange, Wikipedia, and papers in journals that Princeton pays for are all fair game. We just ask that you do not directly copy and paste code from the internet (with the exception of code to read input) and that you do not directly copy and paste our problems into Google (though you’ll find that if you do, you probably won’t get far anyway).
        Explicitly Forbidden Sources. You are not permitted to collaborate live with anyone who is not on your team. For example, you may not consult with another team, nor may you email a professor to ask for their opinion on a problem. You may also not use sources that not all teams have access to, e.g. a Chegg subscription.
        You are responsible for understanding every piece of code, proof statement, and technique you employ to solve the problems. We will be reviewing the submissions of winners, and if we find anything to be confusing or suspicious, we will ask you to explain your work. Failure to adequately address our concerns may result in disqualification.
        You can use any library that you want, but again, you must be extremely familiar with the purpose of the functions you are calling and be able to explain how this fits in to your overall solution. The code that you borrow must not trivialize the problem either (though again, you will almost definitely not find a library that does this). Finally, the library must be supported on Codeforces — this is the case with all the standard libraries, but not for some more niche ones.
        None of the criteria above are completely exhaustive. When in doubt, please ask by emailing us at ptonacm@princeton.edu. Better safe than sorry!

        Miscellaneous

        You are not required to be in the same room as your teammates. Though we would prefer if you discuss all solutions with them, this is not strictly required. Don’t worry — we won’t put chips in you and install eye trackers in your web camera to ensure that you and your teammates look at the same exact pixel on your computer screen at the same time, like some introductory computer science classes at Princeton whose course codes lie between 125 and 127.
        You are allowed to use a total of three computers per team — one for each teammate. Nope, no using AWS servers to run your brute-force algorithm.
        You are allowed to communicate with your teammates however you wish to — in person, Zoom, Skype, Phone Call, Email, USPS (though the University might take 10 extra processing days), pigeons, smoke signals, stone tablets, or even Facebook Messenger.
        All code submissions (made through Codeforces) can be made on any supported language.
      </div>
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <div className="mb-3 max-w-4xl w-full justify-between flex flex-col md:flex-row">
        <h1 className="text-2xl font-mono font-semibold">
          <a href="/">COSCON 23-24</a>
        </h1>
        <h1 className="text-xl font-semibold">
          <a href="/problems">Problems</a>
        </h1>
        <h1 className="text-xl font-semibold text-orange-500">
          <a href="/rules">Rules</a>
        </h1>
        <h1 className="text-xl font-semibold">
          <a href="/leaderboard">Leaderboard</a>
        </h1>
      </div>
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl font-semibold mb-3">Eligibility</h2>
        <p className="mb-3">
          Your team can be comprised of at most three members, each of whom must
          be either an undergraduate or graduate student at Princeton. For your
          team to be eligible for undergrad prizes, each member must be a
          currently enrolled undergraduate. However, teams with at least one
          grad student are still eligible for the graduate placement prize and
          miscellaneous awards. To be eligible for the best freshman/sophomore
          prize, each member of the team must be a currently enrolled
          undergraduate student at Princeton graduating in 2026 or 2027. To be
          eligible for the best non-COS/MAT team prize, each member of the team
          must be concentrating in a field that is neither MAT nor COS.
          Undecided majors are OK too, but you must be a BSE frosh or an AB
          frosh/soph to fall into this category!
        </p>
        <h2 className="text-2xl font-semibold mb-3">Scoring</h2>
        <p className="mb-3">
          The competition will consist of around eight problems with varying
          point values. The problem weights will be on the official handout of
          competition problems, and your team&apos;s final score is simply the
          total number of accrued points. The coding portion of the competition
          will be held on Codeforces. Solutions to these problems will not be
          eligible for partial credit. We will, however, be awarding partial
          credit on the non-coding problems. Once the competition period
          finishes, the undergraduate teams with the top three final scores and
          the graduate team with the top score will receive placement prizes! If
          there are ties, then the team who reached their final score earlier
          will be ranked higher. For example, if Teams A and B are tied at 70
          points, but Team A submitted their last correct answer before Team B
          submitted their last correct answer, then Team A will be ranked
          higher.
        </p>
        <h2 className="text-2xl font-semibold mb-3">
          Allowed Sources and Libraries
        </h2>
        <ul className="list-dash mb-3">
          <li>
            <b>Allowed sources:</b> You are allowed to use any source on the
            internet that every Princeton student has access to for free -
            StackExchange, Wikipedia, and papers in journals that Princeton pays
            for are all fair game. We just ask that you do not directly copy and
            paste code from the internet (with the exception of code to read
            input) and that you do not directly copy and paste our problems into
            Google (though you&apos;ll find that if you do, you probably
            won&apos;t get far anyway).
          </li>
          <li>
            <b>Forbidden sources:</b> You are not permitted to collaborate live
            with anyone who is not on your team. For example, you may not
            consult with another team, nor may you email a professor to ask for
            their opinion on a problem. You may also not use sources that not
            all teams have access to, e.g. a Chegg subscription. You are
            responsible for understanding every piece of code, proof statement,
            and technique you employ to solve the problems. We will be reviewing
            the submissions of winners, and if we find anything to be confusing
            or suspicious, we will ask you to explain your work. Failure to
            adequately address our concerns may result in disqualification.
          </li>
          <li>
            <b>Libraries:</b> You can use any library that you want, but again,
            you must be extremely familiar with the purpose of the functions you
            are calling and be able to explain how this fits in to your overall
            solution. The code that you borrow must not trivialize the problem
            either (though again, you will almost definitely not find a library
            that does this). Finally, the library must be supported on
            Codeforces - this is the case with all the standard libraries, but
            not for some more niche ones. None of the criteria above are
            completely exhaustive. When in doubt, please ask by emailing us at{" "}
            <a className="text-orange-500" href="mailto:ptonacm@princeton.edu">
              ptonacm@princeton.edu
            </a>
            . Better safe than sorry!
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3">Miscellaneous</h2>
        <p className="mb-3">
          You are not required to be in the same room as your teammates. Though
          we would prefer if you discuss all solutions with them, this is not
          strictly required. Don&apos;t worry - we won&apos;t put chips in you
          and install eye trackers in your web camera to ensure that you and
          your teammates look at the same exact pixel on your computer screen at
          the same time, like some introductory computer science classes at
          Princeton whose course codes lie between 125 and 127. You are allowed
          to use a total of three computers per team - one for each teammate.
          Nope, no using AWS servers to run your brute-force algorithm. You are
          allowed to communicate with your teammates however you wish - in
          person, Zoom, Skype, Phone Call, Email, USPS (though the University
          might take 10 extra processing days), pigeons, smoke signals, stone
          tablets, or even Facebook Messenger. All code submissions (made
          through Codeforces) can be made with any supported language.
        </p>
      </div>
    </main>
  );
}

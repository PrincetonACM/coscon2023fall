import Image from "next/image";

const problems = [
  {
    name: "Consulting Charade",
    points: 5,
    statementName: "ConsultingCharade.pdf",
    submissionType: "Codeforces",
    submissionUrl: "https://codeforces.com/group/bUW9rSzJeG/contest/435278",
  },
  {
    name: "The Construction Campaign",
    points: 15,
    statementName: "TheConstructionCampaign.pdf",
    submissionType: "Dropbox",
    submissionUrl: "https://www.dropbox.com/request/DW8loV5ZZksZWi3N9n7c",
  },
  {
    name: "Communication Conundrum",
    points: 15,
    statementName: "CommunicationConundrum.pdf",
    submissionType: "Codeforces",
    submissionUrl: "https://codeforces.com/group/bUW9rSzJeG/contest/435278",
  },
  {
    name: "Decryption Dilemma",
    points: 15,
    statementName: "DecryptionDilemma.pdf",
    submissionType: "Dropbox",
    submissionUrl: "https://www.dropbox.com/request/DW8loV5ZZksZWi3N9n7c",
  },
  {
    name: "March Sadness",
    points: 20,
    statementName: "MarchSadness.pdf",
    submissionType: "Codeforces",
    submissionUrl: "https://codeforces.com/group/bUW9rSzJeG/contest/435278",
  },
  {
    name: "The Missing Electron",
    points: 25,
    statementName: "TheMissingElectron.pdf",
    submissionType: "Dropbox",
    submissionUrl: "https://www.dropbox.com/request/DW8loV5ZZksZWi3N9n7c",
  },
  {
    name: "Cyberchondria",
    points: 20,
    statementName: "Cyberchondria.pdf",
    submissionType: "Codeforces",
    submissionUrl: "https://codeforces.com/group/bUW9rSzJeG/contest/435278",
  },
  {
    name: "Some Assembly Required",
    points: 25,
    statementName: "SomeAssemblyRequired.pdf",
    submissionType: "Dropbox",
    submissionUrl: "https://www.dropbox.com/request/DW8loV5ZZksZWi3N9n7c",
  },
  {
    name: "Theorems AI",
    points: 15,
    statementName: "TheoremsAI.pdf",
    submissionType: "Codeforces",
    submissionUrl: "https://codeforces.com/group/bUW9rSzJeG/contest/435278",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <div className="mb-3 max-w-4xl w-full justify-between flex flex-col md:flex-row">
        <h1 className="text-2xl font-mono font-semibold">
          <a href="/coscon">COSCON 23-24</a>
        </h1>
        <h1 className="text-xl font-semibold text-orange-500">
          <a href="/coscon/problems">Problems</a>
        </h1>
        <h1 className="text-xl font-semibold">
          <a href="/coscon/rules">Rules</a>
        </h1>
        <h1 className="text-xl font-semibold">
          <a href="/coscon/leaderboard">Leaderboard</a>
        </h1>
      </div>
      <div className="max-w-4xl w-full">
        <p className="mb-3">
          {/* There are <b>{problems.length} problems</b> worth a total of{" "}
          <b>
            {problems.map((problem) => problem.points).reduce((a, b) => a + b)}{" "}
            points
          </b>
          . */}Each problem will require either submission of your solution source
          code to Codeforces, or submission of the files comprising your
          solution to Dropbox.
        </p>
        <p className="mb-3">
          Follow these instructions for submission to <b>Codeforces:</b>
        </p>
        <ul className="mb-3 list-dash">
          <li>
            <a href="https://codeforces.com" className="text-orange-500">
              Create a Codeforces account
            </a>{" "}
            if you don&apos;t have one already. Use only one account per team.
          </li>
          <li>
            <a
              href="https://forms.gle/YkgWHJeygXqa3r1bA"
              className="text-orange-500"
            >
              Fill in this form
            </a>{" "}
            with your Codeforces handle.
          </li>
          <li>
            <a
              href="https://codeforces.com/group/bUW9rSzJeG/contests"
              className="text-orange-500"
            >
              Go to the COSCON Codeforces group page
            </a>{" "}
            and click &quot;Join&quot;. Then click &quot;Register&quot; next to
            the contest named &quot;Princeton COSCON 2023&quot;, and then click
            on the contest to see the problems. See below for the problem
            statements; you won&apos;t be able to see them on Codeforces.
          </li>
          <li>
            To submit a solution, go to the &quot;Submit Code&quot; tab, pick
            the problem, the submission file, and the programming language, and
            then submit. Judging will take a few seconds (refresh to see the
            result). You can submit as many times as you wish. You can use C++,
            Python, Java and many other languages to write your solutions.
          </li>
        </ul>
        <p className="mb-3">
          Follow these instructions for submission to <b>Dropbox:</b>
        </p>
        <ul className="mb-3 list-dash">
          <li>
            Go to the Dropbox File Request link for the problem by clicking on
            the appropriate button below. Click &quot;Add files&quot; and select
            your solution file(s).
          </li>
          <li>
            If you see a message that you are &quot;Signed in to Personal
            Dropbox&quot;, sign out via the button at the top right of the page.
          </li>
          <li>
            Enter your team Codeforces handle under &quot;Your name&quot; and
            the email for your team Codeforces account under &quot;Your email
            address&quot;, and then upload.
          </li>
        </ul>
        {/* also uncomment problem totals above */}
        <p><b>Coming soon!</b></p>
        {/* {problems.map((problem, index) => (
          <div key={problem.statementName} className="mb-3">
            <h2 className="text-2xl font-semibold mb-3">{`P${index}: ${problem.name} [${problem.points} points]`}</h2>
            <a
              className="p-1 rounded bg-orange-500 font-semibold mr-3"
              href={problem.statementName}
            >
              View statement
            </a>
            <a
              className="p-1 rounded bg-orange-500 font-semibold"
              href={problem.submissionUrl}
            >
              Submit to {problem.submissionType}
            </a>
          </div>
        ))} */}
      </div>
    </main>
  );
}

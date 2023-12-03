const problems = [
  {
    name: 'Mowing Poe Field',
    points: 1,
    statementName: 'Problem0.pdf',
    submissionType: 'Codeforces',
    submissionUrl: '',
    testData: null,
  },
  {
    name: 'Princeton Subway Network',
    points: 5,
    statementName: 'Problem1.pdf',
    submissionType: 'Codeforces',
    submissionUrl: '',
    testData: null,
  },
  {
    name: 'Galactic Vacation',
    points: 10,
    statementName: 'Problem2.pdf',
    submissionType: 'Codeforces',
    submissionUrl: '',
    testData: null,
  },
  {
    name: 'Flip Flop Counters',
    points: 10,
    statementName: 'Problem3.pdf',
    submissionType: 'Dropbox',
    submissionUrl: 'https://www.dropbox.com/request/diSQh18757xLtqj8M8zn',
    testData: null,
  },
  {
    name: 'Secret Santa',
    points: 15,
    statementName: 'Problem4.pdf',
    submissionType: 'Dropbox',
    submissionUrl: 'https://www.dropbox.com/request/OjRIWUTgxAiOLR4tJNcC',
    testData: null,
  },
  {
    name: 'Hit The Fly',
    points: 15,
    statementName: 'Problem5.pdf',
    submissionType: 'Dropbox',
    submissionUrl: 'https://www.dropbox.com/request/EI87uVrVEdkFSF4NCQx3',
    testData: null,
  },
  {
    name: 'Air Goodness Index',
    points: 25,
    statementName: 'Problem6.pdf',
    submissionType: 'Dropbox',
    submissionUrl: 'https://www.dropbox.com/request/0c8sqtPODIWnMZoTBgLT',
    testData: 'agi_data.zip',
  },
  {
    name: 'What\'s the point?',
    points: 20,
    statementName: 'Problem7.pdf',
    submissionType: 'Dropbox',
    submissionUrl: 'https://www.dropbox.com/request/9XOe6Uc3ZmEvFBMGoWpc',
    testData: null,
  },
  {
    name: 'CacheSim',
    points: 30,
    statementName: 'Problem8.pdf',
    submissionType: 'Dropbox',
    submissionUrl: 'https://www.dropbox.com/request/BynVaKGRCgztL2BuzNEf',
    testData: null,
  },
  {
    name: 'Tiger Rides',
    points: 28,
    statementName: 'Problem9.pdf',
    submissionType: 'Dropbox',
    submissionUrl: 'https://www.dropbox.com/request/rv41Kc4WUy2Bd28uywl0',
    testData: 'trides_data.zip',
  },
  {
    name: 'Course Registration',
    points: 20,
    statementName: 'Problem10.pdf',
    submissionType: 'None',
    submissionUrl: null,
    testData: null,
  },
]

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <div className="mb-3 max-w-4xl w-full justify-between flex flex-col md:flex-row">
        <h1 className="text-2xl font-mono font-semibold">
          <a href="/coscon">COSCON Fall 2023</a>
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
          There are <b>{problems.length} problems</b> worth a total of{" "}
          <b>
            {problems.map((problem) => problem.points).reduce((a, b) => a + b)}{" "}
            points
          </b>
          . Each problem will require either submission of your solution source
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
              href="https://forms.gle/8hMRdNPwWWPviKHU8"
              className="text-orange-500"
            >
              Submit this form
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
            Your solution files <b>must</b> use the name format:{" "}
            <code>[Team ID]_p[Problem number].[Extension]</code>.{" "}
            <code>[Team ID]</code> should be replaced with your provided team
            identifier, <code>[Problem number]</code> should be replaced with
            the problem number for which you are submitting a solution, and{" "}
            <code>[Extension]</code> should be the usual file extension based on
            the file type. For example, <code>a3f8_p10.txt</code>.
          </li>
          <li>
            If required, enter the name and Princeton email address for any of
            your team members under &quot;Your name&quot; and &quot;Your email
            address&quot;, and then upload.
          </li>
        </ul>
        {problems.map((problem, index) => (
          <div key={problem.statementName} className="mb-3">
            <h2 className="text-2xl font-semibold mb-3">{`P${index}: ${problem.name} [${problem.points} points]`}</h2>
            <a
              className="p-1 rounded bg-orange-500 font-semibold mr-3"
              href={`/coscon/statements/${problem.statementName}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View statement
            </a>
            {
              problem.testData
                ? <a
                  className="p-1 rounded bg-orange-500 font-semibold mr-3"
                  href={`/coscon/data/${problem.testData}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get test data
                </a>
                : null
            }
            {
              problem.submissionType === 'None'
                ? null
                : <a
                  className="p-1 rounded bg-orange-500 font-semibold"
                  href={problem.submissionUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Submit to {problem.submissionType}
                </a>
            }
          </div>
        ))}
      </div>
    </main>
  );
}

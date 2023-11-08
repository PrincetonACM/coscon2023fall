import Image from "next/image";

const problems = [
  {number: 0, name: 'Consulting Charade', points: 5, statementName: 'ConsultingCharade.pdf', submissionUrl: ''},
  {number: 1, name: 'The Construction Campaign', points: 15, statementName: 'TheConstructionCampaign.pdf', submissionUrl: ''},
  {number: 2, name: 'Communication Conundrum', points: 15, statementName: 'CommunicationConundrum.pdf', submissionUrl: ''},
  {number: 3, name: 'Decryption Dilemma', points: 15, statementName: 'DecryptionDilemma.pdf', submissionUrl: ''},
  {number: 4, name: 'March Sadness', points: 20, statementName: 'MarchSadness.pdf', submissionUrl: ''},
  {number: 5, name: 'The Missing Electron', points: 25, statementName: 'TheMissingElectron.pdf', submissionUrl: ''},
  {number: 6, name: 'Cyberchondria', points: 20, statementName: 'Cyberchondria.pdf', submissionUrl: ''},
  {number: 7, name: 'Some Assembly Required', points: 25, statementName: 'SomeAssemblyRequired.pdf', submissionUrl: ''},
  {number: 8, name: 'Theorems AI', points: 15, statementName: 'TheoremsAI.pdf', submissionUrl: ''},
]


export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <div className="mb-3 max-w-4xl w-full justify-between flex flex-col md:flex-row">
        <h1 className="text-3xl font-mono font-semibold">
          <a href="/">COSCON 2023</a>
        </h1>
        <h1 className="text-xl font-semibold text-orange-500">
          <a href="/problems">Problems</a>
        </h1>
        <h1 className="text-xl font-semibold">
          <a href="/rules">Rules</a>
        </h1>
        <h1 className="text-xl font-semibold">
          <a href="/leaderboard">Leaderboard</a>
        </h1>
      </div>
      <div className="max-w-4xl w-full">
        <p className="">
            Total points: 155<br />
            To submit a problem on Codeforces, navigate here. For more detailed instructions on using Codeforces, click here.
            For all email submission problems, send your problem to coscon.submit@gmail.com.
            Create a Codeforces account (https://codeforces.com/). if you don't have one already. Log in to your account. Make sure you only use one account per team. Also, fill this form so we can know what your codeforces handle is: https://forms.gle/YkgWHJeygXqa3r1bA.
            Go to https://codeforces.com/group/bUW9rSzJeG/contests and click on "Join" on the bottom right. Afterwards click on "Register" next to the contest named "Princeton COSCON 2023".
            Cick on the "Princeton COSCON 2023" contest to see the problems. You won't be able to see the problem statements there, the problem statements are on the COSCON website. You can use C++/Python/Java and many more languages to write your solutions.
            To submit a solution go to the "Submit Code" tab and pick the problem, the submission file and the programming language and click on "Submit". Your submission will take a few seconds to be graded (refresh to see result) and you once it's done you should be able to see how many points it scored. You can submit as many times as you wish.
        </p>
        {problems.map(problem => (
          <div key={problem.number} className='mb-3'>
          <h2 className="text-2xl font-semibold mb-3">{`Problem ${problem.number}: ${problem.name} [${problem.points} points]`}</h2>
          <p>
            Problem statement: {problem.statementName} <br />
            Submission link: {problem.submissionUrl}
          </p>
          </div>
        ))}
      </div>
    </main>
  );
}

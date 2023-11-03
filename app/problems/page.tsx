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
        COSCON 2023 Problems
        Total points: 155
        To submit a problem on Codeforces, navigate here. For more detailed instructions on using Codeforces, click here.
        For all email submission problems, send your problem to coscon.submit@gmail.com.

        Problem 0: Consulting Charade [5 points]
        Problem Statement: ConsultingCharade.pdf
        Submission: Codeforces
        Problem 1: The Construction Campaign [15 points]
        Problem Statement: TheConstructionCampaign.pdf
        Submission: Codeforces
        Problem 2: Communication Conundrum [15 points]
        Problem Statement: CommunicationConundrum.pdf
        Submission: Email
        Problem 3: Decryption Dilemma [15 points]
        Problem Statement: DecryptionDilemma.pdf
        Submission: Email
        Problem 4: March Sadness [20 points]
        Problem Statement: MarchSadness.pdf
        Part 1 Submission: Codeforces
        Part 2 & 3 Submission: Email
        Problem 5: The Missing Electron [25 points]
        Problem Statement: TheMissingElectron.pdf
        Submission: Codeforces
        Problem 6: Cyberchondria [20 points]
        Problem Statement: Cyberchondria.pdf
        Train Data: train.txt
        Test Data: test.txt
        Submission: Email
        Problem 7: Some Assembly Required [25 points]
        Problem Statement: SomeAssemblyRequired.pdf
        Submission: Email
        Problem 8: Theorems AI [15 points]
        Problem Statement: TheoremsAI.pdf
        Submission: Email
        Codeforces Instructions
        Create a Codeforces account (https://codeforces.com/). if you don't have one already. Log in to your account. Make sure you only use one account per team. Also, fill this form so we can know what your codeforces handle is: https://forms.gle/YkgWHJeygXqa3r1bA.
        Go to https://codeforces.com/group/bUW9rSzJeG/contests and click on "Join" on the bottom right. Afterwards click on "Register" next to the contest named "Princeton COSCON 2023".
        Cick on the "Princeton COSCON 2023" contest to see the problems. You won't be able to see the problem statements there, the problem statements are on the COSCON website. You can use C++/Python/Java and many more languages to write your solutions.
        To submit a solution go to the "Submit Code" tab and pick the problem, the submission file and the programming language and click on "Submit". Your submission will take a few seconds to be graded (refresh to see result) and you once it's done you should be able to see how many points it scored. You can submit as many times as you wish.
      </div>
    </main>
  );
}

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
        <p className="mb-3">
          <b>COSCON</b> is Princeton’s student-run computer science contest
          designed to encourage out-of-the-box thinking on the variety of topics
          arising in computer science and its applications.
        </p>
        <a
          className="border-2 rounded-md border-orange-500 p-2 font-semibold"
          href="#"
        >
          <b>test</b>Join the Discord!
        </a>
        <h2 className="text-2xl font-semibold mb-3">Schedule</h2>
        <p className="mb-3">
          COSCON will be held on <b>[DATE]</b>. All events will take place at{" "}
          <b>[LOCATION]</b>.
        </p>
        <ul className="list-dash mb-3">
          <li>
            <b>11:30 AM</b> opening ceremony
          </li>
          <li>
            <b>11:35 AM</b> how to win COSCON (info session)
          </li>
          <li>
            <b>11:45 AM</b> grab swag, pizza, talk to Old Mission Capital (boba
            arrives at 1:30)
          </li>
          <li>
            <b>12:30 PM</b> problems released!
          </li>
          <li>
            <b>6:30 PM</b> contest ends
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3">Problems</h2>
        <p className="mb-3">
          The problems will be released at 12:30PM EST. You will have 6 hours to
          work on this problem. In terms of contest rules, please check out the
          list of contest rules in detail here. The high level summary is that
          with the only restriction being that you cannot consult anyone outside
          of your team live (either in person or online). Besides this
          restriction, feel free to use any online/offline resources to your
          benefit. The competition problems will be released here:
        </p>
        <h2 className="text-2xl font-semibold mb-3">About</h2>
        <p className="mb-3">
          COSCON is an annual computer science competition held at Princeton
          University by the Princeton ACM student chapter. The organizers and
          problem writers this year are: Our faculty sponsor is Pedro Paredes.
        </p>
        <ul className="list-dash mb-3">
          <li>Arya Maheshwari &apos;25</li>
          <li>Amir Touil &apos;24</li>
          <li>Charles Yu &apos;26</li>
          <li>Mary Tsahas &apos;24</li>
          <li>Arti Schmidt &apos;24</li>
          <li>Xander Gardner &apos;24</li>
          <li>Ijay Narang &apos;25</li>
          <li>Daniel Yang &apos;26</li>
          <li>Devan Shah &apos;26</li>
          <li>Pranav Mathur &apos;26</li>
          <li>August Ning (Grad)</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3">Sponsors</h2>
      </div>
    </main>
  );
}

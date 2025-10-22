import Image from "next/image";

const organizers = [
  "Arya Maheshwari '25",
  "Amir Touil '24",
  "Charles Yu '26",
  "Mary Tsahas '24",
  "Arti Schmidt '24",
  "Xander Gardner '24",
  "Ijay Narang '25",
  "Daniel Yang '26",
  "Devan Shah '26",
  "Pranav Mathur '26",
  "August Ning (Grad)",
];

const sponsors = [
  'cos.png',
  'jane-street.png',
  'radix.png',
  'citadel.png',
  'est.png',
  'old-mission.png',
  'geo.png',
  'pacm.jpg',
  'sig.png',
  'mat.png',
  'scm.svg',
  'orf.png',
  'csml.png',
  'prc.png',
  'phy.png',
  'hrt.png',
];

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <div className="mb-3 max-w-4xl w-full justify-between flex flex-col md:flex-row">
        <h1 className="text-2xl font-mono font-semibold text-orange-500">
          <a href="/coscon2023fall">COSCON Fall 2023</a>
        </h1>
        <h1 className="text-xl font-semibold">
          <a href="/coscon2023fall/problems">Problems</a>
        </h1>
        <h1 className="text-xl font-semibold">
          <a href="/coscon2023fall/rules">Rules</a>
        </h1>
        <h1 className="text-xl font-semibold">
          <a href="/coscon2023fall/leaderboard">Leaderboard</a>
        </h1>
      </div>
      <div className="max-w-4xl w-full">
        <p className="mb-3">
          <b>COSCON</b> is Princeton&apos;s student-run computer science contest
          designed to encourage out-of-the-box thinking on the variety of topics
          arising in computer science and its applications. In addition to
          having fun problems to solve, this year we&apos;ll be giving out over{" "}
          <b>$5000</b> in prizes!
        </p>
        <div className="mb-6">
          <a
            href="https://discord.gg/3zk6nWCGc"
            className="p-1 rounded bg-orange-500 font-semibold"
          >
            Join the Discord!
          </a>
        </div>
        <h2 className="text-2xl font-semibold mb-3">Schedule</h2>
        <p className="mb-3">
          <b>COSCON</b> will be held on <b>December 3, 2023</b>. All events will
          take place in the <b>Friend Center</b>.
        </p>
        <ul className="list-dash mb-6">
          <li>
            <b>09:30 AM</b> Registration and merch
          </li>
          <li>
            <b>10:00 AM</b> Opening ceremony
          </li>
          <li>
            <b>11:00 AM</b> Problems released!
          </li>
          <li>
            <b>12:30 PM</b> Pizza and boba arrive
          </li>
          <li>
            <b>04:00 PM</b> Competition ends
          </li>
          <li>
            <b>04:30 PM</b> Closing ceremony
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3">Problems</h2>
        <p className="mb-3">
          The problems will be released at <b>11:00 AM</b>. You will have{" "}
          <b>5 hours</b> to work on the problems. Please read through the
          contest rules in detail, but the main restriction is that you may not
          consult with anyone outside of your teammates (either in person or
          online). Besides this, you can generally feel free to make use of any
          online or offline resources.
        </p>
        <div className="mb-6">
          <a
            href="/coscon2023fall/problems"
            className="p-1 rounded bg-orange-500 font-semibold"
          >
            See the problems!
          </a>
        </div>
        <h2 className="text-2xl font-semibold mb-3">About</h2>
        <p className="mb-3">
          <b>COSCON</b> is an annual computer science competition held at
          Princeton University by the Princeton ACM student chapter. Our faculty
          sponsor is Pedro Paredes, and the organizers and problem writers this
          year are:
        </p>
        <ul className="list-dash mb-3">
          {organizers.map((officer) => (
            <li key={officer}>{officer}</li>
          ))}
        </ul>
        <p className="mb-6">
          We&apos;d like to thank Laura Cerrito for being a huge help in figuring out the logistics of the event this year!
        </p>
        <h2 className="text-2xl font-semibold mb-3">Made possible by</h2>
        <div className="w-full overflow-hidden bg-orange-100 p-3 rounded-2xl">
          <div
            style={{ width: 300 * sponsors.length * 2 }}
            className="flex animate-infinite-slider will-change-transform"
          >
            {sponsors.concat(sponsors).map((sponsor, i) => (
              <div key={i} className="w-[300px] h-[100px]">
                <div className="relative w-[200px] h-[100px] m-auto">
                  <Image
                    key={sponsor}
                    src={`/coscon/logos/${sponsor}`}
                    alt={`${sponsor} logo`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

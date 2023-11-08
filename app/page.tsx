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
]

const sponsors = [
  {name: "COS Department", logoName: "cos.png"},
  {name: "Keller Center", logoName: "keller.png"},
  {name: "Citadel", logoName: "citadel.png"},
  {name: "Old Mission", logoName: "omc_logo.png"},
  {name: "Radix", logoName: "radix.png"},
  {name: "", logoName: ""},
  {name: "", logoName: ""},
  {name: "SIG", logoName: "sig.png"},
  {name: "", logoName: ""},
  {name: "ORF Department", logoName: "orfe.png"},
  {name: "MAT Department", logoName: ""},
  {name: "", logoName: ""},
  {name: "", logoName: ""},
  {name: "", logoName: ""},
  {name: "PHY Department", logoName: "physics.png"},
]

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <div className="mb-3 max-w-4xl w-full justify-between flex flex-col md:flex-row">
        <h1 className="text-3xl font-mono font-semibold text-orange-500">
          <a href="/">COSCON 2023</a>
        </h1>
        <h1 className="text-xl font-semibold">
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
        <p className="mb-3">
          <b>COSCON</b> is Princeton&apos;s student-run computer science contest
          designed to encourage out-of-the-box thinking on the variety of topics
          arising in computer science and its applications.
        </p>
        <div className="mb-3">
          <a className="p-1 rounded bg-orange-500 font-semibold" href="#">
            Join the Discord!
          </a>
        </div>
        <h2 className="text-2xl font-semibold mb-3">Schedule</h2>
        <p className="mb-3">
          <b>COSCON</b> will be held on <b>[DATE]</b>. All events will take place at <b>[LOCATION]</b>.
        </p>
        <ul className="list-dash mb-3">
          <li>
            <b>11:30 AM</b> Opening ceremony
          </li>
          <li>
            <b>11:35 AM</b> How to win COSCON (info session)
          </li>
          <li>
            <b>11:45 AM</b> Grab swag, pizza, talk to Old Mission Capital (boba
            arrives at 1:30)
          </li>
          <li>
            <b>12:30 PM</b> Problems released!
          </li>
          <li>
            <b>6:30 PM</b> Contest ends
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3">Problems</h2>
        <p className="mb-3">
          The problems will be released at <b>12:30 PM</b>. You will have <b>6 hours</b> to
          work on the problems. Please read through the
          contest rules in detail, but the main restriction is that you may not consult with anyone outside
          of your teammates (either in person or online). Besides this, you can generally feel free to make use of any online or offline resources.
        </p>
        <div className="mb-3">
          <a className="p-1 rounded bg-orange-500 font-semibold" href="#">
            See the problems!
          </a>
        </div>
        <h2 className="text-2xl font-semibold mb-3">About</h2>
        <p className="mb-3">
          <b>COSCON</b> is an annual computer science competition held at Princeton
          University by the Princeton ACM student chapter. Our faculty sponsor is Pedro Paredes, and the organizers and
          problem writers this year are:
        </p>
        <ul className="list-dash mb-3">
          {organizers.map(officer => (
            <li key={officer}>{officer}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-3">Sponsors</h2>
          {sponsors.map(sponsor => (
            <div key={sponsor.logoName} className='relative w-80 h-40'>
            <Image
              key={sponsor.logoName}
              src={`/coscon/logos/${sponsor.logoName}`}
              alt={`${sponsor.name} logo`}
              fill={true}
              objectFit='contain'
            />
            </div>
          ))}
      </div>
    </main>
  );
}

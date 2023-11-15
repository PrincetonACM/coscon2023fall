import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <div className="mb-3 max-w-4xl w-full justify-between flex flex-col md:flex-row">
        <h1 className="text-2xl font-mono font-semibold">
          <a href="/coscon">COSCON 23-24</a>
        </h1>
        <h1 className="text-xl font-semibold">
          <a href="/coscon/problems">Problems</a>
        </h1>
        <h1 className="text-xl font-semibold">
          <a href="/coscon/rules">Rules</a>
        </h1>
        <h1 className="text-xl font-semibold text-orange-500">
          <a href="/coscon/leaderboard">Leaderboard</a>
        </h1>
      </div>
      <div className="max-w-4xl w-full">
        <b>Coming soon!</b>
      </div>
    </main>
  );
}

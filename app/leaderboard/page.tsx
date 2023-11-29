'use client'
import { useState, useEffect } from 'react';

export default function Home() {
  const [scores, setScores] = useState([])

  const fetchScores = async () => {
    const res = await fetch('http://localhost:8000/scores')
    const data = await res.json()
    setScores(data)
  }

  useEffect(() => {
    fetchScores()
    const id = setInterval(fetchScores, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <main className="flex flex-col items-center p-24">
      <div className="mb-3 max-w-4xl w-full justify-between flex flex-col md:flex-row">
        <h1 className="text-2xl font-mono font-semibold">
          <a href="/coscon">COSCON Fall 2023</a>
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
      <div className="max-w-4xl w-full overflow-x-auto">
        <table>
          <thead>
            {scores.slice(0, 1).map((row, i) => (
              <tr key={i}>
                {row.map((data, j) => (
                  <td key={j} className='whitespace-nowrap px-3 py-1'>
                    <b>{data}</b>
                  </td>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {scores.slice(1).map((row, i) => (
              <tr key={i}>
                {row.map((data, j) => (
                  <td key={j} className='whitespace-nowrap px-3 py-1'>
                    {data}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

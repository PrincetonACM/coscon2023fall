'use client'
import { useState, useEffect } from 'react';

export default function Home() {
  const [scores, setScores] = useState<string[][]>([])
  const [scoresLoading, setScoresLoading] = useState(false)

  const fetchScores = async () => {
    setScoresLoading(true)
    const res = await fetch('https://us-central1-princeton-coscon.cloudfunctions.net/get-scores')
    const data = await res.json()
    setScores(data)
    setScoresLoading(false)
  }

  useEffect(() => {
    fetchScores()
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
        {scoresLoading
          ? <p className="mb-3">
            Loading...
          </p>
          : <table>
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
        }
      </div>
    </main>
  );
}

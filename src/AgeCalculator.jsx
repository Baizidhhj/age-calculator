import React, { useState } from 'react';

export default function AgeCalculator() {
  const [mode, setMode] = useState('dob');
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2 - d1);
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setResult(mode === 'dob' ? `Age in days: ${days}` : `Days remaining: ${days}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-black text-white">
      <h1 className="text-3xl mb-6 font-bold">📅 Age & Date Calculator</h1>

      <div className="mb-4 flex space-x-4">
        <label>
          <input
            type="radio"
            value="dob"
            checked={mode === 'dob'}
            onChange={() => setMode('dob')}
          />{' '}
          From Date of Birth
        </label>
        <label>
          <input
            type="radio"
            value="countdown"
            checked={mode === 'countdown'}
            onChange={() => setMode('countdown')}
          />{' '}
          Countdown to Date
        </label>
      </div>

      <div className="mb-4">
        <input
          type="date"
          value={date1}
          onChange={(e) => setDate1(e.target.value)}
          className="p-2 rounded text-black"
        />
        <span className="mx-2 text-lg font-bold">→</span>
        <input
          type="date"
          value={date2}
          onChange={(e) => setDate2(e.target.value)}
          className="p-2 rounded text-black"
        />
      </div>

      <button
        onClick={calculate}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mb-4"
      >
        Calculate
      </button>

      {result && <p className="text-xl font-semibold">{result}</p>}
    </div>
  );
}

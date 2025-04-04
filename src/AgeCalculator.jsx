import React, { useState } from "react";

export default function AgeCalculator() {
  const [mode, setMode] = useState("dob");
  const [firstDate, setFirstDate] = useState("");
  const [secondDate, setSecondDate] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    const date1 = new Date(firstDate);
    const date2 = new Date(secondDate);

    if (isNaN(date1) || isNaN(date2)) {
      setResult("Please select valid dates.");
      return;
    }

    let diff = Math.abs(date2 - date1);
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (mode === "dob") {
      const years = Math.floor(days / 365.25);
      const months = Math.floor((days % 365.25) / 30.44);
      const remDays = Math.floor((days % 365.25) % 30.44);
      setResult(`${years} years, ${months} months, ${remDays} days old.`);
    } else {
      setResult(`${days} days left.`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 text-white rounded-2xl shadow-lg space-y-4">
      <h2 className="text-xl font-bold text-center text-blue-400">
        📅 Age & Countdown Calculator
      </h2>

      <div className="flex justify-center space-x-4">
        <label>
          <input
            type="radio"
            checked={mode === "dob"}
            onChange={() => setMode("dob")}
          />
          <span className="ml-1">DOB</span>
        </label>
        <label>
          <input
            type="radio"
            checked={mode === "countdown"}
            onChange={() => setMode("countdown")}
          />
          <span className="ml-1">Countdown</span>
        </label>
      </div>

      <div>
        <label className="block mb-1 text-sm text-gray-300">
          {mode === "dob" ? "Date of Birth" : "Start Date"}
        </label>
        <input
          type="date"
          value={firstDate}
          onChange={(e) => setFirstDate(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm text-gray-300">
          {mode === "dob" ? "Today's Date" : "Target Date"}
        </label>
        <input
          type="date"
          value={secondDate}
          onChange={(e) => setSecondDate(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />
      </div>

      <button
        onClick={calculate}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition"
      >
        Calculate
      </button>

      {result && (
        <div className="mt-4 p-4 rounded bg-gray-800 border border-green-500 text-center">
          <p>{result}</p>
        </div>
      )}

      <footer className="text-center text-xs text-gray-500 pt-4">
        © 2025 Manoughts TechPlanet. All rights reserved.
      </footer>
    </div>
  );
}

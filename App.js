import React, { useState } from 'react';
import './App.css';
import { analyzeMood } from './moodAnalyzer';

function App() {
  const [text, setText] = useState('');
  const [mood, setMood] = useState('');

  const handleAnalyze = () => {
    const result = analyzeMood(text);
    setMood(result);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <h1 className="text-4xl font-bold mb-6">Moodify 💫</h1>
      <textarea
        className="p-4 rounded-xl shadow w-96 h-32 mb-4 resize-none border border-gray-300"
        placeholder="Type how you're feeling..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        onClick={handleAnalyze}
      >
        Analyze Mood
      </button>
      {mood && (
        <div className="mt-6 text-2xl font-semibold text-indigo-800">
          Detected Mood: {mood}
        </div>
      )}
    </div>
  );
}

export default App;

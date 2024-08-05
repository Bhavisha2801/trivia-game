import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { correctCount, questionCount } = location.state as { correctCount: number; questionCount: number };

  const playAgain = () => {
    navigate('/');
  };

  return (
    <div className="text-center p-6 m-6 border border-gray-100 rounded-lg shadow-md bg-white">
      <h1 className="text-3xl mb-6 text-red-600"><b>Game Over!</b></h1>
      <p className="text-lg mb-2">Total Questions Served: {questionCount}</p>
      <p className="text-lg mb-2 text-green-700">Total Correct Questions: {correctCount}</p>
      <p className="text-lg mb-6 text-rose-700">Total Incorrect Questions: {questionCount - correctCount}</p>
      <button onClick={playAgain} className="py-2 px-4 bg-teal-500 text-white rounded hover:bg-teal-600">Play Again</button>
    </div>
  );
};

export default ResultsPage;

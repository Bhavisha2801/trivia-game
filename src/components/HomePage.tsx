import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/question');
  };

  return (
    <div className="text-center p-6 m-6 mt-60 bg-white">
      <h1 className="text-5xl mb-6"><b>Welcome to the Trivia Game!</b></h1>
      <button onClick={startGame} className="py-2 px-4 m-2 bg-teal-500 text-white rounded hover:bg-teal-700">Start Game</button>
    </div>
  );
};

export default HomePage;

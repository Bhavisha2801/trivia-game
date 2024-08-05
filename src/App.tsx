// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import QuestionPage from './components/QuestionPage';
import ResultsPage from './components/ResultPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { fetchQuestion } from '../services/triviaService';
import { Question } from '../types';
import { useNavigate } from 'react-router-dom';
import QuestionComponent from './QuestionComponents';
import Loader from './Loader'; // Import the Loader component

const QuestionPage: React.FC = () => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  const navigate = useNavigate();

  useEffect(() => {
    loadQuestion();
  }, []);

  const loadQuestion = async () => {
    try {
      setLoading(true); // Set loading to true before fetching
      const question = await fetchQuestion();
      setQuestion(question);
      setUserAnswer(null);
      setShowResult(false);
      setError(null);
    } catch (error:any) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  const handleSubmitAnswer = () => {
    if (!userAnswer) return;
    setShowResult(true);
    if (userAnswer === question!.correct_answer) {
      setCorrectCount(correctCount + 1);
    }
    setQuestionCount(questionCount + 1);
  };

  const handleNextQuestion = () => {
    if (questionCount >= 10) {
      navigate('/results', { state: { correctCount, questionCount } });
    } else {
      loadQuestion();
    }
  };

  if (loading) return <Loader />; // Show loader while fetching data
  if (error) return <div className="text-red-500 text-center text-lg">{`Error: ${error}`}</div>;
  if (!question) return <div className="text-center text-lg">No question available.</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <QuestionComponent
        question={question}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
        showResult={showResult}
        handleSubmitAnswer={handleSubmitAnswer}
        handleNextQuestion={handleNextQuestion}
      />
    </div>
  );
};

export default QuestionPage;

import React from 'react';
import he from 'he';
import { QuestionProps } from '../types';

const QuestionComponent: React.FC<QuestionProps> = ({
  question,
  userAnswer,
  setUserAnswer,
  showResult,
  handleSubmitAnswer,
  handleNextQuestion
}) => {
  return (
    <div className="text-center m-6 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl mb-6">{he.decode(question.question)}</h2>
      <div className="flex flex-col items-center mb-6">
        {[...question.incorrect_answers, question.correct_answer].sort().map((answer) => (
          <label key={answer} className="mb-2 text-lg flex items-center">
            <input
              type="radio"
              name="answer"
              value={answer}
              checked={userAnswer === answer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={showResult} // Disable options if result is shown
              className="mr-2"
            />
            {he.decode(answer)}
          </label>
        ))}
      </div>
      {!showResult && (
        <button
          onClick={handleSubmitAnswer}
          className="py-2 px-4 bg-teal-500 text-white rounded hover:bg-teal-700"
        >
          Submit
        </button>
      )}
      {showResult && (
        <div className="mt-6 text-lg">
          {userAnswer === question.correct_answer ? (
            <div className="text-green-500">Correct!</div>
          ) : (
            <div className="text-red-500">
              Wrong! The correct answer is: <strong>{he.decode(question.correct_answer)}</strong>
              {question.explanation && (
                <div className="mt-2 text-sm text-gray-600">
                  Explanation: {he.decode(question.explanation)}
                </div>
              )}
            </div>
          )}
        </div>
      )}
      {showResult && (
        <button
          onClick={handleNextQuestion}
          className="mt-4 py-2 px-4 bg-teal-500 text-white rounded hover:bg-teal-700"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default QuestionComponent;

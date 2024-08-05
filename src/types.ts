// src/types.ts
export interface Question {
    explanation: any;
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }
  
  export interface QuestionProps {
    question: Question;
    userAnswer: string | null;
    setUserAnswer: React.Dispatch<React.SetStateAction<string | null>>;
    showResult: boolean;
    handleSubmitAnswer: () => void;
    handleNextQuestion: () => void;
  }
  
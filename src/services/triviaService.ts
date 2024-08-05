// src/services/triviaService.ts
import axios from 'axios';

const fetchQuestionWithRetry = async (retries: number, delay: number): Promise<any> => {
  try {
    const response = await axios.get('https://opentdb.com/api.php?amount=1');
    return response.data.results[0];
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 429 && retries > 0) {
      console.warn(`Rate limit exceeded. Retrying in ${delay} ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return fetchQuestionWithRetry(retries - 1, delay * 2);
    } else {
      console.error('Error fetching question:', error);
      throw error;
    }
  }
};

export const fetchQuestion = async () => {
  return fetchQuestionWithRetry(3, 1000); // 3 retries with an initial delay of 1 second
};

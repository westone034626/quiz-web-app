import axios from 'axios';
import { ServerQuiz } from '../types';

const API_URL = 'https://opentdb.com/api.php?amount=10';

const fetchQuizs = async () => {
    const response = await axios.get<{ results: ServerQuiz[]; }>(API_URL);

    return response.data.results;
};

export default fetchQuizs;
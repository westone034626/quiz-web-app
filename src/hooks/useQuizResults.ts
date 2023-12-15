import { useLocalStorageState } from 'ahooks';
import { QuizResult } from '../types';

const KEY = 'classting-assignment/quiz-results';

function useQuizResults() {
    const [quizResults, setQuizResults] = useLocalStorageState<QuizResult[]>(
        KEY,
        {
            defaultValue: [],
        }
    );

    const addQuizResult = (quizResult: QuizResult) => {
        setQuizResults([quizResult, ...(quizResults ?? [])]);
    };

    const findQuizResult = (id: number) => {
        return quizResults?.find(quizResult => quizResult.id === id);
    };

    return {
        quizResults,
        addQuizResult,
        findQuizResult,
    };
}

export default useQuizResults;

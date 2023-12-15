import { useState } from 'react';
import Quiz from '../components/Quiz';
import useQuizs from '../hooks/useQuizs';

const QuizPage = () => {
    const quizs = useQuizs();

    const activeQuiz = quizs[0];

    const [selectedOption, setSelectedOption] = useState<number>(-1);

    if (!activeQuiz) {
        return 'Loading ...';
    }

    return (
        <>
            <div>QuizPage</div>

            <Quiz
                quiz={activeQuiz}
                selectedOptionIndex={selectedOption}
                onSelectOption={setSelectedOption}
            />
        </>
    );
};

export default QuizPage;
import { useState } from 'react';
import Quiz from '../components/Quiz';
import Button from '../components/Button';
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

            <div className='flex gap-1 justify-center'>
                <Button onClick={() => console.log('정답 확인')}>
                    정답 확인
                </Button>

                <Button onClick={() => console.log('정답 확인')}>
                    다음 문제
                </Button>
            </div>
        </>
    );
};

export default QuizPage;
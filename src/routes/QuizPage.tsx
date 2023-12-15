import { useState } from 'react';
import Quiz from '../components/Quiz';
import Button from '../components/Button';
import useQuizs from '../hooks/useQuizs';
import useQuizsSolvingRecord from '../hooks/useQuizsSolvingRecord';

const QuizPage = () => {
    const quizs = useQuizs();
    const { writeSolvingRecord, confirmSolvingRecord } = useQuizsSolvingRecord(quizs);

    const activeQuiz = quizs[0];

    const [selectedOption, setSelectedOption] = useState<number>(-1);

    const canSubmit = selectedOption > -1;
    const submit = () => {
        writeSolvingRecord(activeQuiz.number, selectedOption);
    };

    const didSubmit = () => {
        const solvingRecord = confirmSolvingRecord(activeQuiz.number);

        return solvingRecord ? solvingRecord.selectedOptionIndex > -1 : false;
    };

    if (!activeQuiz) {
        return 'Loading ...';
    }

    return (
        <>
            <div>QuizPage</div>

            <Quiz
                disabled={didSubmit()}
                quiz={activeQuiz}
                selectedOptionIndex={selectedOption}
                onSelectOption={setSelectedOption}
            />

            <div className='flex gap-1 justify-center'>
                <Button
                    disabled={!canSubmit || didSubmit()}
                    onClick={submit}
                >
                    정답 확인
                </Button>

                <Button
                    disabled={!didSubmit()}
                    onClick={() => console.log('다음 문제')}
                >
                    다음 문제
                </Button>
            </div>
        </>
    );
};

export default QuizPage;
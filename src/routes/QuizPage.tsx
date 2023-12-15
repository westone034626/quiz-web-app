import Quiz from '../components/Quiz';
import Button from '../components/Button';
import useQuizs from '../hooks/useQuizs';
import useQuizsSolvingRecord from '../hooks/useQuizsSolvingRecord';
import useIndex from '../hooks/useIndex';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
    const quizs = useQuizs();

    const { activeIndex, increase, isLast } = useIndex(quizs.length);

    const activeQuiz = quizs[activeIndex];

    const {
        didSubmit,
        submit,
        canSubmit,
        selectedOption,
        setSelectedOption,
        finish,
    } = useQuizsSolvingRecord(quizs, activeQuiz?.number || 0);

    const navigate = useNavigate();
    const handleFinish = () => {
        const resultId = finish();

        navigate(`/quiz/results/${resultId}`);
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

                {!isLast && (
                    <Button
                        disabled={!didSubmit()}
                        onClick={increase}
                    >
                        다음 문제
                    </Button>
                )}

                {isLast && (
                    <Button
                        disabled={!didSubmit()}
                        onClick={handleFinish}
                    >
                        퀴즈 종료
                    </Button>
                )}
            </div>
        </>
    );
};

export default QuizPage;
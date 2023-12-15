import Quiz from '../components/Quiz';
import Button from '../components/Button';
import useQuizs from '../hooks/useQuizs';
import useQuizsSolvingRecord from '../hooks/useQuizsSolvingRecord';
import useIndex from '../hooks/useIndex';

const QuizPage = () => {
    const quizs = useQuizs();

    const { activeIndex, increase, isLast } = useIndex(quizs.length);

    const activeQuiz = quizs[activeIndex];

    const {
        didSubmit,
        submit,
        canSubmit,
        selectedOption,
        setSelectedOption
    } = useQuizsSolvingRecord(quizs, activeQuiz?.number || 0);

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
            </div>
        </>
    );
};

export default QuizPage;
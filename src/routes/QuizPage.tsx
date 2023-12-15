import Quiz from '../components/Quiz';
import useQuizs from '../hooks/useQuizs';

const QuizPage = () => {
    const quizs = useQuizs();

    const activeQuiz = quizs[0];

    return (
        <>
            <div>QuizPage</div>

            {activeQuiz && <Quiz quiz={activeQuiz} />}
        </>
    );
};

export default QuizPage;
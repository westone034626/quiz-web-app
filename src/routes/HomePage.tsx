import { Link } from 'react-router-dom';
import Spacer from '../components/Spacer';
import useQuizResults from '../hooks/useQuizResults';
import VerticalList from '../components/VerticalList';

const HomePage = () => {
    const { quizResults } = useQuizResults();
    return (
        <>
            <h1>HomePage</h1>

            <div className='p-4'>
                <Link to='/quiz'>
                    새로운 퀴즈 풀기
                </Link>
            </div>

            {quizResults!.length > 0 &&
                <div className='p-4'>
                    <h3>퀴즈 결과 목록</h3>

                    <Spacer spacing={3} />

                    <VerticalList
                        data={quizResults!}
                        spacing={1}
                        renderItem={(quizResult) => (
                            <Link to={`/quiz/results/${quizResult.id}`}>{quizResult.id}</Link>
                        )}
                    />
                </div>
            }
        </>
    );
};

export default HomePage;
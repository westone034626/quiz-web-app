import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <Link to='/quiz'>
                퀴즈 풀기
            </Link>
        </>
    );
};

export default HomePage;
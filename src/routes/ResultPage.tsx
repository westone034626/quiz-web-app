import { useParams } from "react-router-dom";
import useQuizResults from "../hooks/useQuizResults";

const ResultPage = () => {
    const { resultId } = useParams<{ resultId: string; }>();

    const { findQuizResult } = useQuizResults();
    const quizResult = findQuizResult(Number(resultId));

    console.log({ quizResult });
    return (
        <div>ResultPage</div>
    );
};

export default ResultPage;
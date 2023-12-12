import axios from 'axios';
import { useEffect, useState } from 'react';

interface Quiz {
    type: "multiple";
    difficulty: "easy" | "medium" | "hard";
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: [string, string, string];
}

const API_URL = 'https://opentdb.com/api.php?amount=10';

const QuizPage = () => {
    const [quizs, setQuizs] = useState<Quiz[]>([]);

    useEffect(() => {
        const loadQuiz = async () => {
            try {
                const data = await axios.get<{ results: Quiz[]; }>(API_URL);

                setQuizs(data.data.results);
            } catch (error) {
                console.log(error);
            }
        };

        loadQuiz();
    }, []);

    return (
        <>
            <div>QuizPage</div>

            <ol>
                {quizs.map(quiz => (
                    <li>{quiz.question}</li>
                ))}
            </ol>
        </>
    );
};

export default QuizPage;
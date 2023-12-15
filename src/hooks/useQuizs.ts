import { useEffect, useState } from 'react';
import fetchQuizs from '../api/fetchQuizs';
import { ClientQuiz, ServerQuiz } from '../types';

type MapServerQuizsToClientQuizs = (serverQuizs: ServerQuiz[]) => ClientQuiz[];

const mapServerQuizsToClientQuizs: MapServerQuizsToClientQuizs = (serverQuizs) => {
    const clientQuizs = serverQuizs.map((serverQuiz, index) => {
        const options = [...serverQuiz.incorrect_answers];
        const correctOptionIndex = Math.floor(Math.random() * (options.length + 1));
        options.splice(correctOptionIndex, 0, serverQuiz.correct_answer);

        return {
            number: index + 1,
            title: serverQuiz.question,
            options,
            correctOptionIndex,
        };
    });

    return clientQuizs;
};

export default function useQuizs() {
    const [quizs, setQuizs] = useState<ClientQuiz[]>([]);

    useEffect(() => {
        const initQuizs = async () => {
            const serverQuizs = await fetchQuizs();
            const clientQuizs = mapServerQuizsToClientQuizs(serverQuizs);
            setQuizs(clientQuizs);
        };

        initQuizs();
    }, [setQuizs]);

    return quizs;
}

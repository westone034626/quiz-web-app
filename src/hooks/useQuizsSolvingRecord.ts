import { useEffect, useState } from "react";
import { ClientQuiz } from "../types";

type UseQuizsSolvingRecord = (quizs: ClientQuiz[]) => {
    confirmSolvingRecord: (quizNumber: number) => { selectedOptionIndex: number, correctOptionIndex: number; } | null;
    writeSolvingRecord: (quizNumber: number, selectedOptionIndex: number) => void;
};

interface QuizSolvingRecord extends ClientQuiz {
    selectedOptionIndex: number;
    note: string;
}

const attachSolvingRecordInfo = (quiz: ClientQuiz) => {
    return {
        ...quiz,
        selectedOptionIndex: -1,
        note: '',
    };
};

const useQuizsSolvingRecord: UseQuizsSolvingRecord = (quizs) => {
    const [quizsSolvingRecord, setQuizsSolvingRecord] = useState<QuizSolvingRecord[]>([]);

    useEffect(() => {
        setQuizsSolvingRecord(quizs.map(attachSolvingRecordInfo));
    }, [quizs]);

    const writeSolvingRecord = (quizNumber: number, selectedOptionIndex: number) => {
        setQuizsSolvingRecord(prev => {
            return prev.map(quizSolvingRecord => quizSolvingRecord.number === quizNumber
                ? { ...quizSolvingRecord, selectedOptionIndex }
                : quizSolvingRecord
            );
        });
    };

    const confirmSolvingRecord = (quizNumber: number) => {
        const targetQuizSolvingRecord = quizsSolvingRecord.find(quizSolvingRecord => quizSolvingRecord.number === quizNumber);

        if (!targetQuizSolvingRecord) {
            return null;
        }

        return {
            selectedOptionIndex: targetQuizSolvingRecord.selectedOptionIndex,
            correctOptionIndex: targetQuizSolvingRecord.correctOptionIndex,
        };
    };

    return { confirmSolvingRecord, writeSolvingRecord };
};

export default useQuizsSolvingRecord;
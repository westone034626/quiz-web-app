import { useEffect, useState } from "react";
import { ClientQuiz } from "../types";

type UseQuizsSolvingRecord = (quizs: ClientQuiz[], activeQuizNumber: number) => {
    canSubmit: boolean;
    didSubmit: () => boolean;
    submit: () => void;
    selectedOption: number;
    setSelectedOption: (index: number) => void;
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

const useQuizsSolvingRecord: UseQuizsSolvingRecord = (quizs, activeQuizNumber) => {
    const [quizsSolvingRecord, setQuizsSolvingRecord] = useState<QuizSolvingRecord[]>([]);
    const [selectedOption, setSelectedOption] = useState(-1);

    useEffect(() => {
        setQuizsSolvingRecord(quizs.map(attachSolvingRecordInfo));
    }, [quizs]);

    useEffect(() => {
        setSelectedOption(-1);
    }, [activeQuizNumber]);

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

    const canSubmit = selectedOption > -1;

    const submit = () => {
        writeSolvingRecord(activeQuizNumber, selectedOption);
    };

    const didSubmit = () => {
        const solvingRecord = confirmSolvingRecord(activeQuizNumber);

        return solvingRecord ? solvingRecord.selectedOptionIndex > -1 : false;
    };

    return { canSubmit, submit, didSubmit, selectedOption, setSelectedOption };
};

export default useQuizsSolvingRecord;
import { useEffect, useState } from "react";
import { ClientQuiz, QuizResult, QuizSolvingRecord } from "../types";
import useTimer from "./useTimer";
import useQuizResults from "./useQuizResults";

type UseQuizsSolvingRecord = (quizs: ClientQuiz[], activeQuizNumber: number) => {
    canSubmit: boolean;
    didSubmit: () => boolean;
    submit: () => void;
    selectedOption: number;
    setSelectedOption: (index: number) => void;
    finish: () => number;
};

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
    const { startTime, stopTime, passedSeconds } = useTimer();
    const { addQuizResult } = useQuizResults();

    useEffect(() => {
        setQuizsSolvingRecord(quizs.map(attachSolvingRecordInfo));
    }, [quizs]);

    useEffect(() => {
        setSelectedOption(-1);
    }, [activeQuizNumber]);

    useEffect(() => {
        startTime();
    }, [startTime]);

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

    const finish = () => {
        const newQuizResult: QuizResult = {
            id: Date.now(),
            passedTimes: passedSeconds,
            quizsSolvingRecord
        };

        addQuizResult(newQuizResult);
        stopTime();

        return newQuizResult.id;
    };

    return { canSubmit, submit, didSubmit, selectedOption, setSelectedOption, finish };
};

export default useQuizsSolvingRecord;
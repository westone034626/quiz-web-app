import { useEffect, useState } from "react";
import { ClientQuiz, QuizResult, QuizSolvingRecord } from "../types";
import useTimer from "./useTimer";
import useQuizResults from "./useQuizResults";

const isNumber = (data: unknown) => typeof data === 'number';

type UseQuizsSolvingRecord = (quizs: ClientQuiz[], activeQuizNumber: number) => {
    canSubmit: boolean;
    didSubmit: () => boolean;
    submit: () => void;
    selectedOption: number;
    setSelectedOption: (index: number) => void;
    finish: () => number;
    writeNote: (note: string) => void;
    getNote: () => string;
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

    const writeSolvingRecord = (quizNumber: number, options: { selectedOptionIndex?: number, note?: string; }) => {
        setQuizsSolvingRecord(prev => {
            return prev.map(quizSolvingRecord => quizSolvingRecord.number === quizNumber
                ? ({
                    ...quizSolvingRecord,
                    ...(isNumber(options.selectedOptionIndex) ? { selectedOptionIndex: options.selectedOptionIndex } : {}),
                    ...(options.note ? { note: options.note } : {}),
                })
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
            note: targetQuizSolvingRecord.note,
        };
    };

    const canSubmit = selectedOption > -1;

    const submit = () => {
        const options = { selectedOptionIndex: selectedOption };

        writeSolvingRecord(activeQuizNumber, options);
    };

    const writeNote = (note: string) => {
        const options = { note };

        writeSolvingRecord(activeQuizNumber, options);
    };

    const didSubmit = () => {
        const solvingRecord = confirmSolvingRecord(activeQuizNumber);

        return solvingRecord ? solvingRecord.selectedOptionIndex > -1 : false;
    };

    const getNote = () => {
        const solvingRecord = confirmSolvingRecord(activeQuizNumber);

        return solvingRecord ? solvingRecord.note : '';
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

    return { canSubmit, submit, didSubmit, selectedOption, setSelectedOption, finish, writeNote, getNote };
};

export default useQuizsSolvingRecord;
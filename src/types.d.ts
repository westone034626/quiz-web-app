import { CSSProperties } from "react";

interface Styles {
    [key: string]: CSSProperties;
}

type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6;

interface ServerQuiz {
    type: "multiple";
    difficulty: "easy" | "medium" | "hard";
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: [string, string, string];
}

interface ClientQuiz {
    number: number;
    options: string[];
    title: string;
    correctOptionIndex: number;
}

export type {
    Styles,
    Spacing,
    ClientQuiz,
    ServerQuiz,
};
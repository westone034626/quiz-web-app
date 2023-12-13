import { CSSProperties } from "react";

interface Styles {
    [key: string]: CSSProperties;
}

type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type {
    Styles,
    Spacing,
};
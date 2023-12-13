import { useLayoutEffect, useRef, CSSProperties } from "react";
import useHeightAndTop from "../hooks/useHeightAndTop";

interface DivProps {
    children: React.ReactNode;
    onUpdateHeight?: (height: number) => void;
    style?: CSSProperties;
}

export default function Div({
    children,
    onUpdateHeight,
    style
}: DivProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { height } = useHeightAndTop(ref);

    useLayoutEffect(() => {
        height && onUpdateHeight?.(height);
    }, [height, onUpdateHeight]);

    return (
        <div
            ref={ref}
            style={style}
        >
            {children}
        </div>
    );
}
import { useState, useLayoutEffect, RefObject } from 'react';

function useHeightAndTop(ref: RefObject<HTMLElement>) {
    const [height, setHeight] = useState<number>();
    const [top, setTop] = useState<number>();

    useLayoutEffect(() => {
        if (ref.current) {
            setHeight(ref.current.clientHeight);

            const rect = ref.current.getBoundingClientRect();
            setTop(rect.top);
        }
    }, [ref, setHeight]);

    return { height, top };
}

export default useHeightAndTop;
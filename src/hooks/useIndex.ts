import React from 'react';

type UseIndex = (itemCount: number) => {
    activeIndex: number,
    setActiveIndex: (activeIndex: number) => void,
    increase: () => void,
    decrease: () => void,
    isFirst: boolean,
    isLast: boolean,
};

const INITIAL_INDEX = 0;

const useIndex: UseIndex = (itemCount) => {
    const [activeIndex, setActiveIndex] = React.useState(INITIAL_INDEX);

    const maxIndex = itemCount - 1;

    const decrease = () => {
        if (activeIndex > INITIAL_INDEX) {
            setActiveIndex((prev) => prev - 1);
        }
    };

    const increase = () => {
        if (activeIndex <= maxIndex) {
            setActiveIndex((prev) => prev + 1);
        }
    };

    const isFirst = activeIndex === INITIAL_INDEX;
    const isLast = activeIndex === maxIndex;

    return { activeIndex, setActiveIndex, increase, decrease, isFirst, isLast };
};

export default useIndex;

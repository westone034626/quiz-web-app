import { useEffect, useRef, useState } from "react";

const SEC = 1000;

const useTimer = () => {
    const timerId = useRef<number>();
    const [passedSeconds, setPassedSeconds] = useState(0);
    const [isStopped, setIsStopped] = useState(true);

    const startTime = () => setIsStopped(false);

    const stopTime = () => setIsStopped(true);

    useEffect(() => {
        if (!isStopped) {
            timerId.current = setInterval(() => {
                setPassedSeconds(passedSeconds + 1);
            }, SEC);
        }

        return () => {
            clearInterval(timerId.current);
        };
    }, [
        isStopped,
        setIsStopped,
        passedSeconds,
        setPassedSeconds,
    ]);

    return { passedSeconds, startTime, stopTime };
};

export default useTimer;
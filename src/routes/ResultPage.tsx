import { useParams } from "react-router-dom";
import useQuizResults from "../hooks/useQuizResults";
import { fontStyleMap } from '../constant';
import Spacer from "../components/Spacer";
import VerticalList from "../components/VerticalList";
import Quiz from "../components/Quiz";

function attachLeadingZero(data: number) {
    return String(data).length >= 2 ? `${data}` : `0${data}`;
}

function convertSecondsToTime(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return {
        hours,
        minutes,
        remainingSeconds,
    };
}

function convertSecondsToString(seconds: number, separator = ':') {
    const { hours, minutes, remainingSeconds } = convertSecondsToTime(seconds);

    const formattedHours = attachLeadingZero(hours);
    const formattedMinutes = attachLeadingZero(minutes);
    const formattedSeconds = attachLeadingZero(remainingSeconds);

    return [formattedHours, formattedMinutes, formattedSeconds].join(separator);
}

const ResultPage = () => {
    const { resultId } = useParams<{ resultId: string; }>();

    const { findQuizResult } = useQuizResults();
    const quizResult = findQuizResult(Number(resultId))!;

    const correctAnswerCount = quizResult.quizsSolvingRecord.filter(record => record.selectedOptionIndex === record.correctOptionIndex).length;
    const incorrectAnswerCount = quizResult.quizsSolvingRecord.length - correctAnswerCount;

    const styles = {
        title: {
            ...fontStyleMap.heading,
        },
        subTitle: {
            ...fontStyleMap.thirdHeading,
        },
    };
    return (
        <>
            <h1>ResultPage</h1>

            <div className="p-4">
                <span style={styles.subTitle}>{`id: ${quizResult.id}`}</span>

                <Spacer spacing={1} />

                <span style={styles.subTitle}>{`소요 시간: ${convertSecondsToString(quizResult.passedTimes)}`}</span>

                <Spacer spacing={1} />

                <span style={styles.subTitle}>{`정답 수: ${correctAnswerCount}`}</span>

                <Spacer spacing={1} />

                <span style={styles.subTitle}>{`오답 수: ${incorrectAnswerCount}`}</span>

                <Spacer spacing={4} />

                <span style={styles.subTitle}>풀이기록</span>
                <VerticalList
                    spacing={1}
                    data={quizResult.quizsSolvingRecord}
                    renderItem={(record) => (
                        <Quiz
                            quiz={record}
                            disabled={true}
                            selectedOptionIndex={record.selectedOptionIndex}
                        />
                    )}
                />
            </div>
        </>
    );
};

export default ResultPage;
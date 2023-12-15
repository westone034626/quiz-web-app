import Option from './Option';
import Title from './Title';
import Spacer from '../Spacer';
import VerticalList from '../VerticalList';
import type { ClientQuiz, Styles } from '../../types';


interface QuizProps {
    quiz: ClientQuiz;
    onSelectOption?: (index: number) => void;
    selectedOptionIndex?: number;
    disabled?: boolean;
}

function Quiz({ disabled = false, quiz, onSelectOption, selectedOptionIndex }: QuizProps) {
    const styles: Styles = {
        container: {
            padding: 16,
            flex: 1,
        },
        titleContainer: {
            display: 'flex',
            flexDirection: 'row',
            minWidth: 0,
        },
        list: {
            marginBottom: 'auto',
        },
    };

    const renderOptionItem = (option: string, index: number) => {
        const selected = index === selectedOptionIndex;

        const handleSelectOption = () => {
            if (typeof onSelectOption === 'function') {
                onSelectOption(selected ? -1 : index);
            }
        };

        return (
            <Option
                option={option}
                index={index}
                onClick={onSelectOption ? handleSelectOption : undefined}
                selected={selected}
                disabled={disabled}
            />
        );
    };

    return (
        <div style={styles.container}>
            <div style={styles.titleContainer}>
                <span style={styles.numberFont}>
                    {`${quiz.number}. `}
                </span>

                <Spacer spacing={2} />

                <Title title={quiz.title} />
            </div>

            <Spacer spacing={5} />

            <VerticalList<string>
                data={quiz.options}
                renderItem={renderOptionItem}
                spacing={2}
                style={styles.list}
            />

            {disabled && (
                <>
                    <Spacer spacing={5} />

                    <div style={styles.rightAnswerContainer}>
                        <span style={styles.rightAnswer}>{`정답: ${quiz.correctOptionIndex + 1}`}</span>
                    </div>
                </>
            )}
        </div>
    );
}

export default Quiz;
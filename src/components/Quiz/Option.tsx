import { CSSProperties } from 'react';
import One from '../../assets/icons/number_one.webp';
import Two from '../../assets/icons/number_two.webp';
import Three from '../../assets/icons/number_three.webp';
import Four from '../../assets/icons/number_four.webp';
import { SHAPE_COLOR_MAP } from '../../constant';
import Button from '../Button';
import Div from '../Div';
import Spacer from '../Spacer';

interface OptionProps {
    disabled: boolean;
    option: string;
    index: number;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    selected: boolean;
}

interface Styles {
    [key: string]: CSSProperties;
}

const findNumberImage = (index: number) => {
    return index === 0
        ? One
        : index === 1
            ? Two
            : index === 2
                ? Three
                : Four;
};

function Number({ index, selected }: { index: number, selected: boolean; }) {
    const styles = {
        notSelected: { width: '1rem', height: '1rem' },
        selected: {
            width: '1rem',
            height: '1rem',
            backgroundColor: SHAPE_COLOR_MAP.dark,
            borderRadius: '100%'
        },
    };

    return selected ? (
        <div style={styles.selected}></div>
    ) : (
        <img
            src={findNumberImage(index)}
            style={styles.notSelected}
            alt={`객관식 숫자 기호 - ${index + 1}번`}
            draggable="false"
        />
    );
}

function Option({
    disabled,
    option,
    index,
    onClick,
    selected
}: OptionProps) {
    const styles: Styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            width: '100%',
            maxWidth: '100%',
            padding: '12px',
        },
        numberContainer: {
            borderRadius: '50%',
            border: '1px solid black',
            boxSizing: 'border-box',
            width: '1rem',
            height: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0,
            position: 'relative',
        },
        number: {
            position: 'absolute',
            bottom: -2,
        },
        text: {
            minWidth: 0,
            flex: 1,
            textAlign: 'left',
            wordBreak: 'keep-all',
            wordWrap: 'break-word',
            lineHeight: '1rem',
        },
    };

    const Component = onClick ? Button : Div;

    return (
        <Component
            disabled={disabled}
            style={styles.container}
            onClick={onClick}
        >
            <Number
                index={index}
                selected={selected}
            />

            <Spacer spacing={1} />

            <p style={styles.text}>
                {option}
            </p>
        </Component>
    );
}

export default Option;
import React, { CSSProperties } from 'react';
import splitEvery from 'ramda/es/splitEvery';
import type { Spacing, Styles } from '../types';

interface VerticalListProps<T> {
    data: T[];
    renderItem: (data: T, index: number) => React.ReactNode;
    spacing?: Spacing;
    numColumns?: number;
    style?: CSSProperties;
}

function VerticalList<T>({
    data,
    renderItem,
    spacing = 0,
    numColumns = 1,
    style = {}
}: VerticalListProps<T>) {
    const gap = spacing * 4;
    const columnWidth = `${100 / numColumns}%`;

    const styles: Styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap,
            ...style,
        },
        row: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            gap,
        },
        column: {
            width: columnWidth,
        }
    };

    const renderRow = (row: unknown[], rowIndex: number) => {
        const rowWithPlaceholder = [...row, ...Array(numColumns - row.length).fill(null)];

        return (
            <li
                key={rowIndex}
                style={styles.row}
            >
                {rowWithPlaceholder.map((column, columnIndex) => (
                    <div
                        key={columnIndex}
                        style={styles.column}
                    >
                        {column ? renderItem(column, (numColumns * rowIndex) + columnIndex) : column}
                    </div>
                ))}
            </li>
        );
    };

    const rows = splitEvery(numColumns, data);

    return (
        <ul style={styles.container}>
            {rows.map(renderRow)}
        </ul>
    );
}

export default VerticalList;
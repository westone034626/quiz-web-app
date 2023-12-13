import React, { CSSProperties } from "react";
import { Styles } from '../types';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled: boolean;
    style?: CSSProperties;
}

function Button({ children, onClick, disabled, style }: ButtonProps) {
    const styles: Styles = {
        disabled: {
            cursor: 'not-allowed',
            opacity: 0.1,
        },
    };

    const buttonStyle = {
        ...style,
        ...(disabled ? styles.disabled : {}),
    };

    return (
        <button
            onClick={onClick}
            style={buttonStyle}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
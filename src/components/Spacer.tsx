import type { Spacing } from '../types';

interface SpacerProps {
    spacing: Spacing;
}

function Spacer({ spacing }: SpacerProps) {
    const calculatedPadding = spacing * 4;

    return <div style={{ padding: calculatedPadding / 2 }}></div>;
}

export default Spacer;
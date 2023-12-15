import { Styles } from '../../types';

interface TitleProps {
    title: string;
}

export default function Title({ title }: TitleProps) {
    const styles: Styles = {
        container: {},
        text: {
            flex: 1,
            flexShrink: 0,
            wordBreak: 'keep-all',
            wordWrap: 'break-word',
        }
    };

    return (
        <div style={styles.container}>
            <p style={styles.text}>
                {title}
            </p>
        </div>
    );
}
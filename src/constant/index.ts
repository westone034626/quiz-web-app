const MAX_MOBILE_WIDTH = 721;

const FONT_WEIGHT_MAP = {
    accent: 700,
    button: 600,
    bold: 600,
    normal: 500,
    thin: 400,
    badge: 400,
};

const FONT_SIZE_MAP = {
    heading: '20px',
    subHeding: '18px',
    thirdHeding: '16px',
    normal: '14px',
    subInfo: '13px',
    badge: '12px',
};

const FONT_COLOR_MAP = {
    normal: '#333333',
    subInfo: '#767676',
    accent: '#3366FF',
    badge: '#999999',
    white: '#FFFFFF',
    danger: '#F1415C',
};

const fontStyleMap = {
    heading: {
        fontWeight: FONT_WEIGHT_MAP.accent,
        fontSize: FONT_SIZE_MAP.heading,
        color: FONT_COLOR_MAP.normal,
    },
    subHeading: {
        fontWeight: FONT_WEIGHT_MAP.accent,
        fontSize: FONT_SIZE_MAP.subHeding,
        color: FONT_COLOR_MAP.normal,
    },
    thirdHeading: {
        fontWeight: FONT_WEIGHT_MAP.accent,
        fontSize: FONT_SIZE_MAP.thirdHeding,
        color: FONT_COLOR_MAP.normal,
    },
    button: {
        fontWeight: FONT_WEIGHT_MAP.button,
        fontSize: FONT_SIZE_MAP.normal,
        color: FONT_COLOR_MAP.accent,
    },
    bold: {
        fontWeight: FONT_WEIGHT_MAP.bold,
        fontSize: FONT_SIZE_MAP.normal,
        color: FONT_COLOR_MAP.normal,
    },
    normal: {
        fontWeight: FONT_WEIGHT_MAP.normal,
        fontSize: FONT_SIZE_MAP.normal,
        color: FONT_COLOR_MAP.normal,
    },
    thin: {
        fontWeight: FONT_WEIGHT_MAP.thin,
        fontSize: FONT_SIZE_MAP.normal,
        color: FONT_COLOR_MAP.normal,
    },
    subInfo: {
        fontWeight: FONT_WEIGHT_MAP.normal,
        fontSize: FONT_SIZE_MAP.subInfo,
        color: FONT_COLOR_MAP.subInfo,
    },
    badge: {
        fontWeight: FONT_WEIGHT_MAP.badge,
        fontSize: FONT_SIZE_MAP.badge,
        color: FONT_COLOR_MAP.badge,
    }
};

const SHAPE_COLOR_MAP = {
    normal: '#70737c0d',
    dark: '#333333',
    white: '#FFFFFF',
    accent: '#3366FF',
};

const SHAPE_BORDER_MAP = {
    normal: '1px solid #E1E2E3',
    normalButtonOutlined: '1px solid #333333',
    buttonOutlined: '1px solid #3366FF',
};

const SHAPE_ROUNDESS_MAP = {
    normal: '4px',
    button: '50%',
};

const shapeStyleMap = {
    normal: {
        backgroundColor: SHAPE_COLOR_MAP.normal,
        borderRadius: SHAPE_ROUNDESS_MAP.normal,
    },
    normalOutlined: {
        backgroundColor: SHAPE_COLOR_MAP.white,
        border: SHAPE_BORDER_MAP.normal,
        borderRadius: SHAPE_ROUNDESS_MAP.normal,
    },
    normalButton: {
        backgroundColor: SHAPE_COLOR_MAP.dark,
        borderRadius: SHAPE_ROUNDESS_MAP.normal,
    },
    normalButtonOutlined: {
        backgroundColor: SHAPE_COLOR_MAP.white,
        borderRadius: SHAPE_ROUNDESS_MAP.normal,
        border: SHAPE_BORDER_MAP.normalButtonOutlined,
    },
    accentButton: {
        backgroundColor: SHAPE_COLOR_MAP.accent,
        borderRadius: SHAPE_ROUNDESS_MAP.normal,
    },
    accentButtonOutlined: {
        backgroundColor: SHAPE_COLOR_MAP.white,
        border: SHAPE_BORDER_MAP.buttonOutlined,
        borderRadius: SHAPE_ROUNDESS_MAP.normal,
    }
};

const BORDER_COLOR_MAP = {
    normal: '#E1E2E3',
};

export {
    MAX_MOBILE_WIDTH,
    BORDER_COLOR_MAP,
    FONT_WEIGHT_MAP,
    FONT_SIZE_MAP,
    FONT_COLOR_MAP,
    fontStyleMap,
    shapeStyleMap,
    SHAPE_COLOR_MAP,
};
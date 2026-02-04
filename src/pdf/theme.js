import { Font } from '@react-pdf/renderer';

// Register Rubik font for Hebrew support
Font.register({
    family: 'Rubik',
    fonts: [
        { src: '/assets/fonts/Rubik-Regular.ttf' },
        { src: '/assets/fonts/Rubik-Bold.ttf', fontWeight: 700 }
    ]
});

export const theme = {
    colors: {
        magenta: '#D44D8C', // Primary Brand Color
        green: '#2D6A4F',   // Secondary Brand Color
        sage: '#E8F3E8',    // Background/Accent
        sand: '#FDFBF7',    // Paper Background
        graphite: '#1F2937', // Text
        white: '#FFFFFF'
    },
    fonts: {
        body: 'Rubik',
        display: 'Rubik'
    }
};

export const styles = {
    page: {
        backgroundColor: theme.colors.sand,
        paddingTop: 40,
        paddingBottom: 60,
        paddingHorizontal: 40,
        fontFamily: theme.fonts.body,
        color: theme.colors.graphite,
    },
    header: {
        fontSize: 24,
        fontWeight: 700,
        color: theme.colors.green,
        marginBottom: 20,
        textAlign: 'center',
    },
    subHeader: {
        fontSize: 18,
        fontWeight: 700,
        color: theme.colors.magenta,
        marginTop: 15,
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
        lineHeight: 1.5,
        marginBottom: 10,
    },
    accent: {
        color: theme.colors.magenta,
    }
};

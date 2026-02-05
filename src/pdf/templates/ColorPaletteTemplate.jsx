import React from 'react';
import { Document, Text, View, StyleSheet } from '@react-pdf/renderer';
import { theme } from '../theme';
import BrandedPage from '../components/BrandedPage';

const styles = StyleSheet.create({
    titleSection: {
        marginBottom: 25,
        textAlign: 'center',
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: 700,
        color: theme.colors.green,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 12,
        color: theme.colors.graphite,
        opacity: 0.7,
    },
    intro: {
        fontSize: 10,
        color: theme.colors.graphite,
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 40,
        lineHeight: 1.5,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 700,
        color: theme.colors.magenta,
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.sage,
        borderBottomStyle: 'dotted',
        paddingBottom: 6,
    },
    colorGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 25,
    },
    colorSwatch: {
        width: '30%',
        marginBottom: 8,
    },
    colorBox: {
        height: 50,
        borderRadius: 4,
        marginBottom: 6,
        borderWidth: 1,
        borderColor: theme.colors.sage,
        borderStyle: 'solid',
    },
    colorName: {
        fontSize: 11,
        fontWeight: 700,
        color: theme.colors.graphite,
        marginBottom: 2,
    },
    colorHex: {
        fontSize: 9,
        fontFamily: 'Courier',
        color: theme.colors.graphite,
        marginBottom: 1,
    },
    colorRgb: {
        fontSize: 8,
        color: theme.colors.graphite,
        opacity: 0.6,
        marginBottom: 1,
    },
    colorUsage: {
        fontSize: 8,
        color: theme.colors.magenta,
        marginTop: 2,
    },
    secondaryGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    secondarySwatch: {
        width: '18%',
    },
    secondaryBox: {
        height: 35,
        borderRadius: 3,
        marginBottom: 4,
        borderWidth: 1,
        borderColor: theme.colors.sage,
        borderStyle: 'solid',
    },
    secondaryName: {
        fontSize: 9,
        fontWeight: 700,
        color: theme.colors.graphite,
    },
    secondaryHex: {
        fontSize: 8,
        fontFamily: 'Courier',
        color: theme.colors.graphite,
        opacity: 0.8,
    },
    footer: {
        marginTop: 'auto',
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: theme.colors.sage,
        borderTopStyle: 'solid',
    },
    footerNote: {
        fontSize: 8,
        color: theme.colors.graphite,
        opacity: 0.6,
        textAlign: 'center',
    }
});

const ColorSwatch = ({ color, language, isSecondary = false }) => {
    const t = (obj) => obj[language] || obj['en'];

    if (isSecondary) {
        return (
            <View style={styles.secondarySwatch}>
                <View style={[styles.secondaryBox, { backgroundColor: color.hex }]} />
                <Text style={styles.secondaryName}>{color.name}</Text>
                <Text style={styles.secondaryHex}>{color.hex}</Text>
            </View>
        );
    }

    return (
        <View style={styles.colorSwatch}>
            <View style={[styles.colorBox, { backgroundColor: color.hex }]} />
            <Text style={styles.colorName}>{color.name}</Text>
            <Text style={styles.colorHex}>{color.hex}</Text>
            <Text style={styles.colorRgb}>{color.rgb}</Text>
            <Text style={styles.colorUsage}>{t(color.usage)}</Text>
        </View>
    );
};

const ColorPaletteTemplate = ({ data, language = 'en' }) => {
    const t = (obj) => obj[language] || obj['en'];

    return (
        <Document>
            <BrandedPage>
                {/* Title Section */}
                <View style={styles.titleSection}>
                    <Text style={styles.mainTitle}>{t(data.title)}</Text>
                    <Text style={styles.subtitle}>{t(data.subtitle)}</Text>
                </View>

                {/* Intro */}
                <Text style={styles.intro}>{t(data.intro)}</Text>

                {/* Primary Colors */}
                <Text style={styles.sectionTitle}>
                    {language === 'he' ? 'צבעים ראשיים' : 'Primary Colors'}
                </Text>
                <View style={styles.colorGrid}>
                    {data.primaryColors.map((color) => (
                        <ColorSwatch key={color.name} color={color} language={language} />
                    ))}
                </View>

                {/* Secondary Colors */}
                <Text style={styles.sectionTitle}>
                    {language === 'he' ? 'צבעים משניים' : 'Secondary Colors'}
                </Text>
                <View style={styles.secondaryGrid}>
                    {data.secondaryColors.map((color) => (
                        <ColorSwatch key={color.name} color={color} language={language} isSecondary />
                    ))}
                </View>

                {/* Footer Note */}
                <View style={styles.footer}>
                    <Text style={styles.footerNote}>
                        {language === 'he'
                            ? 'לקבלת קודי CMYK לדפוס, אנא פנו לצוות העיצוב שלנו.'
                            : 'For CMYK print codes, please contact our design team.'}
                    </Text>
                </View>
            </BrandedPage>
        </Document>
    );
};

export default ColorPaletteTemplate;

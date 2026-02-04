import React from 'react';
import { Text, View, StyleSheet, Document } from '@react-pdf/renderer';
import { theme } from '../theme';
import BrandedPage from '../components/BrandedPage';
import SectionHeader from '../components/SectionHeader';
import InfoBlock from '../components/InfoBlock';

const styles = StyleSheet.create({
    titlePage: {
        marginBottom: 30,
        alignItems: 'center',
        textAlign: 'center',
    },
    mainTitle: {
        fontSize: 32,
        fontWeight: 700,
        color: theme.colors.green,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: theme.colors.magenta,
        marginBottom: 20,
    },
    introBox: {
        padding: 15,
        backgroundColor: theme.colors.sage,
        marginBottom: 20,
        borderRadius: 4,
    },
    introText: {
        fontSize: 11,
        color: theme.colors.graphite,
        lineHeight: 1.5,
    },
    section: {
        marginBottom: 15,
    },
    sectionContent: {
        fontSize: 11,
        marginBottom: 10,
        lineHeight: 1.5,
    },
    tipsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    tipWrapper: {
        width: '100%',
    },
    didYouKnow: {
        marginTop: 20,
        padding: 15,
        borderWidth: 1,
        borderColor: theme.colors.magenta,
        borderRadius: 4,
        borderStyle: 'dashed',
    }
});

const GuideTemplate = ({ data, language = 'en' }) => {
    const isRTL = language === 'he';
    const t = (obj) => obj[language] || obj['en'];

    // We might need specific RTL handling for text direction if Heebo doesn't solve it automatically.
    // react-pdf has limited RTL support. Usually, we need to reverse words or use a specific plugin.
    // For this MVP, we will rely on the font and basic direction. 
    // If strict RTL is needed, we'd use `style={{ direction: 'rtl' }}` which react-pdf supports partially.

    return (
        <Document>
            <BrandedPage>
                {/* Title Section */}
                <View style={styles.titlePage}>
                    <Text style={styles.mainTitle}>{t(data.title)}</Text>
                    <Text style={styles.subtitle}>{t(data.subtitle)}</Text>
                </View>

                {/* Intro */}
                <View style={styles.introBox}>
                    <Text style={styles.introText}>{t(data.intro)}</Text>
                </View>

                {/* Sections */}
                {data.sections.map((section, index) => (
                    <View key={section.id} style={styles.section} break={index > 0}>
                        <SectionHeader number={index + 1} title={t(section.title)} />

                        <Text style={styles.sectionContent}>
                            {t(section.content)}
                        </Text>

                        <View style={styles.tipsGrid}>
                            {section.tips.map((tip, i) => (
                                <View key={i} style={styles.tipWrapper}>
                                    <InfoBlock
                                        title={t(tip.title)}
                                        text={t(tip.text)}
                                        icon={tip.icon}
                                    />
                                </View>
                            ))}
                        </View>
                    </View>
                ))}

                {/* Facts */}
                {data.didYouKnow && (
                    <View style={styles.didYouKnow} break={false}>
                        <Text style={{ ...styles.subtitle, fontSize: 14, marginBottom: 10 }}>
                            {t(data.didYouKnow.title)}
                        </Text>
                        {data.didYouKnow.facts.map((fact, i) => (
                            <View key={i} style={{ flexDirection: 'row', marginBottom: 5 }}>
                                <Text style={{ marginRight: 5, color: theme.colors.magenta }}>•</Text>
                                <Text style={{ fontSize: 10 }}>{t(fact)}</Text>
                            </View>
                        ))}
                    </View>
                )}
            </BrandedPage>
        </Document>
    );


};

export default GuideTemplate;

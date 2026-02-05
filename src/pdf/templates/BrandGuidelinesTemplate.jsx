import React from 'react';
import { Document, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { theme } from '../theme';
import BrandedPage from '../components/BrandedPage';
import SectionHeader from '../components/SectionHeader';
import logo from '../../assets/logo.png';

const styles = StyleSheet.create({
    coverPage: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        textAlign: 'center',
    },
    coverLogo: {
        width: 120,
        height: 120,
        marginBottom: 30,
    },
    coverTitle: {
        fontSize: 36,
        fontWeight: 700,
        color: theme.colors.green,
        marginBottom: 12,
    },
    coverSubtitle: {
        fontSize: 14,
        color: theme.colors.magenta,
        marginBottom: 30,
    },
    coverTagline: {
        fontSize: 11,
        color: theme.colors.graphite,
        opacity: 0.6,
        fontStyle: 'italic',
    },
    sectionContent: {
        fontSize: 11,
        lineHeight: 1.6,
        color: theme.colors.graphite,
        marginBottom: 15,
    },
    factGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginTop: 10,
    },
    factItem: {
        width: '48%',
        backgroundColor: theme.colors.sage,
        padding: 10,
        borderRadius: 4,
        marginBottom: 5,
    },
    factLabel: {
        fontSize: 9,
        color: theme.colors.graphite,
        opacity: 0.6,
        marginBottom: 2,
    },
    factValue: {
        fontSize: 11,
        fontWeight: 700,
        color: theme.colors.green,
    },
    guidelineBox: {
        marginTop: 10,
        marginBottom: 10,
    },
    guidelineTitle: {
        fontSize: 11,
        fontWeight: 700,
        marginBottom: 6,
    },
    doTitle: {
        color: theme.colors.green,
    },
    dontTitle: {
        color: theme.colors.magenta,
    },
    guidelineList: {
        paddingLeft: 10,
    },
    guidelineItem: {
        fontSize: 10,
        lineHeight: 1.5,
        color: theme.colors.graphite,
        marginBottom: 3,
        flexDirection: 'row',
    },
    bullet: {
        marginRight: 6,
    },
    fontGrid: {
        marginTop: 10,
    },
    fontItem: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.sage,
        borderBottomStyle: 'solid',
        paddingVertical: 8,
        alignItems: 'center',
    },
    fontName: {
        fontSize: 14,
        fontWeight: 700,
        color: theme.colors.graphite,
        width: '30%',
    },
    fontUsage: {
        fontSize: 10,
        color: theme.colors.graphite,
        width: '35%',
    },
    fontStyle: {
        fontSize: 9,
        color: theme.colors.magenta,
        width: '35%',
    },
    colorPreview: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 10,
    },
    miniSwatch: {
        width: '23%',
        alignItems: 'center',
    },
    miniColorBox: {
        width: 40,
        height: 40,
        borderRadius: 4,
        marginBottom: 4,
        borderWidth: 1,
        borderColor: theme.colors.sage,
        borderStyle: 'solid',
    },
    miniColorName: {
        fontSize: 8,
        fontWeight: 700,
        color: theme.colors.graphite,
    },
    miniColorHex: {
        fontSize: 7,
        color: theme.colors.graphite,
        opacity: 0.7,
    },
    imageryList: {
        marginTop: 10,
    },
    imageryItem: {
        flexDirection: 'row',
        marginBottom: 6,
        alignItems: 'flex-start',
    },
    imageryBullet: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: theme.colors.green,
        marginRight: 8,
        marginTop: 4,
    },
    imageryText: {
        fontSize: 10,
        lineHeight: 1.5,
        color: theme.colors.graphite,
        flex: 1,
    },
    contactBox: {
        marginTop: 20,
        padding: 15,
        backgroundColor: theme.colors.sage,
        borderRadius: 4,
        alignItems: 'center',
    },
    contactTitle: {
        fontSize: 11,
        fontWeight: 700,
        color: theme.colors.graphite,
        marginBottom: 5,
    },
    contactEmail: {
        fontSize: 12,
        color: theme.colors.magenta,
    }
});

const brandColors = [
    { name: 'Green', hex: '#1D7C5A' },
    { name: 'Magenta', hex: '#FF2D7A' },
    { name: 'Graphite', hex: '#111111' },
    { name: 'Sand', hex: '#E8DFD0' },
    { name: 'Paper', hex: '#F3F1EA' },
    { name: 'Sage', hex: '#7A9E7E' },
    { name: 'Gray', hex: '#C7C2B6' },
    { name: 'Blue', hex: '#2F6BFF' },
];

const BrandGuidelinesTemplate = ({ data, language = 'en' }) => {
    const t = (obj) => obj?.[language] || obj?.['en'] || obj;
    const aboutSection = data.sections.find(s => s.id === 'about');
    const logoSection = data.sections.find(s => s.id === 'logo');
    const typographySection = data.sections.find(s => s.id === 'typography');
    const colorsSection = data.sections.find(s => s.id === 'colors');
    const imagerySection = data.sections.find(s => s.id === 'imagery');

    return (
        <Document>
            {/* Cover Page */}
            <BrandedPage>
                <View style={styles.coverPage}>
                    <Image src={logo} style={styles.coverLogo} />
                    <Text style={styles.coverTitle}>{t(data.title)}</Text>
                    <Text style={styles.coverSubtitle}>{t(data.subtitle)}</Text>
                    <Text style={styles.coverTagline}>
                        {language === 'he' ? 'הופכים את הבלתי נראה לנראה' : 'Making the invisible visible'}
                    </Text>
                </View>
            </BrandedPage>

            {/* About Page */}
            {aboutSection && (
                <BrandedPage>
                    <SectionHeader number={1} title={t(aboutSection.title)} />
                    <Text style={styles.sectionContent}>{t(aboutSection.content)}</Text>

                    {aboutSection.facts && (
                        <View style={styles.factGrid}>
                            {aboutSection.facts.map((fact, i) => (
                                <View key={i} style={styles.factItem}>
                                    <Text style={styles.factLabel}>{t(fact.label)}</Text>
                                    <Text style={styles.factValue}>{t(fact.value)}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </BrandedPage>
            )}

            {/* Logo Usage Page */}
            {logoSection && (
                <BrandedPage>
                    <SectionHeader number={2} title={t(logoSection.title)} />
                    <Text style={styles.sectionContent}>{t(logoSection.content)}</Text>

                    {logoSection.guidelines?.map((guideline, i) => (
                        <View key={i} style={styles.guidelineBox}>
                            <Text style={[
                                styles.guidelineTitle,
                                guideline.type === 'do' ? styles.doTitle : styles.dontTitle
                            ]}>
                                {guideline.type === 'do'
                                    ? (language === 'he' ? 'מומלץ' : 'Do')
                                    : (language === 'he' ? 'לא מומלץ' : "Don't")}
                            </Text>
                            <View style={styles.guidelineList}>
                                {t(guideline.items).map((item, j) => (
                                    <View key={j} style={styles.guidelineItem}>
                                        <Text style={styles.bullet}>
                                            {guideline.type === 'do' ? '✓' : '✗'}
                                        </Text>
                                        <Text>{item}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </BrandedPage>
            )}

            {/* Typography Page */}
            {typographySection && (
                <BrandedPage>
                    <SectionHeader number={3} title={t(typographySection.title)} />
                    <Text style={styles.sectionContent}>{t(typographySection.content)}</Text>

                    <View style={styles.fontGrid}>
                        {typographySection.fonts?.map((font, i) => (
                            <View key={i} style={styles.fontItem}>
                                <Text style={styles.fontName}>{font.name}</Text>
                                <Text style={styles.fontUsage}>{t(font.usage)}</Text>
                                <Text style={styles.fontStyle}>{t(font.style)}</Text>
                            </View>
                        ))}
                    </View>
                </BrandedPage>
            )}

            {/* Colors Page */}
            {colorsSection && (
                <BrandedPage>
                    <SectionHeader number={4} title={t(colorsSection.title)} />
                    <Text style={styles.sectionContent}>{t(colorsSection.content)}</Text>

                    <View style={styles.colorPreview}>
                        {brandColors.map((color) => (
                            <View key={color.name} style={styles.miniSwatch}>
                                <View style={[styles.miniColorBox, { backgroundColor: color.hex }]} />
                                <Text style={styles.miniColorName}>{color.name}</Text>
                                <Text style={styles.miniColorHex}>{color.hex}</Text>
                            </View>
                        ))}
                    </View>
                </BrandedPage>
            )}

            {/* Imagery Page */}
            {imagerySection && (
                <BrandedPage>
                    <SectionHeader number={5} title={t(imagerySection.title)} />
                    <Text style={styles.sectionContent}>{t(imagerySection.content)}</Text>

                    <View style={styles.imageryList}>
                        {t(imagerySection.guidelines)?.map((item, i) => (
                            <View key={i} style={styles.imageryItem}>
                                <View style={styles.imageryBullet} />
                                <Text style={styles.imageryText}>{item}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Contact Info */}
                    <View style={styles.contactBox}>
                        <Text style={styles.contactTitle}>
                            {language === 'he' ? 'שאלות? צרו קשר' : 'Questions? Contact us'}
                        </Text>
                        <Text style={styles.contactEmail}>{data.contact?.email}</Text>
                    </View>
                </BrandedPage>
            )}
        </Document>
    );
};

export default BrandGuidelinesTemplate;

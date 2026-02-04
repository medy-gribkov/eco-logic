import React from 'react';
import { Page, Text, View, Image, StyleSheet, Link } from '@react-pdf/renderer';
import { theme } from '../theme';

const styles = StyleSheet.create({
    page: {
        backgroundColor: theme.colors.paper,
        fontFamily: theme.fonts.body,
        paddingBottom: 60, // Space for footer
        position: 'relative',
    },
    topStrip: {
        flexDirection: 'row',
        height: 6,
        width: '100%',
    },
    stripMagenta: {
        backgroundColor: theme.colors.magenta,
        flex: 1,
    },
    stripGreen: {
        backgroundColor: theme.colors.green,
        flex: 1,
    },
    stripSand: {
        backgroundColor: theme.colors.sage,
        flex: 1,
    },
    header: {
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.sage,
        borderBottomStyle: 'solid',
    },
    brandName: {
        fontSize: 20,
        fontWeight: 700,
        color: theme.colors.green,
        textTransform: 'uppercase',
    },
    brandTagline: {
        fontSize: 10,
        color: theme.colors.graphite,
        opacity: 0.6,
    },
    content: {
        padding: 30,
        flex: 1,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 40,
        backgroundColor: theme.colors.sand,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    footerText: {
        fontSize: 9,
        color: theme.colors.graphite,
        opacity: 0.7,
    },
    link: {
        color: theme.colors.magenta,
        textDecoration: 'none',
    },
    watermark: {
        position: 'absolute',
        bottom: 100,
        right: 0,
        width: 300,
        height: 300,
        opacity: 0.03,
        transform: 'rotate(-10deg)',
    }
});

import logo from '../../assets/logo.png';

// ... styles ...

const BrandedPage = ({ children, style }) => {
    return (
        <Page size="A4" style={[styles.page, style]}>
            {/* Top Brand Strip */}
            <View style={styles.topStrip}>
                <View style={styles.stripGreen} />
                <View style={styles.stripMagenta} />
                <View style={styles.stripSand} />
            </View>

            {/* Header / Logo */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.brandName}>EcoLogic</Text>
                    <Text style={styles.brandTagline}>Making the invisible visible</Text>
                </View>
                <Image src={logo} style={{ width: 40, height: 40 }} />
            </View>

            {/* Main Content */}
            <View style={styles.content}>
                {children}
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    © {new Date().getFullYear()} EcoLogic - Environmental Education
                </Text>
                <Text style={styles.footerText} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
                <Link src="https://ecologic.org.il" style={[styles.footerText, styles.link]}>
                    www.ecologic.org.il
                </Link>
            </View>
        </Page>
    );
};

export default BrandedPage;

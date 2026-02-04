import React from 'react';
import { Text, View, StyleSheet, Page } from '@react-pdf/renderer';
import { theme } from '../theme';

const styles = StyleSheet.create({
    page: {
        backgroundColor: theme.colors.paper,
        fontFamily: theme.fonts.body,
        padding: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: `10px solid ${theme.colors.green}`,
    },
    borderInner: {
        width: '100%',
        height: '100%',
        border: `2px solid ${theme.colors.magenta}`,
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        fontSize: 40,
        color: theme.colors.green,
        fontWeight: 700,
        textTransform: 'uppercase',
        marginTop: 20,
    },
    subHeader: {
        fontSize: 14,
        color: theme.colors.graphite,
        marginBottom: 30,
        letterSpacing: 2,
    },
    presentedTo: {
        fontSize: 16,
        color: theme.colors.graphite,
        marginBottom: 10,
    },
    recipientName: {
        fontSize: 36,
        color: theme.colors.magenta,
        textDecoration: 'underline',
        marginBottom: 20,
    },
    forCompletion: {
        fontSize: 16,
        color: theme.colors.graphite,
        textAlign: 'center',
        marginBottom: 10,
    },
    courseName: {
        fontSize: 24,
        color: theme.colors.graphite,
        fontWeight: 700,
        marginBottom: 40,
    },
    footerData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 40,
    },
    signatureLine: {
        borderTopWidth: 1,
        borderTopColor: theme.colors.graphite,
        width: 200,
        paddingTop: 5,
        alignItems: 'center',
    },
    signatureText: {
        fontSize: 10,
        color: theme.colors.graphite,
    },
    seal: {
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        opacity: 0.1,
        fontSize: 100,
    }
});

const CertificateTemplate = ({ recipientName, courseName, date, language = 'en' }) => {
    return (
        <Page size="A4" orientation="landscape" style={styles.page}>
            <View style={styles.borderInner}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.header}>CERTIFICATE</Text>
                    <Text style={styles.subHeader}>OF COMPLETION</Text>
                </View>

                <View style={{ alignItems: 'center', width: '100%' }}>
                    <Text style={styles.presentedTo}>This certificate is purely presented to</Text>
                    <Text style={styles.recipientName}>{recipientName}</Text>
                    <Text style={styles.forCompletion}>For successfully completing the program</Text>
                    <Text style={styles.courseName}>{courseName}</Text>
                </View>

                <View style={styles.footerData}>
                    <View style={styles.signatureLine}>
                        <Text style={{ fontFamily: 'Heebo', fontSize: 16 }}>EcoLogic</Text>
                        <Text style={styles.signatureText}>Organization</Text>
                    </View>

                    <View style={styles.signatureLine}>
                        <Text style={{ fontSize: 14 }}>{date}</Text>
                        <Text style={styles.signatureText}>Date</Text>
                    </View>
                </View>

                <Text style={styles.seal}>🌿</Text>
            </View>
        </Page>
    );
};

export default CertificateTemplate;

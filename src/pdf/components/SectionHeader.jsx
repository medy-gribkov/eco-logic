import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { theme } from '../theme';

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: 10,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.sage,
        borderBottomStyle: 'dotted',
    },
    title: {
        fontSize: 16,
        fontWeight: 700,
        color: theme.colors.green,
    }
});

const SectionHeader = ({ title, number }) => {
    return (
        <View style={styles.container} break={false}>
            <Text style={styles.title}>
                {number ? `${number}. ` : ''}{title}
            </Text>
        </View>
    );
};

export default SectionHeader;

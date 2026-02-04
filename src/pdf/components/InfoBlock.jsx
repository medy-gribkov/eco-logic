import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { theme } from '../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.sand,
        padding: 10,
        borderRadius: 4,
        marginBottom: 10,
        flexDirection: 'row',
    },
    iconColumn: {
        width: 30,
        alignItems: 'center',
        paddingTop: 2,
    },
    contentColumn: {
        flex: 1,
    },
    icon: {
        fontSize: 14,
    },
    title: {
        fontSize: 11,
        fontWeight: 700,
        color: theme.colors.graphite,
        marginBottom: 3,
    },
    text: {
        fontSize: 10,
        color: theme.colors.graphite,
        lineHeight: 1.4,
    }
});

const InfoBlock = ({ title, text, icon = '', style }) => {
    return (
        <View style={[styles.container, style]} wrap={false}>
            <View style={styles.iconColumn}>
                <Text style={styles.icon}>{icon}</Text>
            </View>
            <View style={styles.contentColumn}>
                {title && <Text style={styles.title}>{title}</Text>}
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
};

export default InfoBlock;

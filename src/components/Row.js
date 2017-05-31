import React, { PropTypes } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Platform } from 'react-native';

function Row({ title, onPress, platform }) {
    if (platform && platform !== Platform.OS) {
        return <View />;
    }

    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={'rgba(0, 0, 0, 0.054)'}
        >
            <View style={styles.row}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableHighlight>
    );
}

Row.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    row: {
        height: 48,
        paddingHorizontal: 6,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.054)',
    },
    text: {
        fontSize: 16,
    },
});

export default Row;

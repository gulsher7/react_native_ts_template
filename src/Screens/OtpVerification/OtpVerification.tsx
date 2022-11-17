//import liraries
import React, { Component, FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const OtpVerification:FC = () => {
    return (
        <View style={styles.container}>
            <Text>OtpVerification</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default OtpVerification;

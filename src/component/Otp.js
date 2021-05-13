import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create(
    {
        wrapper: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        textStyle: {
            fontSize: 15,
            color: 'maroon',
            fontWeight: 'normal'
        },
        inputFieldStyle: {
            paddingVertical: 5,
            paddingRight: 20,
            backgroundColor: 'white',
            marginTop: 15,
            borderRadius: 10,
            borderColor: 'maroon',
            borderWidth: 1,
            color: 'maroon'
        },
        button: {
            padding: 10,
            backgroundColor: 'maroon',
            marginTop: 20,
            borderRadius: 10,
            elevation: 1
        }
    }
)

const Otp = ({ navigation }) => {
    const [OTP, setOTP] = useState('');
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textStyle}>Please enter your OTP.</Text>
            <TextInput
                value={OTP}
                placeholder="enter OTP"
                onChangeText={setOTP}
                placeholderTextColor='grey'
                style={styles.inputFieldStyle}
                maxLength={6}
                textAlign='center'
            />
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('NewPassword')
                }}
                style={styles.button}
            >
                <Text style={{ color: 'white' }}>OK</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Otp;
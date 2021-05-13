import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create(
    {
        wrapper: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        },
        textStyle: {
            fontSize: 15,
            color: 'maroon',
            fontWeight: 'normal'
        },
        inputFieldStyle: {
            paddingVertical: 5,
            width: '60%',
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

const ForgetPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textStyle}>Please enter your E-mail Address.</Text>
            <Text style={styles.textStyle}>We will send you a password recovery code.</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="enter your email address"
                placeholderTextColor='grey'
                style={styles.inputFieldStyle}
            />
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Otp')
                }}
                style={styles.button}
            >
                <Text style={{ color: 'white' }}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ForgetPassword;
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        },
        textStyle: {
            fontSize: 15,
            color: 'maroon'
        },
        inputFieldStyle: {
            paddingVertical: 5,
            backgroundColor: 'white',
            marginTop: 5,
            marginBottom: 10,
            borderRadius: 10,
            color: 'maroon',
            borderColor: 'maroon',
            borderWidth: 1,
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

const NewPassword = ({navigation}) => {
    const [Newpassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    return (
        <View style={styles.container}>
            <View style={{width: '70%'}}>
                <Text style={styles.textStyle}>New Password</Text>
                <TextInput
                    value={Newpassword}
                    onChangeText={setNewPassword}
                    placeholder="enter new password"
                    placeholderTextColor='grey'
                    style={styles.inputFieldStyle}
                />
                <Text style={styles.textStyle}>Confirm New Password</Text>
                <TextInput
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="confirm new password"
                    placeholderTextColor='grey'
                    style={styles.inputFieldStyle}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Home')
                }}
                style={styles.button}
            >
                <Text style={{ color: 'white' }}>OK</Text>
            </TouchableOpacity>
        </View>

    )
}

export default NewPassword;
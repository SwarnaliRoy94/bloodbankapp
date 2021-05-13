import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create(
    {
        wrapper: {
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'maroon',
            borderRadius: 10,
            width: '100%'
        },
        textStyle: {
            fontSize: 15,
            color: 'white'
        },
        forgetText: {
            fontSize: 10,
            color: 'pink'
        },
        inputFieldStyle: {
            paddingVertical: 5,
            backgroundColor: 'white',
            marginTop: 5,
            marginBottom: 10,
            borderRadius: 10,
            color: 'black'
        },
        button: {
            padding: 15,
            backgroundColor: 'white',
            marginTop: 20,
            borderRadius: 10
        }

    }
)

const Login = ({ isVisible, toggleModal, navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Modal isVisible={isVisible}>
            <View style={styles.wrapper}>
                <View style={{width: '80%'}}>
                    <Text style={styles.textStyle}>E-mail Address</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="enter your email address"
                        placeholderTextColor='grey'
                        style={styles.inputFieldStyle}
                    />
                    <Text style={styles.textStyle}>Password</Text>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="enter password"
                        placeholderTextColor='grey'
                        style={styles.inputFieldStyle}
                    />
                    <TouchableOpacity onPress={() => {
                        toggleModal()
                        navigation.navigate('ForgetPassword')
                    }}>
                        <Text style={styles.forgetText}>Forget Password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={toggleModal}
                    style={styles.button}
                >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default Login;
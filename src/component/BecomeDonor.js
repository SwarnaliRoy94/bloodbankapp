import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            paddingHorizontal: 20,
        },
        textWrapper: {
            paddingVertical: 10,
        },
        textStyle: {
            fontSize: 15,
            color: 'maroon'
        },
        inputFieldStyle: {
            paddingVertical: 5,
            width: '100%',
            backgroundColor: 'white',
            marginVertical: 15,
            borderRadius: 10,
            borderColor: 'maroon',
            borderWidth: 1,
            color: 'maroon'
        },
        buttonWrapper: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
        },
        button: {
            width: '20%',
            padding: 15,
            backgroundColor: 'red',
            marginVertical: 10,
            marginHorizontal: 5,
            borderRadius: 10,
            alignItems: 'center',
            elevation: 2
        },
    }
)

const BecomeDonor = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fName, setfName] = useState('');
    const [age, setAge] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text>Want to become a donor? Create your account now!</Text>
            </View>
            <View>
                <Text style={styles.textStyle}>Full Name</Text>
                <TextInput
                    value={fName}
                    onChangeText={setfName}
                    placeholder="enter full name"
                    placeholderTextColor='grey'
                    style={styles.inputFieldStyle}
                />
                <Text style={styles.textStyle}>Age</Text>
                <TextInput
                    value={age}
                    onChangeText={setAge}
                    placeholder="enter your age"
                    placeholderTextColor='grey'
                    style={styles.inputFieldStyle}
                />
                <Text style={styles.textStyle}>Pick Your Blood Group</Text>
                <View style={styles.buttonWrapper}>
                    {
                        ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'].map((item) => (
                            <TouchableOpacity style={styles.button}>
                                <Text>{item}</Text>
                            </TouchableOpacity >
                        ))
                    }
                </View>
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

            </View>
        </View>

    )
}

export default BecomeDonor;
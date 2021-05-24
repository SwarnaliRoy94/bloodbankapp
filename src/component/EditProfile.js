import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-date-picker'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { asset } from '../assets';
import { useState } from 'react/cjs/react.development';

const styles = StyleSheet.create(
    {
        container: {
            padding: 20,
            width: '100%',
            backgroundColor: 'white',
            flex: 1
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
            marginVertical: 10,
            marginHorizontal: 5,
            borderRadius: 10,
            alignItems: 'center',
            elevation: 2
        },
        genderViewWrapper: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
            flex: 1
        },
        genderView: {
            flexDirection: 'row',
            marginVertical: 5,
            alignItems: 'center',
        },
        flagStyle: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingRight: 10,
            width: '100%',
        },
        contactInputStyle: {
            paddingVertical: 5,
            width: '90%',
            backgroundColor: 'white',
            marginVertical: 15,
            marginLeft: 13,
            borderRadius: 10,
            borderColor: 'maroon',
            borderWidth: 1,
            color: 'maroon'
        },
        submitButtonView: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30
        },
        submitButton: {
            width: '50%',
            padding: 10,
            backgroundColor: 'maroon',
            marginVertical: 10,
            marginHorizontal: 5,
            borderRadius: 15,
            alignItems: 'center',
            elevation: 1
        },
    }
)
const EditProfile = () => {
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState(null);
    const [bloodGroup, setBloodGroup] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [habit, setHabit] = useState('');
    const [lastDonation, setLastDonation] = useState(new Date());
    const [numOfDonation, setNumOfDonation] = useState('');
    const [contactNo, setContactNo] = useState('+880');


    return (
        <ScrollView style={styles.container}>
            
                <Text style={styles.textStyle}>Full Name</Text>
                <TextInput
                    value={fullName}
                    onChangeText={setFullName}
                    style={styles.inputFieldStyle}
                />
                <Text style={styles.textStyle}>Age</Text>
                <TextInput
                    value={age}
                    onChangeText={setAge}
                    style={styles.inputFieldStyle}
                />
                <Text style={styles.textStyle}>Gender</Text>
                <View style={styles.genderViewWrapper}>
                    <View style={styles.genderView}>
                        <CheckBox
                            disabled={false}
                            value={gender === 'male' ? true : false}
                            onValueChange={() => setGender("male")}
                            tintColors={{ true: 'black', false: 'maroon' }}
                            style={{ marginLeft: 0 }}
                        />
                        <Text style={styles.textStyle}>Male</Text>
                    </View>
                    <View style={styles.genderView}>
                        <CheckBox
                            disabled={false}
                            value={gender === 'female' ? true : false}
                            onValueChange={() => setGender('female')}
                            tintColors={{ true: 'black', false: 'maroon' }}
                            style={{ marginLeft: 0 }}
                        />
                        <Text style={styles.textStyle}>Female</Text>
                    </View>
                </View>
                <Text style={styles.textStyle}>Pick Your Blood Group</Text>
                <View style={styles.buttonWrapper}>
                    {
                        ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-'].map((item) => (
                            <TouchableOpacity style={[styles.button, { backgroundColor: item === bloodGroup ? 'black' : 'maroon' }]}
                                onPress={() => {
                                    setBloodGroup(item);
                                }}>
                                <Text style={{ color: 'white' }}>{item}</Text>
                            </TouchableOpacity >
                        ))
                    }
                </View>
                <Text style={styles.textStyle}>E-mail Address</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={styles.inputFieldStyle}
                />
                <Text style={styles.textStyle}>New Password</Text>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    style={styles.inputFieldStyle}
                />
                <Text style={styles.textStyle}>Are you a Smoker?</Text>
                <TextInput
                    value={habit}
                    onChangeText={setHabit}
                    style={styles.inputFieldStyle}
                />
                <Text style={styles.textStyle}>When did you last donate blood?</Text>
                <View style={{ alignItems: 'center', padding: 10 }}>
                    <DatePicker
                        date={lastDonation}
                        onDateChange={setLastDonation}
                        mode={'date'}
                        maximumDate={new Date()}
                        textColor='maroon'
                    />
                </View>
                <Text style={styles.textStyle}>How many times have you donated blood?</Text>
                <TextInput
                    value={numOfDonation}
                    onChangeText={setNumOfDonation}
                    style={styles.inputFieldStyle}
                />
                <Text style={styles.textStyle}>Contact Number</Text>
                <TextInput
                    value={contactNo}
                    onChangeText={setContactNo}
                    style={styles.inputFieldStyle}
                />
                <View style={styles.submitButtonView}>
                    <TouchableOpacity
                        onPress={() => {
                        }}
                        style={styles.submitButton}
                    >
                        <Text style={{ color: 'white' }}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            
        </ScrollView>
    )
}

export default EditProfile;
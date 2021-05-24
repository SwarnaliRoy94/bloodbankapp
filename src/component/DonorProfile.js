import React from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { asset } from '../assets';
import { useState } from 'react/cjs/react.development';

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            width: '100%',
            backgroundColor: 'maroon',
        },
        wrapperTop: {
            flex: 1.2,
            width: '100%',
            backgroundColor: 'black',
            borderColor: 'white',
            borderWidth: 2,
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingVertical: 25
        },
        avatarStyle: {
            height: 220,
            width: 220,
            borderRadius: 110,
            borderWidth: 1,
            borderColor: 'black',
        },
        button: {
            padding: 25
        },
        textWrapper: {
            padding: 10,
            flex: 2
        },
        textStyle: {
            color: '#ffd0ca',
            fontSize: 15,
            fontWeight: 'bold',
            padding: 5,
            margin: 5,
        },
        nameStyle: {
            color: '#ffd0ca',
            fontSize: 30,
            fontWeight: 'bold',
            fontFamily: 'notoserif',
        },
        submitButtonView: {
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
        },
        submitButton: {
            width: '50%',
            padding: 10,
            backgroundColor: 'white',
            marginVertical: 10,
            marginHorizontal: 5,
            borderRadius: 15,
            alignItems: 'center',
            elevation: 1
        },
    }
)

const profile = {
    photo: asset.Image1,
    name: 'Swarnali Roy',
    age: 26,
    gender: 'Female',
    bloodGroup: 'O+ve',
    habit: 'No',
    lastDonation: '11.03.2021',
    numOfDonation: 3,
    email: 'swar@gmail.com',
    contactNo: '+88016.......'
}

const DonorProfile = ({navigation}) => {

    const [avatar, setAvatar] = useState('');

    const selectImage = () => {
        launchImageLibrary({ includeBase64: true }, (res) => {
            if (res.base64) {
                setAvatar(res.base64)
            }
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.wrapperTop}>
                <View>
                    <Image
                        source={
                            avatar ? { uri: `data:image/png;base64,${avatar}` } : profile.photo
                        }
                        style={styles.avatarStyle}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        selectImage()
                    }}
                    style={styles.button}
                >
                    <Text style={{ color: 'white' }}>Change Profile Picture</Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.nameStyle} >{profile.name}</Text>
                </View>
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.textStyle} >Age: {profile.age} Years</Text>
                <Text style={styles.textStyle} >Gender: {profile.gender}</Text>
                <Text style={styles.textStyle} >E-mail Address: {profile.email}</Text>
                <Text style={styles.textStyle} >Contact No: {profile.contactNo}</Text>
                <Text style={styles.textStyle} >Blood Group: {profile.bloodGroup}</Text>
                <Text style={styles.textStyle} >Smoking Habit: {profile.habit}</Text>
                <Text style={styles.textStyle} >Last Date of Blood Donation: {profile.lastDonation}</Text>
                <Text style={styles.textStyle} >Number of Blood Donation: {profile.numOfDonation}</Text>
                <View style={styles.submitButtonView}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Edit Profile')
                        }}
                        style={styles.submitButton}
                    >
                        <Text style={{ color: 'maroon' }}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DonorProfile;
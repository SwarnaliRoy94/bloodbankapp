import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { asset } from '../assets';
import DonorDetails from './DonorDetails';
import FindDonorCards from './FindDonorCards';

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: 'maroon',
            alignItems: 'center',
            padding: 10
        }
    }
)

const FindDonorArray = [
    {
        photo: asset.Image1,
        name: 'Swarnali Roy',
        age: 26,
        gender: '',
        bloodGroup: 'O+ve',
        habit: 'No',
        lastDonation: '11.03.2021',
        numOfDonation: 3,
        availability: true,
        email: 'swar@gmail.com',
        contactNo: '+88016.......'
    },
    {
        photo: asset.Image1,
        name: 'Swarnali Roy',
        age: 26,
        gender: '',
        bloodGroup: 'O+ve',
        habit: 'No',
        lastDonation: '11.03.2021',
        numOfDonation: 3,
        availability: false,
        email: 'swar@gmail.com',
        contactNo: '+88016.......'
    },
    {
        photo: asset.Image1,
        name: 'Swarnali Roy',
        age: 26,
        gender: '',
        bloodGroup: 'O+ve',
        habit: 'Yes',
        lastDonation: '11.03.2021',
        numOfDonation: 3,
        availability: true,
        email: 'swar@gmail.com',
        contactNo: '+88016.......'
    },
    {
        photo: asset.Image1,
        name: 'Swarnali Roy',
        age: 26,
        gender: '',
        bloodGroup: 'O+ve',
        habit: 'No',
        lastDonation: '11.03.2021',
        numOfDonation: 3,
        availability: true,
        email: 'swar@gmail.com',
        contactNo: '+88016.......'
    },
    {
        photo: asset.Image1,
        name: 'Swarnali Roy',
        age: 26,
        gender: '',
        bloodGroup: 'O+ve',
        habit: 'No',
        lastDonation: '11.03.2021',
        numOfDonation: 3,
        availability: false,
        email: 'swar@gmail.com',
        contactNo: '+88016.......'
    },
    {
        photo: asset.Image1,
        name: 'Swarnali Roy',
        age: 26,
        gender: '',
        bloodGroup: 'O+ve',
        habit: 'No',
        lastDonation: '11.03.2021',
        numOfDonation: 3,
        availability: false,
        email: 'swar@gmail.com',
        contactNo: '+88016.......'
    },
    {
        photo: asset.Image1,
        name: 'Swarnali Roy',
        age: 26,
        gender: '',
        bloodGroup: 'O+ve',
        habit: 'Yes',
        lastDonation: '11.03.2021',
        numOfDonation: 3,
        availability: true,
        email: 'swar@gmail.com',
        contactNo: '+88016.......'
    },
]

const FindDonor = ({ navigation }) => {

    const renderFindDonorCards = () => {
        return (
            FindDonorArray.map((donor) => {
                return (
                    <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, margin: 10 }} key={donor.name}>
                        <FindDonorCards
                            navigation={navigation}
                            photo={donor.photo}
                            name={donor.name}
                            age={donor.age}
                            gender={donor.gender}
                            bloodGroup={donor.bloodGroup}
                            availability={donor.availability}
                            habit={donor.habit}
                            lastDonation={donor.lastDonation}
                            numOfDonation={donor.numOfDonation}
                            email={donor.email}
                            contactNo={donor.contactNo}
                        />
                    </View>
                )
            })
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {renderFindDonorCards()}
        </ScrollView>
    )
}

export default FindDonor;
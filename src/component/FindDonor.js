import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { asset } from '../assets';
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

const FindDonor = () => {

    const FindDonorArray = [
        {
            photo: asset.Image1,
            name: 'Swarnali Roy',
            age: 26,
            bloodGroup: 'O+ve',
            availability: true
        },
        {
            photo: asset.Image1,
            name: 'Baby',
            age: 26,
            bloodGroup: 'O+ve',
            availability: true
        },
        {
            photo: asset.Image1,
            name: 'Swarnali Roy',
            age: 26,
            bloodGroup: 'O+ve',
            availability: false
        },
        {
            photo: asset.Image1,
            name: 'Swarnali Roy',
            age: 26,
            bloodGroup: 'O+ve',
            availability: false
        },
        {
            photo: asset.Image1,
            name: 'Swarnali Roy',
            age: 26,
            bloodGroup: 'O+ve',
            availability: true
        },
        {
            photo: asset.Image1,
            name: 'Swarnali Roy',
            age: 26,
            bloodGroup: 'O+ve',
            availability: false
        },
        {
            photo: asset.Image1,
            name: 'Swarnali Roy',
            age: 26,
            bloodGroup: 'O+ve',
            availability: false
        },
        {
            photo: asset.Image1,
            name: 'Swarnali Roy',
            age: 26,
            bloodGroup: 'O+ve',
            availability: false
        },
        {
            photo: asset.Image1,
            name: 'Swarnali Roy',
            age: 26,
            bloodGroup: 'O+ve',
            availability: true
        },
        
    ]

    const renderFindDonorCards = () => {
        return (
            FindDonorArray.map((item) => {
                return (
                    <View style={{ borderBottomWidth: StyleSheet.hairlineWidth , margin: 10}}>
                        <FindDonorCards
                            photo={item.photo}
                            name={item.name}
                            age={item.age}
                            bloodGroup={item.bloodGroup}
                            availability={item.availability}
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
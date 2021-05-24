import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create(
    {
        wrapper: {
            width: '100%',
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
        },
        imageStyle: {
            height: 70,
            width: 70,
            borderRadius: 35,
        },
        wrapperRight: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 10,
            flex: 1,
            alignItems: 'center',
        },
        textWrapper: {
            padding: 5,
        },
        textStyle: {
            color: 'maroon',
            fontSize: 13,
            fontWeight: 'bold'
        },
        availabilityStyle: {
            height: 20,
            width: 20,
            borderRadius: 10,

        }
    }
)

const FindDonorCards = ({ navigation, photo, name, age, gender, bloodGroup, availability, habit, lastDonation, numOfDonation, email, contactNo }) => {

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Donor Details', {
                    photo,
                    name,
                    age,
                    gender,
                    availability,
                    bloodGroup,
                    habit,
                    lastDonation,
                    numOfDonation,
                    email,
                    contactNo
                })
            }}
            style={styles.wrapper}>
            <Image
                source={photo}
                style={styles.imageStyle}
            />
            <View style={styles.wrapperRight}>
                <View style={styles.textWrapper}>
                    <Text style={styles.textStyle}>Name: {name}</Text>
                    <Text style={styles.textStyle}>Age: {age}</Text>
                    <Text style={styles.textStyle}>BloodGroup: {bloodGroup}</Text>
                    <Text style={styles.textStyle}>Availability: {availability ? 'Available' : 'Unavailable'}</Text>
                </View>
            </View>
            <View
                style={[styles.availabilityStyle, { backgroundColor: availability ? 'green' : 'red' }]}
            />
        </TouchableOpacity>
    )
}

export default FindDonorCards;
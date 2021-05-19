import React from 'react';
import { Image, StyleSheet, Text, View, ViewBase } from 'react-native';

const styles = StyleSheet.create(
    {
        Container: {
            flex: 1,
            backgroundColor: '#f9f2f2',
            //padding: 20
        },
        imageWrapper: {
            flex: 1
        },
        imageStyle: {
            height: '100%',
            width: '100%',
        },
        textWrapper: {
            padding: 20,
            // backgroundColor: 'pink',
            flex: 2
        },
        textStyle: {
            color: 'maroon',
            fontSize: 15,
            fontWeight: 'bold'
        },
    }
)

const DonorDetails = ({ route }) => {
    const { photo, name, age, bloodGroup, habit, lastDonation, numOfDonation, availability, email, contactNo } = route.params;
  
    return (
        <View style={styles.Container}>
            <View style={styles.imageWrapper}>
                <Image
                    source={photo}
                    style={styles.imageStyle}
                />
            </View>

            <View style={styles.textWrapper}>
                <Text style={styles.textStyle}>Name:{name}</Text>
                <Text style={styles.textStyle}>Age:{age}</Text>
                <Text style={styles.textStyle}>bloodGroup:{bloodGroup}</Text>
                <Text style={styles.textStyle}>Smoking Habit:{habit}</Text>
                <Text style={styles.textStyle}>Last Date of Donation:{lastDonation}</Text>
                <Text style={styles.textStyle}>Number of Donations:{numOfDonation}</Text>
                <Text style={styles.textStyle}>Available for Donation:{availability ? 'Available' : 'Unavailable'}</Text>
                <Text style={styles.textStyle}>E-mail Address:{email}</Text>
                <Text style={styles.textStyle}>Contact Number:{contactNo}</Text>
            </View>
        </View>
    )
}

export default DonorDetails;
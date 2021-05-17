import React from 'react';
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
        button: {
            padding: 10,
            backgroundColor: 'white',
            borderColor: 'maroon',
            borderWidth: 1,
            elevation: 1,
            borderRadius: 10
        }
    }
)

const FindDonorCards = ({ photo, name, age, bloodGroup, availability }) => {
    return (
        <View style={styles.wrapper}>
            <Image
                source={photo}
                style={styles.imageStyle}
            />
            <View style={styles.wrapperRight}>
                <View style={styles.textWrapper}>
                    <Text style={styles.textStyle}>Name: {name}</Text>
                    <Text style={styles.textStyle}>Age: {age}</Text>
                    <Text style={styles.textStyle}>BloodGroup: {bloodGroup}</Text>
                    <Text style={styles.textStyle}>Availability: {availability}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.button}
                >
                    <Text>Details</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default FindDonorCards;
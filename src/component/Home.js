import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { asset } from '../assets';
import Login from './Login';

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: 'white',
      flex: 1
    },
    containerTop: {
      backgroundColor: '#f9f2f2',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    containerBottom: {
      backgroundColor: 'maroon',
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    imageStyle: {
      height: 150,
      width: 200
    },
    topTextWrapper: {
      alignItems: 'center'
    },
    textStyle: {
      fontSize: 20,
      color: 'maroon',
      fontWeight: 'bold'
    },
    buttonStyle: {
      backgroundColor: '#f9f2f2',
      padding: 15,
      margin: 10,
      elevation: 2,
      borderRadius: 10
    }
  }
)

const Home = ({ navigation }) => {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Image
          source={asset.HomeLogo}
          style={styles.imageStyle}
        />
        <View style={styles.topTextWrapper}>
          <Text style={styles.textStyle}>Donate Blood, Save A Life!</Text>
          <Text style={styles.textStyle}>Your Blood Means A Lot</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Find A Donor')
          }}
          style={styles.buttonStyle}
        >
          <Text>Find A Donor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log('pressed');
          }}
          style={styles.buttonStyle}
        >
          <Text>Become A Donor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={toggleModal}
          style={styles.buttonStyle}
        >
          <Text>Login to Your Account</Text>
        </TouchableOpacity>
        <Login
          isVisible={isModalVisible}
          toggleModal={toggleModal}
          navigation={navigation}
        />

      </View>
    </View>
  )
}

export default Home;
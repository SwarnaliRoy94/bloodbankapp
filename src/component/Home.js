import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {asset} from '../assets';
import {setLoggedIn} from '../features/Auth/AuthSlice';
import Login from './Login';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  containerTop: {
    backgroundColor: '#f9f2f2',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBottom: {
    backgroundColor: 'maroon',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 150,
    width: 200,
  },
  topTextWrapper: {
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'maroon',
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: '#f9f2f2',
    padding: 15,
    margin: 10,
    elevation: 2,
    borderRadius: 10,
  },
});

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(false);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const logout = () => {
    dispatch(setLoggedIn(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Image source={asset.HomeLogo} style={styles.imageStyle} />
        <View style={styles.topTextWrapper}>
          <Text style={styles.textStyle}>Donate Blood, Save A Life!</Text>
          <Text style={styles.textStyle}>Your Blood Means A Lot</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Find A Donor');
          }}
          style={styles.buttonStyle}>
          <Text>Find A Donor</Text>
        </TouchableOpacity>

        {isLoggedIn ? (
          <>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile');
              }}
              style={styles.buttonStyle}>
              <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                logout();
              }}
              style={styles.buttonStyle}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Become Donor');
              }}
              style={styles.buttonStyle}>
              <Text>Become A Donor</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal} style={styles.buttonStyle}>
              <Text>Login to Your Account</Text>
            </TouchableOpacity>
          </>
        )}

        <Login
          isVisible={isModalVisible}
          toggleModal={toggleModal}
          handleSubmit={Login}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default Home;

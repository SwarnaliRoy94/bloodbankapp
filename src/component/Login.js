import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setLoggedIn} from '../features/Auth/AuthSlice';
import InputField from './common/InputField';

const styles = StyleSheet.create({
  wrapper: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'maroon',
    borderRadius: 10,
    width: '100%',
  },
  textStyle: {
    fontSize: 15,
    color: 'white',
  },
  forgetText: {
    fontSize: 10,
    color: 'pink',
  },
  inputFieldStyle: {
    paddingVertical: 5,
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 10,
    color: 'black',
  },
  button: {
    padding: 15,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10,
  },
});

const Login = ({isVisible, toggleModal, navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    dispatch(setLoggedIn(true));
    toggleModal();
  };

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.wrapper}>
        <View style={{width: '80%'}}>
          <View style={{marginBottom: 5}}>
            <Text style={styles.textStyle}>E-mail Address</Text>
            <InputField
              value={email}
              onChangeText={setEmail}
              placeholder="enter your email address"
              placeholderTextColor="grey"
              style={styles.inputFieldStyle}
              keyboardType="email-address"
              validations={[
                {
                  type: 'required',
                  value: '',
                  msg: 'This field is required',
                },
              ]}
            />
          </View>
          <Text style={styles.textStyle}>Password</Text>
          <InputField
            value={password}
            onChangeText={setPassword}
            placeholder="enter password"
            placeholderTextColor="grey"
            style={styles.inputFieldStyle}
            secureTextEntry
            validations={[
              {
                type: 'required',
                value: '',
                msg: 'This field is required',
              },
              {
                type: 'minimumLength',
                value: 8,
                msg: 'This field must have 8 characters',
              },
            ]}
          />
          <TouchableOpacity
            onPress={() => {
              toggleModal();
              navigation.navigate('ForgetPassword');
            }}>
            <Text style={styles.forgetText}>Forget Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => handleSubmit()}
          style={styles.button}
          disabled={email == '' && password == ''}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Login;

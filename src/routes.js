import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './component/Home';
import ForgetPassword from './component/ForgetPassword';
import Otp from './component/Otp';
import NewPassword from './component/NewPassword';


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            headerMode='none'
            initialRouteName='Home'>
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='ForgetPassword'
                component={ForgetPassword}
            />
            <Stack.Screen
                name='Otp'
                component={Otp}
            />
            <Stack.Screen
                name='NewPassword'
                component={NewPassword}
            />
        </Stack.Navigator>
    )
}

export default AppNavigator;
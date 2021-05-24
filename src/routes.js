import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './component/Home';
import ForgetPassword from './component/ForgetPassword';
import Otp from './component/Otp';
import NewPassword from './component/NewPassword';
import FindDonor from './component/FindDonor';
import DonorDetails from './component/DonorDetails';
import { StyleSheet } from 'react-native';
import BecomeDonor from './component/BecomeDonor';
import DonorProfile from './component/DonorProfile';
import EditProfile from './component/EditProfile';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            // headerMode='none'
            screenOptions={
                {
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'maroon',
                        borderWidth: StyleSheet.hairlineWidth,
                        borderColor: ' #a04c4c '
                    },
                    headerTitleStyle: {
                        fontSize: 20,
                        color: 'pink',
                        fontWeight: 'bold'
                    },
                }
            }
            initialRouteName='Home'>
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='ForgetPassword'
                component={ForgetPassword}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Otp'
                component={Otp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='NewPassword'
                component={NewPassword}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Find A Donor'
                component={FindDonor}
            />
            <Stack.Screen
                name='Donor Details'
                component={DonorDetails}
            />
            <Stack.Screen
                name='Become Donor'
                component={BecomeDonor}
            />
            <Stack.Screen
                name='Profile'
                component={DonorProfile}
            />
            <Stack.Screen
                name='Edit Profile'
                component={EditProfile}
            />
        </Stack.Navigator>
    )
}

export default AppNavigator;
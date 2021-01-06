import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import loginRegisterBtn from '../components/loginRegisterBtn';
import homeElement from '../components/homeElement';
import loginForm from '../components/loginForm';
import registerForm from '../components/registerForm';

const Stack = createStackNavigator();

export default function MainNavigation () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login/Register" component={loginRegisterBtn} />
            <Stack.Screen name="Home" component={homeElement} />
            <Stack.Screen name="Login" component={loginForm} />
            <Stack.Screen name="Register" component={registerForm} />
        </Stack.Navigator>
    )
}
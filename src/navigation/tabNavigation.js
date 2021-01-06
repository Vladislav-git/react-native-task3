import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainNavigation from './mainNavigation';
import loginForm from '../components/loginForm';
import registerForm from '../components/registerForm';

const Tab = createBottomTabNavigator();

export default function TabNavigation () {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Login/Register' component={MainNavigation}/>
            <Tab.Screen name="Login" component={loginForm} />
            <Tab.Screen name="Register" component={registerForm} />
        </Tab.Navigator>
    );
}
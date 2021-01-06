import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './tabNavigation'
import loginForm from '../components/loginForm';
import registerForm from '../components/registerForm';


const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Login/Register" component={TabNavigation} />
            <Drawer.Screen name="Login" component={loginForm} />
            <Drawer.Screen name="Register" component={registerForm} />
        </Drawer.Navigator>

    );
}
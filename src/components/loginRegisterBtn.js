import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';


export default function LoginBtn ({navigation}) {
    return (
        <View>
            <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.Button}
            >
                <Text style={styles.ButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.Button}
            >
                <Text style={styles.ButtonText}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    Button: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        height: 40,
        width: 150,
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginTop: 140,
    },
    ButtonText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
};
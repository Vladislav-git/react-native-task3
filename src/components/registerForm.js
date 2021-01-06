import React, {useState} from 'react';
import {TouchableOpacity, Text, View, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { logger } from 'react-native-logs';

// let log = logger.createLogger();

const default_model = {
    firstname: '',
    secondname: '',
    email: '',
    password: '',
};



export default function RegisterForm ({navigation}) {

    const initialState = {model: default_model};

    const [state, setState] = useState(initialState);

    const {model} = state;

    return (
        <View>
            <View style={styles.View}>
                <Text style={styles.Text}>Firstname:</Text>
                <TextInput 
                    style={styles.Input}
                    placeholder='Enter your Firstname'
                    value={model.firstname}
                    onChangeText={(text) => setState({...state, model:{...state.model, firstname: text}})}
                />
                <Text style={styles.Text}>Secondname:</Text>
                <TextInput 
                    style={styles.Input}
                    placeholder='Enter your Secondname'
                    value={model.secondname}
                    onChangeText={(text) => setState({...state, model:{...state.model, secondname: text}})}
                />
                <Text style={styles.Text}>Email:</Text>
                <TextInput 
                    style={styles.Input}
                    placeholder='Enter your email'
                    value={model.email}
                    onChangeText={(text) => setState({model:{...state.model, email: text}})}
                />
                <Text style={styles.Text}>Password:</Text>
                <TextInput 
                    style={styles.Input}
                    placeholder='Enter your password'
                    value={model.password}
                    onChangeText={(text) => setState({model:{...state.model, password: text}})}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    AsyncStorage.setItem(state.model.email, JSON.stringify(state.model))
                    navigation.navigate('Login')
                }
                }
                style={styles.Button}
            >
                <Text style={styles.ButtonText}>Sign in</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = {
    Text: {
        marginTop: 30,
    },
    View: {
        alignSelf: 'center',
        fontSize: 16,
    },
    Input: {
        height: 40,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: 10,
    },
    Button: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        height: 40,
        width: 150,
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginTop: 50,
    },
    ButtonText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
};
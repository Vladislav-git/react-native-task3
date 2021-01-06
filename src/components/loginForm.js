import React, {useState} from 'react';
import {TouchableOpacity, Text, View, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
// import { logger } from 'react-native-logs';

// let log = logger.createLogger();


// export default function LoginForm ({navigation}) {

//     const initialState = {email: '', password: ''}

//     const [state, setState] = useState(initialState);

//     return (
//         <View>
//             <View style={styles.View}>
//                 <Text>Enter your email:</Text>
//                 <TextInput 
//                     style={styles.Input}
//                     placeholder='Your email'
//                     value={state.email}
//                     onChangeText={(text) => setState({...state, email: text})}
//                 />
//             </View>
//             <View style={styles.View}>
//                 <Text>Enter your password:</Text>
//                 <TextInput 
//                     style={styles.Input}
//                     placeholder='Your password'
//                     value={state.password}
//                     onChangeText={(text) => setState({...state, password: text})}
//                 />
//             </View>
            
//             <TouchableOpacity
//                 onPress={async () => {
//                     try {
//                         let user = await AsyncStorage.getItem(state.email);
//                         let parsedUser = JSON.parse(user);
//                         if (parsedUser.password === state.password) {
//                             return navigation.navigate('Home');
//                         }
//                     } catch (err) {
//                         return err;
//                     }
//                 }
//                 }
//                 style={styles.Button}
//             >
//                 <Text style={styles.ButtonText}>Log in</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }


class LoginForm extends React.Component {

    render() {
        return (
            <View>
                <View style={styles.View}>
                    <Text>Enter your email:</Text>
                    <TextInput 
                        style={styles.Input}
                        placeholder='Your email'
                        value={this.props.email}
                        onChangeText={(email) => this.props.dispatch({type: 'ONCHANGEEMAIL', email})}
                    />
                </View>
                <View style={styles.View}>
                    <Text>Enter your password:</Text>
                    <TextInput 
                        style={styles.Input}
                        placeholder='Your password'
                        value={this.props.password}
                        onChangeText={(password) => this.props.dispatch({type: 'ONCHANGEPASSWORD', password})}
                    />
                </View>
                
                <TouchableOpacity
                    onPress={async () => {
                        try {
                            let user = await AsyncStorage.getItem(this.props.email);
                            let parsedUser = JSON.parse(user);
                            console.log(parsedUser)
                            if (parsedUser.password === this.props.password) {
                                this.props.dispatch({type: 'ONSUCCESS', user: parsedUser})
                                return this.props.navigation.navigate('Home')
                            }
                        } catch (err) {
                            return err;
                        }
                    }
                    }
                    style={styles.Button}
                >
                    <Text style={styles.ButtonText}>Log in</Text>
                </TouchableOpacity>
            </View>
        )
    }
    
}

function mapStateToProps (state) {
    return {
        email: state.email,
        password: state.password,
        secondname: state.secondname,
        firstname: state.firstname,
    }
}


export default connect(mapStateToProps)(LoginForm)


const styles = {
    View: {
        alignSelf: 'center',
        fontSize: 16,
        marginTop: 30,
    },
    Input: {
        height: 40,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'center',
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
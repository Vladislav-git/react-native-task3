import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import { logger } from 'react-native-logs';
import * as Location from 'expo-location';
import {useSelector} from 'react-redux';
const axios = require('axios');


// let log = logger.createLogger();

export default function HomeElement () {

    const firstname = useSelector(state => state.firstname)
    const secondname = useSelector(state => state.secondname)

    const initialState = {
        date: '',
        temp: '',
        humidity: '',
        windspeed: '',
        description: '',
        pressure: '',
        visible: false,
    }
    const [coords, setCoords] = useState(null);
    const [state, setState] = useState(initialState);

    useEffect(() => {
        (async() => {
            let {status} = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            };
            let location = await Location.getCurrentPositionAsync({});
            setCoords({lat: location.coords.latitude, lon: location.coords.longitude});
        })()
    }, []);

    const weatherData = async (code) => {
        await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=87cbeb5a6565932d7931e837401e2def`)
            .then(({data}) => {
                setState({
                    date: data.list[code].dt_txt,
                    temp: data.list[code].main.temp,
                    humidity: data.list[code].main.humidity,
                    windspeed: data.list[code].wind.speed,
                    description: data.list[code].weather[0].description,
                    pressure: data.list[code].main.pressure,
                    visible: true,
                })
            })
        }

    return (
        <View>
            <Text>Welcome {firstname} {secondname}</Text>
            <TouchableOpacity
            onPress={() => weatherData(0)}
            style={styles.Button}
            >
                <Text style={styles.ButtonText}>Weather today</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => weatherData(8)}
            style={styles.Button}
            >
                <Text style={styles.ButtonText}>Weather tomorrow</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => weatherData(16)}
            style={styles.Button}
            >
                <Text style={styles.ButtonText}>Weather after 2 days</Text>
            </TouchableOpacity>
            {state.visible != true
            ? null
            :<View style={styles.View}>
                <Text style={styles.Text}>Date: {state.date.slice(0,10)}</Text>
                <Text style={styles.Text}>Temp: {state.temp}℃</Text>
                <Text style={styles.Text}>Description: {state.description}</Text>
                <Text style={styles.Text}>Humidity: {state.humidity}%</Text>
                <Text style={styles.Text}>Wind speed: {state.windspeed}meter/sec</Text>
                <Text style={styles.Text}>Pressure: {state.pressure}hPa</Text>
            </View>
            }
        </View>
    )
}


const styles = {

    Text: {
        fontSize: 16,
        borderWidth: 1,
        textAlign: "center",
        display: 'flex',
        justifyContent: 'center',
        width: 300,
    },
    View: {
        alignSelf: 'center',
        marginTop: 30,
        borderWidth: 1,
        backgroundColor: '#d2d2d2',
    },
    Button: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        height: 40,
        width: 200,
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
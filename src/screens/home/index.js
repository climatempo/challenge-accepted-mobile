import React, { Fragment, useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import NetInfo from '@react-native-community/netinfo'
import database, { createWeather, getWeather, updateWeather } from "../../database";


import apiWeather, { token } from '../../services/api';



const Home = () => {

    const [daysArray, setDaysArray] = useState(null)
    const [currentDay, setCurrentDay] = useState(null)
    const [statusNet, setStatusNet] = useState(null)
    const [nameCity, setNameCity] = useState(null)
    const [state, setState] = useState(null)
    const [id, setId] = useState(null)
    const weekDays = [
        {
            name: "domingo",
            shortName: "dom"
        },
        {
            name: "segunda-feira",
            shortName: "seg"
        },
        {
            name: "terça-feira",
            shortName: "ter"
        },
        {
            name: "quarta-feira",
            shortName: "qua"
        },
        {
            name: "quinta-feira",
            shortName: "qui"
        },
        {
            name: "sexta-feira",
            shortName: "sex"
        },
        {
            name: "sabado",
            shortName: "sab"
        }


    ]

    useEffect(() => {
        NetInfo.fetch().then(state => {
            setStatusNet(state.isConnected);
        });


    }, [])

    useEffect(() => {

        if (statusNet !== null) loadWeather()

    }, [statusNet])

    async function loadWeather() {

        const lastWeather = getWeather()



        if (statusNet) {
            
            console.log(statusNet)
            await apiWeather.get(`6902/days/15?token=${token}`).then((result) => {


                setDaysArray(result.data.data)
                setCurrentDay(result.data.data[0])

                setId(result.data.id)
                setNameCity(result.data.name)
                setState(result.data.state)

                if (lastWeather.length > 0) {
                    updateWeather(result.data)
                } else {
                    result.data.data.map((day) => {
                        createWeather(
                            result.data.id,
                            result.data.name,
                            result.data.state,
                            day.date,
                            day.date_br,
                            day.text_icon.text.phrase.reduced,
                            day.temperature.max,
                            day.temperature.min,
                            day.wind.velocity_avg,
                            day.rain.precipitation,
                            day.humidity.max
                        )
                    })

                }

            })
        } else if (lastWeather.length > 0) {
            
            console.log('2')
            setId(lastWeather[0].id)
            setNameCity(lastWeather[0].nameCity)
            setState(lastWeather[0].state)

            setDaysArray(lastWeather)
            setCurrentDay(lastWeather[0])

        } else {
            console.log('3')
            alert('Não foi possível buscar os dados. Você está desconectado')
        }
    }

    function loadCurrentDay(index) {
        setCurrentDay(daysArray[index])
    }

    function returnDayWeek(data) {
        const date = new Date(data[2], data[1], data[0], 0, 0, 0, 0)
        return (date.getDay())
    }

    function splitDate(date) {
        const dateSeparate = date.split('/')
        return (dateSeparate)
    }

    return (<View style={{ display: 'flex', flex: 1, position: "relative", backgroundColor: "#7795c1" }}>
        {daysArray && currentDay && <>
            <ScrollView contentContainerStyle={style.container} >
                <Text style={style.cityName}>{nameCity} - {state}</Text>
                <View style={style.divider} />
                <Text style={style.weekDayName}>{weekDays[returnDayWeek(splitDate(currentDay.date_br))].name}</Text>
                <Text style={style.weatherText}>{(currentDay.text_icon && currentDay.text_icon.text.phrase.reduced) || currentDay.phraseWeather}</Text>


                <View style={style.weatherInfoContainer}>

                    <View style={[style.infoRow, { marginBottom: 30 }]}>

                        <View style={style.infoRow}>
                            <Icon name="temperature-high" size={20} color="rgba(255,255,255,0.7)" />
                            <Text style={style.temperature}>{(currentDay.temperature && currentDay.temperature.max) || currentDay.temperature_max}</Text>
                        </View>

                        <View style={style.infoRow}>
                            <Icon name="temperature-low" size={20} color="rgba(255,255,255,0.7)" />
                            <Text style={style.temperature}>{(currentDay.temperature && currentDay.temperature.min) || currentDay.temperature_min}</Text>
                        </View>

                    </View>

                    <View style={[style.infoRow, { marginBottom: 20 }]}>
                        <Icon name="wind" size={20} color="rgba(255,255,255,0.7)" />
                        <Text style={style.moreDatails}>{(currentDay.wind && currentDay.wind.velocity_avg) || currentDay.wind}km/h</Text>
                    </View>

                    <View style={[style.infoRow, { marginBottom: 20 }]}>
                        <Icon name="cloud-rain" size={20} color="rgba(255,255,255,0.7)" />
                        <Text style={style.moreDatails}>{(currentDay.rain && currentDay.rain.precipitation) || currentDay.precipitation}mm</Text>
                    </View>

                    <View style={style.infoRow}>
                        <Icon name="tint" size={20} color="rgba(255,255,255,0.7)" />
                        <Text style={style.moreDatails}>{(currentDay.humidity && currentDay.humidity.max) || currentDay.humidity_max}%</Text>
                    </View>

                </View>
            </ScrollView>
            <ScrollView horizontal contentContainerStyle={style.datesContainer}>
                {
                    daysArray.map((day, index) => {
                        const dateSeparate = splitDate(day.date_br)
                        return (
                            <View key={index} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                <TouchableOpacity

                                    onPress={() => loadCurrentDay(index)}
                                    style={style.date}>
                                    <View>
                                        <Text style={[style.dayDate, currentDay.date_br === daysArray[index].date_br && style.dayDateSelected]}>{dateSeparate[0] }</Text>
                                        <View style={style.divider} />
                                        <Text style={[style.dayDate, currentDay.date_br === daysArray[index].date_br && style.dayDateSelected]}>{dateSeparate[1]}</Text>
                                    </View>
                                    {currentDay.date_br !== daysArray[index].date_br && <Text style={style.weekDayShort}>{weekDays[returnDayWeek(dateSeparate)].shortName}</Text>}

                                </TouchableOpacity>
                                {daysArray.length < index || true && <View style={style.dividerVertical} />}
                            </View>
                        )
                    })
                }

            </ScrollView>
        </>
        }
    </View>
    )
}

export default Home


const style = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",

        paddingHorizontal: 30,
        paddingBottom: 30,
        paddingTop: 15

    },
    cityName: {
        fontSize: 22,
        fontWeight: "500",
        color: "#FFFFFF",
        letterSpacing: 2,
        textTransform: "uppercase",
        marginBottom: 15

    },
    weekDayName: {
        color: "#FFFFFF",
        letterSpacing: 2,
        fontSize: 20,
        marginTop: 15
    },
    weatherText: {
        marginVertical: 15,
        fontSize: 15,
        fontWeight: "500",
        color: "#FFFFFF",
        letterSpacing: 2,
        textAlign: "justify"

    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.7)"

    },
    dividerVertical: {
        borderRightWidth: 1,
        borderRightColor: "rgba(255,255,255,0.7)",
        width: 1,
        height: 60,
        marginRight: 10,
        alignSelf: "center"
    },
    weatherInfoContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 20,
        marginVertical: 15,
        padding: 30

    },
    temperature: {
        fontSize: 35,
        letterSpacing: 2,
        color: "#FFFFFF",
        marginRight: 30,
        marginLeft: 10

    },
    moreDatails: {
        fontSize: 20,
        color: "#FFFFFF",
        letterSpacing: 2,
        marginLeft: 10

    },
    infoRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",

    },
    datesContainer: {
        alignSelf: "flex-end",
        zIndex: 3,
        paddingLeft: 30,
        marginTop: 15,
        marginBottom: 15,
        alignItems: "flex-start"
    },
    date: {
        marginRight: 10,
        letterSpacing: 2,
        alignItems: "center"

    },
    dayDate: {

        color: "rgba(255, 255, 255, 0.7)",
        fontSize: 35,

    },
    dayDateSelected: {
        color: "#FFFFFF",
        fontSize: 40
    },
    weekDayShort: {
        color: "rgba(255, 255, 255, 0.7)",
        fontSize: 12,
        letterSpacing: 3,

        marginTop: -9


    }
})
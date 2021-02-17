
import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'


import { apiSearch, token } from '../../services/api'


const Search = () => {

    const [cities, setCities] = useState(null)
    const [city, setCity] = useState(null)
    const [load, setLoad] = useState(false)


    async function searchCities(cityName) {

        await apiSearch.get('', { params: { name: cityName, token: token } }).then((result) => {
            setCities(result.data)
            setLoad(false)
            saveSearch(result.data)
        })
    }

    function saveSearch(resultSearch) {
        const date = new Date()
        const day = String(date.getDate()).padStart(2,"0")
        const month = String(date.getMonth()+1).padStart(2,"0")
        const year = date.getFullYear()

        // resultSearch.map((rs) => {
        //     addSearchCity(rs.name, rs.id, rs.state, `${year}-${month}-${day}`, `${day}/${month}/${year}`)
        // })

    }

    return <View style={style.container} >
        <View style={style.containerSearch}>
            <Text style={style.title}>pesquisar cidades</Text>
            <View style={style.containerInput}>
                <TextInput style={style.input} placeholder="pesquisar" placeholderTextColor="rgba(255, 255, 255, 0.7)" onChangeText={(text) => setCity(text)} />
                <TouchableOpacity
                    style={style.buttonInput}
                    onPress={() => {
                        searchCities(city)
                        setLoad(true)
                    }}
                    disabled={city === '' || city === null}>

                    <Icon name="search" size={20} color="rgba(255,255,255,0.7)" />
                </TouchableOpacity>
            </View>
            <View style={style.divider} />
        </View>
        {!load && cities &&
            <ScrollView >
                {cities.slice(0, 15).map((city, index) => {

                    return (
                        <View key={city.id} style={style.containerCity}>
                            <Text style={style.infoCity}>{city.name} - {city.state}</Text>

                        </View>
                    )
                })}
            </ScrollView>}

        {load && <Text style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, letterSpacing: 2 }}>Carregando ...</Text>}
    </View>
}

export default Search

const style = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#7795c1",
        padding: 30,
        paddingTop: 15,
        display: "flex",
        flex: 1
    },
    containerSearch: {
        alignSelf: "flex-start",
        zIndex: 3,
    },
    title: {
        fontSize: 22,
        fontWeight: "500",
        color: "#FFFFFF",
        letterSpacing: 2,
        textTransform: "uppercase",
    },
    containerInput: {
        width: "100%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        marginVertical: 15
    },
    input: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        width: "80%",
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        padding: 15,
        color: "#FFFFFF",
        fontSize: 18

    },
    buttonInput: {
        display: "flex",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        width: "20%",
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    containerCity: {
        width: "100%",
        height: "auto",
        padding: 15,
        marginBottom: 15,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",

    },
    infoCity: {
        fontSize: 15,
        letterSpacing: 2,
        color: "#FFFFFF"
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.7)",
        marginBottom: 15
    }
})
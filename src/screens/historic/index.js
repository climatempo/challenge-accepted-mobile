
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import {useNavigation} from "@react-navigation/native"
import Icon from 'react-native-vector-icons/FontAwesome5'
import database, { deleteAllSearchCities,getAllSearchCities } from "../../database";




const Historic = () => {

    const navigation = useNavigation()
    const [cities, setCities] = useState(null)
    const [load, setLoad] = useState(true)


    useEffect(()=>{
        setCities(getAllSearchCities().sorted('searchDate', true))
        setLoad(false)
    },[])

    useEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={()=>{deleteSearchCities()}}>
                  <Icon name="trash-alt" size={20} color="rgba(255,255,255,0.7)" style={{ marginRight: 30 }} />
                </TouchableOpacity>
              )
        })
    },[])

    function deleteSearchCities(){
        deleteAllSearchCities()
        setCities(null)
    }

    return <View style={style.container} >
        <View style={style.containerSearch}>
            <Text style={style.title}>cidades pesquisadas</Text>

            <View style={style.divider} />
        </View>
        {!load && cities &&
            <ScrollView >
                {cities.map((city, index) => {

                    return (
                        <View key={index} style={style.containerCity}>
                            
                                <Text style={style.infoCity}>{city.nameCity} - {city.state}</Text>
                                
                            
                            <Text style={style.date}>{city.searchDate_br}</Text>
                        </View>
                    )
                })}
            </ScrollView>}

        {load && <Text style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, letterSpacing: 2 }}>Carregando ...</Text>}
    </View>
}

export default Historic


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
        width: "100%"
    },
    title: {
        fontSize: 22,
        fontWeight: "500",
        color: "#FFFFFF",
        letterSpacing: 2,
        textTransform: "uppercase",

    },
    containerCity:{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        width: "100%",
        height: "auto",
        padding: 15,
        marginBottom: 15,
        borderRadius: 20,
    },
    infoCity: {
        fontSize: 18,
        letterSpacing: 2,
        color: "#FFFFFF",
        
    },
    date:{
        fontSize: 12,
        letterSpacing: 2,
        color: "rgba(255,255,255,0.7)",
        marginTop:2

    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.7)",
        marginVertical: 15
    }
})
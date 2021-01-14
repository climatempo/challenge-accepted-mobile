import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, Card } from 'react-native-paper';
import axios from 'axios'
import CardDia from './CardDia'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TOKENAPI } from '../utils'

const CityHome = (props) => {

    const [cidade, setCidade] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState({ hasError: false, message: '' })

    useEffect(() => {
        getDataFetch()
    }, [props.route.params])



    const getDataFetch = async () => {

        const { idLocale } = props.route.params

        try {
            const { data } = await axios.get(`http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${idLocale}/days/15?token=${TOKENAPI}`)
            await AsyncStorage.setItem('idCidade', JSON.stringify(idLocale))
            setCidade(data)
            setLoading(false)
        } catch (error) {
            const { data } = await axios.get(`http://apiadvisor.climatempo.com.br/api/v1/locale/city/${idLocale}?token=${TOKENAPI}`)
            setError({ hasError: true, message: `Sem permissão para localizar as informações da cidade de ${data.name}/${data.state} ! Tente Lins-SP` })
            setLoading(false)
            console.log('Deu erro: ' + error)
        }
    }


    return (
        <>
            {error.hasError ?
                <View style={styles.container}>
                    <Title style={styles.errormsg}>{error.message}</Title>
                </View>
                :
                !loading ?

                    <View style={styles.container}>
                        <Card>
                            <Title style={styles.title}>{cidade.name}/{cidade.state}</Title>
                        </Card>
                        <ScrollView>
                            {cidade.data.map(dia => (
                                <CardDia dia={dia} key={dia.date} />
                            ))}
                        </ScrollView>
                    </View>

                    :

                    <Title>Carregando...</Title>
            }
        </>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        textAlign: 'center'
    },
    errormsg: {
        marginTop: 5,
        textAlign: 'justify'
    }
});

export default CityHome
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ScrollView } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import axios from 'axios'
import { TOKENAPI } from '../utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from '../public/searchStyle'
const Search = ({ navigation }) => {
    const [cidade, setCidade] = useState('')
    const [cidades, setCidades] = useState([])
    const [loading, setLoading] = useState(false)
    const [cidPesquisadas, setcidPesquisadas] = useState([])

    useEffect(() => {

        const hasPastCity = async () => {

            let idCidade = await AsyncStorage.getItem('idCidade')
            if (idCidade !== null) {
                idCidade = JSON.parse(idCidade)
                navigation.navigate('Cidade', { idLocale: idCidade })
            }
        }
        hasHistory();
        hasPastCity();
    }, [])

    const hasHistory = async () => {

        let historys = await AsyncStorage.getItem('history');
        if (historys !== null) {
            setcidPesquisadas(JSON.parse(historys))
            console.log('History Storage:' + historys)
        }
    }


    const saveHistory = async () => {
        setcidPesquisadas(cidPesquisadas => [...cidPesquisadas, cidade]);
        console.log('Cid Pesquisadas aqui: ' + cidPesquisadas)
        await AsyncStorage.setItem('history', JSON.stringify(cidPesquisadas));
        let historys = await AsyncStorage.getItem('history');
        let arr = []
        if (historys !== null) {
            arr.push(JSON.parse(historys))
            console.log('After Save: ' + arr)
        }
    }

    const fetchLocales = async () => {
        setLoading(true)
        await saveHistory();
        const { data } = await axios.get(`http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${cidade}&token=${TOKENAPI}`)

        if (data) {
            setCidades(data)
            setLoading(false)
        }
    }

    const History = () => {
        return (
            <>
                {
                    cidPesquisadas.map(item => (
                        <View key={item} style={styles.row}>
                            <Text style={styles.searchItem}>{item}</Text>
                            <Button color={'white'} style={styles.buttonDelete} onPress={() => removeFilter(item)}>Deletar</Button>
                        </View>
                    )
                    )
                }
            </>
        )
    }

    const removeFilter = (strFilter) => {
        var array = [...cidPesquisadas]
        var index = cidPesquisadas.findIndex(x => x == strFilter)
        if (index !== -1) {
            array.splice(index, 1)
            setcidPesquisadas(array)
        }
    }

    const removeFilterAll = async () => {
        await AsyncStorage.removeItem('history')
        setcidPesquisadas([])
        alert('Histórico Apagado!')
    }

    const goToCity = async (item) => {
        setCidade(item.name)
        navigation.navigate('Cidade', { idLocale: item.id })
        console.log('ID: ' + item.id)
    }


    const renderItem = ({ item }) => {
        return (
            <Card style={styles.card} onPress={() => goToCity(item)}>
                <Text style={styles.font20}>{item.name} - {item.state}</Text>
            </Card>
        )
    }


    return (
        <View style={styles.container}>
            <TextInput
                label="Nome da cidade"
                value={cidade}
                onChangeText={text => setCidade(text)} />
            <Button mode="contained" style={styles.buttonPesq} color="#932ad4" onPress={() => fetchLocales()}>
                Pesquisar
            </Button>

            {loading ? <Text>Carregando...</Text> :

                <View>
                    <Text style={styles.font20}>Histórico de pesquisa:</Text>
                    <ScrollView>
                        <History />
                        <Button color={'white'} style={styles.buttonDeleteAll} onPress={() => removeFilterAll()}>APAGAR TODOS</Button>

                    </ScrollView>

                    <Text style={styles.font20}>Resultados encontrados:</Text>
                    <FlatList
                        data={cidades}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            }
        </View>
    );
};


export default Search;

import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    StatusBar,
} from 'react-native';
import {CardList} from '../../components/CardList';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerScreenProps} from '@react-navigation/drawer';
import AutoComplete from 'react-native-autocomplete-input';
import {ApplicationState} from '../../../store';
import {bindActionCreators, Dispatch} from 'redux';
import * as cityActions from '../../../store/reducer/city/actions';
import * as forecastActions from '../../../store/reducer/forecast/actions';
import {City} from '../../../model/city/City';
import {ForecastItem} from '../../../model/forecast/ForecastItem';

interface StateProps {
    cities: City[];
    cityName: string;
    items: ForecastItem[];
    isLoading: boolean;
    error: boolean;
}
interface DispatchProps {
    searchRequest(query: string): void;
    loadRequest(id: number): void;
    loadLocalStorageRequest(): void;
}

export type Props = StateProps & DispatchProps & DrawerScreenProps<{}>;

export const Home: React.FC<Props> = ({
    navigation,
    cities,
    cityName,
    isLoading,
    error,
    items,
    searchRequest,
    loadRequest,
    loadLocalStorageRequest,
}) => {
    useEffect(() => {
        loadLocalStorageRequest();
    }, [loadLocalStorageRequest]);
    const [nomeCidade, setNomeCidade] = useState('');
    const [hideAutocomplete, setHideAutocomplete] = useState(true);
    const handleAutocompleteChange = (text: string) => {
        if (text.length <= 3) {
            setHideAutocomplete(true);
        } else {
            setHideAutocomplete(false);
            searchRequest(text);
        }
    };
    const handlePressCity = (city: City) => {
        setNomeCidade(city.name);
        loadRequest(city.id);
        setHideAutocomplete(true);
    };
    return (
        <>
            <StatusBar backgroundColor="#181818" barStyle="default" />
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => navigation.openDrawer()}>
                            <Icon name="menu-outline" size={40} color="#fff" />
                        </TouchableOpacity>
                        <View style={styles.viewInput}>
                            <AutoComplete
                                testID="inputSearch"
                                onChangeText={handleAutocompleteChange}
                                hideResults={hideAutocomplete}
                                onBlur={() => setHideAutocomplete(true)}
                                data={cities}
                                defaultValue={nomeCidade}
                                containerStyle={styles.autocompleteContainer}
                                style={styles.input}
                                listStyle={styles.listInput}
                                placeholder="Busca"
                                flatListProps={{
                                    keyExtractor: (item) => item.id.toString(),
                                }}
                                renderItem={({item}) => (
                                    <TouchableOpacity
                                        style={styles.touchable}
                                        onPress={() => handlePressCity(item)}>
                                        <Text style={styles.textTouchable}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>
                    {cityName ? (
                        <Text style={styles.h4}>{cityName}</Text>
                    ) : (
                        <></>
                    )}
                    {error ? (
                        <Text style={styles.error}>
                            Erro ao pesquisar cidade
                        </Text>
                    ) : (
                        <></>
                    )}
                    {isLoading ? <Text>Carregando</Text> : <></>}
                    <CardList items={items} />
                </View>
            </View>
        </>
    );
};

const mapStateToProps = (state: ApplicationState) => ({
    cities: state.city.data,
    cityName: state.forecast.data.city,
    items: state.forecast.data.items,
    isLoading: state.forecast.loading,
    error: state.forecast.error,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({...cityActions, ...forecastActions}, dispatch);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181818',
        flex: 1,
        paddingTop: 5,
    },
    body: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
    },
    input: {
        height: 40,
        color: '#fff',
    },
    viewInput: {
        marginRight: 5,
        width: '80%',
    },
    h4: {
        marginTop: 10,
        marginBottom: 5,
        color: '#fff',
        fontSize: 25,
    },
    error: {
        marginTop: 10,
        marginBottom: 5,
        color: '#f20',
        fontSize: 25,
    },
    listInput: {
        paddingTop: 5,
        marginLeft: '0%',
        marginRight: '0%',
    },
    touchable: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    textTouchable: {
        fontSize: 20,
        color: '#fff',
    },
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

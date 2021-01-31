import React from 'react';
import {View, StyleSheet, StatusBar, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HistoricCard from '../../components/HistoricCard';
// import { Container } from './styles';

const Historic: React.FC = ({navigation}) => {
    return (
        <>
            <StatusBar backgroundColor="#181818" barStyle="default" />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.header}>
                        <Icon
                            name="menu-outline"
                            size={40}
                            color="#fff"
                            onPress={() => navigation.openDrawer()}
                        />
                    </View>
                    <Text style={styles.h4}>Histórico de Pesquisa</Text>
                    <HistoricCard />
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#181818',
    },
    body: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        marginLeft: 20,
        flexDirection: 'row',
        alignSelf: 'stretch',
    },
    h4: {
        color: '#fff',
        fontSize: 25,
    },
});
export default Historic;

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HistoricCard: React.FC = () => {
    return (
        <View style={styles.card}>
            <View style={styles.divCard}>
                <View style={{width: '85%'}}>
                    <Text style={styles.h4}>Osasco - SP</Text>
                </View>
                <View style={styles.btnSearch}>
                    <Icon name="search-outline" color="#38cf1a" size={35} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '80%',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        borderRadius: 15,
        backgroundColor: '#303030',
    },
    textColor: {
        color: '#fff',
    },
    divCard: {
        flexDirection: 'row',
    },
    btnSearch: {
        width: '15%',
        borderRadius: 7,
        marginRight: 3,
        paddingLeft: 3,
        maxHeight: 40,
    },
    h4: {
        paddingTop: 5,
        fontSize: 20,
        color: '#fff',
    },
});
export default HistoricCard;

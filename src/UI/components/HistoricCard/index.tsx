import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Historic} from '../../../model/historic/Historic';

interface OwnProps {
    historicItem: Historic;
}
const HistoricCard: React.FC<OwnProps> = ({historicItem}) => {
    return (
        <View style={styles.card}>
            <View style={styles.divCard}>
                <View>
                    <Text style={styles.h4}>{historicItem.name}</Text>
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

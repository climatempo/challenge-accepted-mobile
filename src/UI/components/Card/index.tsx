import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';

const Card: React.FC = () => {
    return (
        <View style={styles.card}>
            <Text style={(styles.title, styles.textColor)}>30/05/2001</Text>
            <Text style={(styles.subTitle, styles.textColor)}>
                Sol com muitas nuvens durante o dia. Períodos de nublado, com
                chuva a qualquer hora
            </Text>
            <View style={styles.divCard}>
                <View style={styles.divIcon}>
                    <Icon name="arrow-up-outline" size={40} color="#fff" />
                    <Text style={styles.textIcons}>20°</Text>
                </View>
                <View style={styles.divIcon}>
                    <IconSimple name="drop" size={40} color="#fff" />
                    <Text style={styles.textIcons}>10mm</Text>
                </View>
            </View>
            <View style={styles.divCard}>
                <View style={styles.divIcon}>
                    <Icon name="arrow-down-outline" size={40} color="#fff" />
                    <Text style={styles.textIcons}>20°</Text>
                </View>
                <View style={styles.divIcon}>
                    <Icon name="umbrella-outline" size={40} color="#fff" />
                    <Text style={styles.textIcons}>50%</Text>
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
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '80%',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        borderRadius: 15,
        backgroundColor: '#303030',
    },
    title: {
        fontSize: 18,
    },
    subTitle: {
        fontSize: 14,
    },
    textColor: {
        color: '#fff',
    },
    divCard: {
        flexDirection: 'row',
    },
    divIcon: {
        marginTop: 10,
        width: '50%',
        flexDirection: 'row',
    },
    textIcons: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 20,
        color: '#fff',
    },
});
export default Card;

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Fontisto';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import {ForecastItem} from '../../../model/forecast/ForecastItem';

interface OwnProps {
    forecastItem: ForecastItem;
}

const Card: React.FC<OwnProps> = ({forecastItem}) => {
    return (
        <View style={styles.card}>
            <View style={styles.divTitle}>
                <Text style={styles.title}>{forecastItem.date}</Text>
                <View style={styles.titleIcon}>
                    <IconF name="wind" size={30} color="#fff" />
                    <Text style={styles.textIcons}>
                        {forecastItem.windVelocity} km/h
                    </Text>
                </View>
            </View>
            <Text style={styles.subTitle}>{forecastItem.text}</Text>
            <View style={styles.divCard}>
                <View style={styles.divIcon}>
                    <Icon name="arrow-up-outline" size={35} color="#fff" />
                    <Text style={styles.textIcons}>
                        {forecastItem.temperatureMax}° C
                    </Text>
                </View>
                <View style={styles.divIcon}>
                    <IconSimple name="drop" size={35} color="#fff" />
                    <Text style={styles.textIcons}>
                        {forecastItem.humidity}mm
                    </Text>
                </View>
            </View>
            <View style={styles.divCard}>
                <View style={styles.divIcon}>
                    <Icon name="arrow-down-outline" size={35} color="#fff" />
                    <Text style={styles.textIcons}>
                        {forecastItem.temperatureMin}° C
                    </Text>
                </View>
                <View style={styles.divIcon}>
                    <Icon name="umbrella-outline" size={35} color="#fff" />
                    <Text style={styles.textIcons}>{forecastItem.rain}%</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        borderRadius: 15,
        backgroundColor: '#303030',
    },
    title: {
        fontSize: 20,
        color: '#fff',
    },
    subTitle: {
        fontSize: 15,
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
        marginTop: 3,
        marginLeft: 10,
        fontSize: 20,
        color: '#fff',
    },
    divTitle: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
    },
    titleIcon: {
        flexDirection: 'row',
        marginBottom: 10,
    },
});
export default Card;

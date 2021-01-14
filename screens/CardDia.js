import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { Title, Card, Paragraph, Divider } from 'react-native-paper';
import styles from '../public/cardDiaStyle'
const CardDia = (props) => {
    return (
        <>
            <Card>
                <Card.Content>

                    <Title style={styles.title}>Dia: {props.dia.date_br}</Title>
                    <Paragraph style={styles.title}>{props.dia.text_icon.text.pt}</Paragraph>
                    <Title style={styles.titleSection}>Temperatura</Title>
                    <View style={styles.container}>
                        <View style={styles.column}>
                            <Text style={styles.seletor}>Máxima: {props.dia.temperature.min}ºC</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.seletor}>Mínima: {props.dia.temperature.max}ºC</Text>
                        </View>
                    </View>
                    <Title style={styles.titleSection}>Velocidade do Vento</Title>
                    <View style={styles.container}>
                        <View style={styles.column}>
                            <Text style={styles.seletor}>Máxima: {props.dia.wind.velocity_min} km/h</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.seletor}>Mínima: {props.dia.wind.velocity_max} km/h</Text>
                        </View>
                    </View>
                    <Title style={styles.titleSection}>Volume da chuva</Title>
                    <View style={styles.container}>
                        <View style={styles.column}>
                            <Text style={styles.seletor}>{props.dia.rain.precipitation} mm</Text>
                        </View>
                    </View>
                    <Title style={styles.titleSection}>Humidade Relativa</Title>
                    <View style={styles.container}>
                        <View style={styles.column}>
                            <Text style={styles.seletor}>Máxima: {props.dia.humidity.max}%</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.seletor}>Mínima: {props.dia.humidity.min}%</Text>
                        </View>
                    </View>

                </Card.Content>
            </Card>
            <Divider />
        </>
    )
}



export default CardDia
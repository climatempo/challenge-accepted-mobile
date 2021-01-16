import React from 'react'

import { View, Text } from 'react-native';

import styles from './styles'

export default function WeatherContainer() {
  return (
    <View style={styles.container}>
      <View style={styles.forecastInfo}>
        <Text style={{ fontSize: 18 }}>Sem previsões para esta localidade</Text>
      </View>
    </View>
  )
}

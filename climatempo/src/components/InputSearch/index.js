import React, { useState } from 'react'

import { View, TextInput, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

import searchIcon from '../../assets/search.png'

export default function InputSearch() {
  const [location, setLocation] = useState('')

  function searchForecast() {
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquise uma cidade"
        onChangeText={value => setLocation(value)}
      />
      <TouchableOpacity
        style={styles.searchButton}
        activeOpacity={0.4}
        onPress={() => searchForecast(location)}
      >
        <Image source={searchIcon} resizeMode="cover" />
      </TouchableOpacity>
    </View>
  )
}

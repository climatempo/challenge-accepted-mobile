import React from 'react'

import { View, Image } from 'react-native';

import styles from './styles'

import logo from '../../assets/logo-white.png'

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
    </View>
  )
}

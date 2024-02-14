import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'

export default function HomeScreen() {
  return (
    <View style={{paddingTop:40, marginLeft:15,}}>
    {/* Header Section */}
      <Header/>
      <View style={{padding:10,}}>
    {/* Slider Section */}
      <Slider/>
      {/* Categories */}
      <Categories/>
      </View>
    </View>
  )
}
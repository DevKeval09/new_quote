import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import { useFonts } from 'expo-font';
import BusinessList from './BusinessList'

export default function HomeScreen() {
  return (
    <View style={{paddingTop:35, marginLeft:10,}}>
    {/* Header Section */}
      <Header/> 
      <View style={{padding:10,}}>
    {/* Slider Section */}
      <Slider/>
      {/* Categories */}
      <Categories/>
      {/* <BusinessList/> */}
      </View>
    </View>
  )
}
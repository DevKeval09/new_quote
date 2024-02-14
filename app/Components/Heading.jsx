import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({text,isViewAll=false}) {
return (
    <View style={styles.container}>
    <Text style={styles.heading}> {text}</Text>
    {isViewAll&& <Text style={{paddingBottom:10}}> View All    </Text>}
    </View>
)
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    heading: {
    color: "black", 
    fontSize: 27, 
    fontFamily:"Outfit-medium"
    },
});
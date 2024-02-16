import { View, Text,StyleSheet, FlatList,Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import GlobalApi from '../../Utils/GlobalApi'

      export default function Slider() {
        const[Slider,setSlider]=useState([]);
        useEffect(()=>{
            getsliders();
        },[])
        const getsliders=()=>{
          GlobalApi.getSlider().then(resp=>{
            console.log("resp",resp.sliders);
            setSlider(resp?.sliders);
          })
        }

    return (
      <View>
        <Text style={styles.heading}>Offers For You</Text>
        <FlatList 
          data={Slider}
          horizontal='true'
          renderItem={({item ,index })=>(
            <View>
              <Text>
              {item.name}</Text>
              <Image  source={{uri:item?.Image?.url}} 
                style={{height:150,width:280,borderRadius:10}}
              />
            </View>

          )}
        
        
        />
      </View>
  )
}
const styles = StyleSheet.create({
  heading: {
    fontSize :20 ,
  },
  sliderImage:{
    height:150,
    width:270,
    borderRadius:20,
    objectFit:'contain' ,
  },
})

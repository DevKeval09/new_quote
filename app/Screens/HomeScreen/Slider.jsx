import { View, Text,StyleSheet, FlatList,Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';

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
        <Heading text={'Offers For You'}/>
        <FlatList 
          data={Slider}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item,index})=>(
            <View style={{marginRight:20}}>
              <Image source={{uri:item?.image?.url}} 
                style={styles.sliderImage}
              />
            </View>
          )}
        />
      </View>
    )
}
const styles = StyleSheet.create({
  heading: {
    fontSize :20     
  },
  sliderImage:{
    height:150,
    width:200,
    borderRadius:20,
    objectFit:'contain' ,
  },
})

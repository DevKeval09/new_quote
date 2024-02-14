import { View,Image, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";

export default function Slider() {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = () => {
    GlobalApi.getslider().then((resp) => {
      console.log("resp", resp.sliders);
      setSlider(resp?.sliders);
    });
  };
  return (
    <View>
      <Heading text={'Offers For You'}/>
      <FlatList
        data={slider}
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
      <View style={{paddingTop:10, paddingRight:-10}}>
      <Text
        style={{ color: "black", fontSize: 27, fontFamily: "Outfit-medium" }}>
        Categories
      </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "black", fontSize: 27, fontFamily: "Outfit-medium" 
  },
  sliderImage:{
    width:230,
    height:170,
    borderRadius:20,
    objectFit:'contain',
  }
});

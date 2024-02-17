import { View,StyleSheet, Image, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";

export default function Categories() {
    
    const [categories,setCategories]=useState([]);
    useEffect(() => { 
        getcategories();
    },[])

    const getcategories=()=>{
        GlobalApi.getcategories().then(resp=>{
            console.log("Category Response", resp);
            setCategories(resp?.Categories);
    })
    }
    return (
    <View>
        <Heading text={"Categories"} isViewAll={true}/>
        <FlatList 
            data={categories}
            renderItem={({item,index})=>(
                <View>
                    <View style={styles.iconContainer}>
                        <Image  source={{uri:item?.icon?.url}}
                            style={{width:30,height:30}}
                        />
                    </View>
                </View>
            )}
        />
    </View>
);
}
const styles = StyleSheet.create({
    iconContainer:{
        backgroundColor:Colors.LIGHT_GRAY
},
})

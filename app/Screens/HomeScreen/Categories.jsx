import { View, Text,Image, FlatList,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from "../../Components/Heading";
import GlobalApi from '../../Utils/GlobalApi';
import Colors from '../../Utils/Colors';

export default function Categories() {

    const[Categories,setcategories]=useState([]);
    useEffect(()=>{
        getcategories();
    },[])
        const getcategories=()=>{
            GlobalApi.getcategories().then(resp=>{
                console.log(resp)
                setcategories(resp?.Categories);
            })
        }
    return (
    <View>
        <Heading text={"Categories"} isViewAll={true}/>
        <FlatList
        data={Categories}
        renderItem={({item,index})=>( 
        <View>
            <View>
                <Image source={{uri:item?.icon?.url}}
                    style={{width:30, height:30}}
                />
            </View>
        </View>
        )}
        />
    </View>
)
}


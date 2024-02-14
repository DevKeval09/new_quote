import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading'

export default function Categories() {

    const[Category,setCategories]=useState([])
    useEffect(()=>{
        getCategory();
    },[])
    const getCategory=()=>{
        GlobalApi.getCategory().then((resp)=>{
            console.log("resp", resp.categories);
            setCategories(resp?.categories)
        })
    }
    return (
    <View style={{marginBottom:20,padding:-10}}>
        <Heading text={Categories} isViewAll={true}/>
        <FlatList
            data={Categories}
            renderItem={({item,index})=>(
                <View>
                    <View>
                        <Image source={{uri:item?.icon?.url}} 
                            style={{height:30,width:30}}
                        />
                    </View>
                </View>
            )}
        />
    </View>
)
}
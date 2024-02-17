import { View,Image, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';


export default function Categories() {

    const [categories, setCategories] = React.useState([])
        useEffect(()=>{
            getcategories();
        })
    const getcategories=()=>{
        GlobalApi.getcategories().then(resp=>{
            console.log("Category Response", resp)
            setCategories(resp?.Categories);
        })
    }
    return (
    <View>
        <Heading text={'Categories'} isViewAll={true}/>
        <FlatList
            data={Categories}
            renderItem={({item,index})=>(
                <View>
                    <View>
                        <Image source={{uri:item?.icon?.url}}
                            style={{width:30,height:30}}
                        />
                    </View>
                </View>
            )}
        />
    </View>
  )
}
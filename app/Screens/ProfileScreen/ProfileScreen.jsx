import { View, Text,Image,StyleSheet, FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const{user}=useUser();
  const ProfileMenu=[
    {
      id:1,
      name:'Home',
      icon:'home'
    },
    {
      id:2,
      name:'My Booking',
      icon:'bookmark'
    },
    {
      id:1,
      name:'contact-us',
      icon:'mail'
    },
    {
      id:3,
      name:'Logout',
      icon:'log-out',
    }
  ]
  return (
    <View>
      <View style={{paddingTop:40, marginLeft:20,padding:20,backgroundColor:Colors.primary,marginLeft:-20}}>
        <Text style={{fontSize:30,paddingLeft:20,color:Colors.WHITE}}>Profile</Text>
        <View style={{display:'flex',
          justifyContent:'center',
          alignItems:'center',
          padding:20,}}>
          <Image source={{uri:user?.imageUrl}}  style={{height:90,width:90,borderRadius:99}}/>
          <Text style={{
            fontSize:26,marginTop:8,fontFamily:'Outfit-medium', color:Colors.WHITE}}>
          {user.fullName}
          </Text>
          <Text style={{
            fontSize:18,marginTop:8,fontFamily:'Outfit-medium', color:Colors.WHITE}}>
          {user?.primaryEmailAddress.emailAddress}
          </Text>
        </View>
      </View>
      <View style={{padding:70}}>
          <FlatList
          data={ProfileMenu}
          renderItem={({item,index})=>(
            <TouchableOpacity style=
            {{display:'flex',
              flexDirection:'row',
              alignItems:'center',
              gap:20,
              paddingHorizontal:50,
              marginBottom:40}}>
              <Ionicons name={item.icon} size={44} color={Colors.primary} />
              <Text style={{fontFamily:'Outfit-medium',fontSize:20,}}>{item.name}</Text>
            </TouchableOpacity>
          )}
          />
      </View>
    </View>
  )
}


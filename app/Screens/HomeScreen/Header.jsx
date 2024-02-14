import { View, Text,Image,StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
export default function Header() {
    const{user,isLoading}=useUser();

return user&&(
    <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.ProfileMaincontainer}>
            <View style={styles.ProfileContainer}>
                <Image source={{uri:user?.imageUrl}} style={styles.userImage}/>
                <View style={{marginLeft:10,marginTop:20}} >
                    <Text style={{color:Colors.WHITE,fontFamily:'Outfit'}}> Welcome</Text>
                    <Text style={{color:Colors.WHITE, fontSize:20,fontFamily:'Outfit-medium'}}>{user?.fullName}</Text>
                </View>
            </View>
            <FontAwesome name="bookmark-o" size={27} color="white" />
        </View>
        {/* SearchBar Section */}
        <View style={styles.Searchbarcontainer}>
            <TextInput placeholder='Search'
            style={styles.TextInput}/>
            <FontAwesome name="search" 
            style={styles.Searchbtn}
            size={24} color={Colors.primary} />
        </View>
    </View>
)   
}
const styles = StyleSheet.create({
    container:{
        padding:10,
        paddingTop:10,
        backgroundColor:Colors.primary,
        marginLeft:-20,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
    },
    ProfileMaincontainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginRight:10,
    },
    Searchbtn:{
        backgroundColor:Colors.WHITE,
        padding:10,
        borderRadius:8,
    },
    ProfileContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    TextInput:{
        padding:7,
        paddingHorizontal:16,
        backgroundColor:Colors.WHITE,
        borderRadius:8,
        width:'85%',
        fontSize:16,
        fontFamily:'Outfit'
        },
    Searchbarcontainer:{
        marginTop:15,
        display:'flex',
        flexDirection:'row',
        gap:10,
        marginBottom:10,
    },
    userImage:{
        borderRadius:99,
        height:50,
        width:50,
        marginTop:10
    },
})

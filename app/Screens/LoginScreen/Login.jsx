import { StyleSheet, Text,Image, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '.././../Utils/Colors'
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from 'expo-web-browser';


WebBrowser.maybeCompleteAuthSession();

export default function Login() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/login01.png')}
      style={styles.loginImage}
      />
      <View style={styles.subcontainer}>
        <Text style={{fontWeight:'300',
        fontSize:27, color:Colors.WHITE,
        textAlign:'center',}}>
            Let's Find  
            <Text style={{fontWeight:'500'}}>   Professional            Cleaning And Repairing  
            </Text> Service
        </Text>
        <Text style={{fontSize:17,color:Colors.WHITE,textAlign:'center',marginTop:20}}> Best App To Find Services Near You Which Deliver You    a Professional Service!</Text>
      
        <TouchableOpacity style={styles.buttons} 
        onPress={onPress}>
            <Text style={{textAlign:'center',color:Colors.primary,fontSize:17,}}>Let's Get Started</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginImage:{
        width:300,
        height:500,
        marginTop:70,
        borderWidth:4,
        borderColor:Colors.Black,
        borderRadius:15,
    },
    container:{
        alignItems:'center',
    },
    subcontainer:{
        width:'100%',
        backgroundColor:Colors.primary,
        height:'70%',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        padding:20,
    },
    buttons:{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:99,
        marginTop:40,
        
    }
})
import React from "react";
import { View, Text,color} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import BookingScreen from "../Screens/BookingScreen/BookingScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import { FontAwesome } from '@expo/vector-icons';
import Colors from "../Utils/Colors";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (

    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.primary
      
    }}>
        <Tab.Screen name="home" component={HomeScreen} 
        options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginTop:-5}}>Home</Text>
          ),
          tabBarIcon:({color,size})=>
          <FontAwesome name="home" size={size} color={color} />
        }}
        />
        <Tab.Screen name="Booking" component={BookingScreen}
          options={{
            tabBarLabel:({color})=>(
              <Text style={{color:color,fontSize:12,marginTop:-5}}>Booking </Text>
            ),
            tabBarIcon:({color,size})=>
            <FontAwesome name="bookmark" size={size} color={color} />
          }}
        />
        <Tab.Screen name="Profile " component={ProfileScreen} 
            options={{
              tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-5}}>Profile </Text>
              ),
              tabBarIcon:({color,size})=>
              <FontAwesome name="user-circle-o" size={size} color={color} />
            }}
        />
    </Tab.Navigator>
  );
};

export default TabNavigation;

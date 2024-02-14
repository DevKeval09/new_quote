import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./app/Screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./app/Navigations/TabNavigation";
import { registerRootComponent } from 'expo';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Outfit': require('./assets/Fonts/static/Outfit-Regular.ttf'),
    'Outfit-medium': require('./assets/Fonts/static/Outfit-Medium.ttf'),
    'Outfit-bold': require('./assets/Fonts/static/Outfit-Bold.ttf'),
  });
  return (
    <ClerkProvider 
    // tokenCache={tokenCache}    
    publishableKey="pk_test_ZmVhc2libGUtZ3JvdXBlci00Mi5jbGVyay5hY2NvdW50cy5kZXYk">
      <View style={styles.container}>
        <SignedIn>
          {/* <Text>You are Signed in</Text> */}
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop:50,
    // paddingLeft:30,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

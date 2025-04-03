import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { KaushanScript_400Regular } from '@expo-google-fonts/kaushan-script/400Regular';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native-web';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { NewPosts } from './components/NewPosts';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

EStyleSheet.build();

export const Styles = EStyleSheet.create({
  header: {
    layout: {
      // width: "100%",
      height: "6rem",
    },
    heading: {
      fontFamily: "KaushanScript_400Regular",
      fontSize: "2.2rem"
    },
    image: {
      width: "2.5rem",
      height: "2.5rem",
    }
  },
  newPosts: {
    layout: {
      flexDirection: "row",
      width: "100%",
    }
  }

})

const HomeScreen = () => (
  <ScrollView>
    <Header imageUrl={"https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=1200"} />
    <NewPosts />
  </ScrollView>
)

const DiscoverScreen = () => (
  <ScrollView>
  </ScrollView>
)

const ProfileScreen = () => (
  <ScrollView>
  </ScrollView>
)


export default function App() {

  let [fontsLoaded] = useFonts({ KaushanScript_400Regular });
  const Tab = createBottomTabNavigator();

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <SafeAreaView style={{ padding: "1.5rem" }}>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Discover" component={DiscoverScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>

    )
  } else {
    return (
      <AppLoading />
    )
  }
}



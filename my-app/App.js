import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { KaushanScript_400Regular } from '@expo-google-fonts/kaushan-script/400Regular';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native-web';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { NewPosts } from './components/NewPosts';

EStyleSheet.build();

export const Styles = EStyleSheet.create({
  header: {
    layout: {
      width: "100%",
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
      flex:1
    }
  }

})

export default function App() {

  let [fontsLoaded] = useFonts({ KaushanScript_400Regular });


  if (fontsLoaded) {
    return (
      <SafeAreaView style={{ padding: "1.5rem" }}>
        <ScrollView>
          <Header imageUrl={"https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=1200"} />
          <NewPosts />
        </ScrollView>

      </SafeAreaView>
    )
  } else {
    return (
      <AppLoading />
    )
  }
}



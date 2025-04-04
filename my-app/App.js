import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { KaushanScript_400Regular } from '@expo-google-fonts/kaushan-script/400Regular';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native-web';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { NewPosts } from './components/NewPosts';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SinglePost } from './components/SinglePost';

EStyleSheet.build();

export const newPostsImgs = [
  "https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=1200",
]

export const postsImgs = [
  {
    profile: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1200",
    post: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    profile: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1200",
    post: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    profile: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1200",
    post: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    profile: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1200",
    post: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    profile: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1200",
    post: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    profile: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1200",
    post: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    profile: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1200",
    post: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    profile: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1200",
    post: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
]

export const Styles = EStyleSheet.create({
  pageLayout: {
    backgroundColor: "white",
    paddingLeft: "1rem",
  },
  header: {
    layout: {
      height: "6rem",
      backgroundColor: "white",
      paddingRight: "1rem",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    heading: {
      fontFamily: "KaushanScript_400Regular",
      fontSize: "2.2rem"
    },
    image: {
      width: "2.5rem",
      height: "2.5rem",
      borderRadius: "90px"
    }
  },
  newPosts: {
    layout: {
      flexDirection: "row",
      width: "100%",
    },
    story: {
      width: "6rem",
      height: "7.8rem",
      borderRadius: "15px"
    }
  },
  singlePost: {
    layout: {
      marginTop: "2rem"
    },
    image: {
      width: "24rem",
      height: "24rem",
      borderRadius: "15px",
      marginRight: "0.5rem"
    },
    descriptionLayout: {
      flexDirection: "row",
      gap: "1rem",
      alignItems: "center",
      paddingTop: "0.75rem",
      paddingRight: "1rem"
    }
  }
})



export default function App() {

  let [fontsLoaded] = useFonts({ KaushanScript_400Regular });
  const [isFollowed, setIsFollowed] = useState(false);
  const Tab = createBottomTabNavigator();

  if (fontsLoaded) {
    return (
      <NavigationContainer >
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ size, focused }) => {
            const icon = focused
              ? require('./tabBarIconFocused.png')
              : require('./tabBarIcon.png');
            return (
              <Image
                style={{ width: size, height: size }}
                source={icon}
              />
            )
          },
          tabBarStyle: { backgroundColor: "white", border: "none" },
        }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Discover" component={DiscoverScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>

    )
  } else {
    return (
      <AppLoading />
    )
  }
}


const HomeScreen = () => (
  <ScrollView stickyHeaderIndices={[0]} style={Styles.pageLayout}>
    <Header imageUrl={"https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=1200"} />
    <View >
      <NewPosts />
      {postsImgs.map(el => (
        <SinglePost
          post={el.post}
          profile={el.profile}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at odio. "}
        // isFollowed={isFollowed}
        // handleClick={()=>setIsFollowed(!isFollowed)}
        />
      ))}
    </View>

  </ScrollView>
)

const DiscoverScreen = () => (
  <ScrollView stickyHeaderIndices={[0]} style={Styles.pageLayout}>
    <Header imageUrl={"https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=1200"} />
    <View>
      {postsImgs.map(el => (
        <SinglePost
          style={{ marginTop: 0, marginBottom: 32 }}
          post={el.post}
          profile={el.profile}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at odio. "}
        // isFollowed={isFollowed}
        // handleClick={()=>setIsFollowed(!isFollowed)}
        />
      ))}
    </View>
  </ScrollView>
)

const ProfileScreen = () => (
  <ScrollView style={Styles.pageLayout} stickyHeaderIndices={[0]}>
    <Header imageUrl={"https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=1200"} />
    <View >

    </View>
  </ScrollView>
)

import { Image } from "react-native"
import { ScrollView, View, Text } from "react-native"
import { Styles } from "../App"

const newPostsImgs = [
    "https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=1200",
]

export const NewPosts = () => {
    return (
        <View >
            <Text>NEW POSTS</Text>
            <View  style={Styles.newPosts.layout}>
                {newPostsImgs.map((el, index) => (
                    <Image key={index} source={{ uri: el }} style={{ width: "6rem", height: "7.8rem", marginRight: index < newPostsImgs.length - 1 && "0.73rem" }} />
                ))}
            </View>
        </View>

    )
}


import { Image } from "react-native"
import { ScrollView, View, Text } from "react-native"
import { newPostsImgs, Styles } from "../App"

export const NewPosts = () => {
    return (
        <View >
            <Text style={{marginBottom:"0.5rem"}}>NEW POSTS</Text>
            <ScrollView  style={Styles.newPosts.layout} horizontal showsHorizontalScrollIndicator={false}>
                {newPostsImgs.map((el, index) => (
                    <Image key={index} source={{ uri: el }} style={[Styles.newPosts.story,{marginRight: index < newPostsImgs.length - 1 && "0.73rem" }]} />
                ))}
            </ScrollView>
        </View>

    )
}


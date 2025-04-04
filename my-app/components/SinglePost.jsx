import { Image,View,Text,Button } from "react-native";
import { Styles } from "../App";

export const SinglePost = ({username, discover, post, profile, description,isFollowed,handleClick,style }) => (
    <View style={[Styles.singlePost.layout, style]}>
        <Image source={{ uri: post }} style={Styles.singlePost.image}/>
        <View style={Styles.singlePost.descriptionLayout}>
            <Image source={{ uri: profile }} style={Styles.header.image}/>
            <Text>{description}</Text>
            {discover && <Button title={isFollowed ? "Following" : "Follow"} isPressed={handleClick}/>}
        </View>
    </View>
)
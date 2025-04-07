import { Image, View, Text, TouchableOpacity } from "react-native";
import { Styles } from "../App";

export const SinglePost = ({ discover, post, profile, description, isFollowed, handleClick, style }) => (
    <View style={[Styles.singlePost.layout, style]}>
        <Image source={{ uri: post }} style={Styles.singlePost.image} />
        <View style={Styles.singlePost.descriptionLayout}>
            <Image source={{ uri: profile }} style={Styles.header.image} />
            <Text>{description}</Text>
            {discover &&
                <TouchableOpacity onPress={handleClick} style={isFollowed ? Styles.singlePost.button.followed : Styles.singlePost.button} >
                    <Text style={{color: isFollowed ? "#2196F3" : "white"}}>
                        {isFollowed ? "FOLLOWING" : "FOLLOW"}
                    </Text>
                </TouchableOpacity>
            }
            {/* {discover && <Button title={isFollowed ? "Following" : "Follow"} isPressed={handleClick} />} */}
        </View>
    </View>
)
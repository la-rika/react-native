import { Image, Text, View } from "react-native";
import { Styles } from "../App";

export const ProfilePage = ({ imageUrl }) => (
    <>
        <View style={{ alignItems: "center" }}>
            <Image style={Styles.profile.image} source={{ uri: imageUrl }} />
            <Text style={{ fontWeight: 700 }}>gigio_bagigio25</Text>
        </View>
        <View style={Styles.profile.follows.layout}>
            <View style={Styles.profile.follows}>
                <Text style={Styles.profile.follows.title}>300</Text>
                <Text>FOLLOWER</Text>
            </View>
            <View style={Styles.profile.follows}>
                <Text style={{ fontSize: 24, fontWeight: 700 }}>300</Text>
                <Text>FOLLOWING</Text>
            </View>
        </View>
        <View >
            <View style={{flexDirection:"row", justifyContent:"space-between"}} >
                <Text style={{fontWeight:700}}>Username</Text>
                <Text>gigio bagigio </Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between"}} >
                <Text style={{fontWeight:700}}>email</Text>
                <Text>gigiobagigio@yahoo.it </Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between"}} >
                <Text style={{fontWeight:700}}>Date of birth</Text>
                <Text>02/04/2022</Text>
            </View>
        </View>
    </>

)
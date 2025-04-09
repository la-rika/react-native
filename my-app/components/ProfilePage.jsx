import { Image, Text, View } from "react-native";
import { Styles } from "../App";

export const ProfilePage = ({ imageUrl }) => (
    <>
        <View style={{ alignItems: "center" }}>
            <Image style={Styles.profile.image} source={{ uri: imageUrl }} />
            <Text style={{ fontWeight: 700 }}>gigio_bagigio25</Text>
        </View>

        <View style={{ paddingInline: "4rem", gap: "1rem", alignItems: "center", marginTop:"1.5rem" }}>
            <View>
                <Text style={{ fontWeight: 700 ,textAlign:"center" }}>Username</Text>
                <Text>gigio bagigio </Text>
            </View>
            <View>
            <Text style={{ fontWeight: 700,textAlign:"center"  }}>Email</Text>
                <Text>gigiobagigio@yahoo.it</Text>
            </View>
            <View>
                <Text style={{ fontWeight: 700 ,textAlign:"center" }}>Date of birth</Text>
                <Text>02/04/2022</Text>
            </View>
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
    </>

)
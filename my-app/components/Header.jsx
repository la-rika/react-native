import { Text, View } from 'react-native';
import { Image } from 'react-native-web';
import { Styles } from '../App';

export const Header = ({ imageUrl }) =>(
    <View style={Styles.header.layout}>
        <Text style={Styles.header.heading}>InstaMeow</Text>
        <Image style={Styles.header.image} source={{ uri: imageUrl }} />
    </View>
)


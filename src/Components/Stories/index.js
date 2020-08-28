import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import Icon from '../../images/avatar_stories1.jpg'
import styles from './styles'
function Stories({ name, source }){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.stories}>
                <Image style={styles.icon} source={source} />
                <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}
const StoriesList = () =>{
    return(
        <ScrollView horizontal={true}>
            <Stories name="João Pedro" source={Icon} />
            <Stories name="João Pedro" source={Icon} />
            <Stories name="João Pedro" source={Icon} />
            <Stories name="João Pedro" source={Icon} />
            <Stories name="João Pedro" source={Icon} />
            <Stories name="João Pedro" source={Icon} />
        </ScrollView>
    )
}
export default StoriesList
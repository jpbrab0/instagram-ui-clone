import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { SimpleLineIcons, AntDesign,EvilIcons, FontAwesome } from '@expo/vector-icons'; 
import Icon from '../../images/avatar_stories1.jpg'
import PostImage from '../../images/post_image.jpg'
import styles from './styles'

function Post({ name, icon, source, comment }){
    
    return(
        <View style={styles.container}>
            <View style={styles.header} >
                <View style={styles.info}>
                    <TouchableOpacity>
                        <Image style={styles.avatar} source={icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>{name}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <SimpleLineIcons name="options-vertical" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <View>
                    <Image style={styles.postImg} source={source} />
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.actions}>
                    <TouchableOpacity>
                        <AntDesign name="hearto" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <EvilIcons name="comment" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SimpleLineIcons name="paper-plane" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <FontAwesome name="bookmark-o" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.likes}>
                <Image style={styles.avatarLikes} source={icon}/>
                <Text numberOfLines={1}>Curtido por {name} e outras {Math.floor(Math.random() * 50000)} pessoas.</Text>
            </View>
            <View style={styles.comments}>
                <Text style={styles.commentsUser}>{name}:</Text>
                <Text style={styles.commentsText}>{comment}</Text>
            </View>
        </View>
    )
}
function PostsList(){
   return(
       <ScrollView>
           <Post name="João Pedro" icon={Icon} source={PostImage} comment="Que cidade incrivel!!!"/>
           <Post name="João Pedro" icon={Icon} source={PostImage} comment="Que cidade incrivel!!!"/>
           <Post name="João Pedro" icon={Icon} source={PostImage} comment="Que cidade incrivel!!!"/>
           
       </ScrollView>
   )
}
export default PostsList
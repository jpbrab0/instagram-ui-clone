import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        marginTop:16,
        flexDirection:'column',
        marginBottom:16
    },
    avatar:{
        marginLeft:13,
        width:45,
        height:45,
        borderRadius:50,
        marginRight:8
    },
    info:{
        flexDirection:'row',
        alignItems:'center'
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:8
    },
    postImg:{
        marginLeft:3,
        alignItems:'center',
        width:405,
        height:400
    },
    footer:{
        marginTop:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:8,
        width:395,
        marginBottom:8
    },
    actions:{
        flexDirection:'row',
        alignItems:'center'
    },
    avatarLikes:{
        width:33,
        height:33,
        borderRadius:50,
        marginLeft:8,
        marginRight:3,
    },
    likes:{
        flexDirection:'row',
        alignItems:'center'
    },
    comments:{
        marginTop:8,
        flexDirection:'row',
        marginLeft:10
    },
    commentsUser:{
        fontWeight:'bold'
    },
    commentsText:{
        marginLeft:8
    }
})

module.exports = styles
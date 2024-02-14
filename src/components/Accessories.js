import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const Accessories = ({picture,title,sports}) => {
  return (
    <View style={styles.mainContainer}>
    <View style={styles.shapesContainer}>
      <View style={styles.imageContainer}>
        <Image 
            source={picture}
            style={styles.imageStyle}
        />
      </View>
      <View style={styles.titleContainer}>
      <Text style={styles.accessoriesTitle}>
      {title}
      </Text>
      </View>
      <View style={styles.sportsContainer}>
        <Text style={styles.sportsText}>{sports}</Text>
      </View>
      </View>
      </View>
  )
}

export default Accessories

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    shapesContainer:{
        height:155,
        width:75,
        alignItems:'center',
        position:'relative',
        marginHorizontal:wp(3),
    },
    imageContainer:{
        height:75,
        width:75,
        borderRadius:999,
        borderWidth:0.5,
        borderColor:"#FF5733",
        alignItems:'center',
        justifyContent:'center'
    },
    imageStyle:{
        height:45,
        width:50,
        resizeMode:'contain'
    },
    titleContainer:{
        height:50,
        width:80,
        borderWidth:1,
        borderColor:"#FF5733",
        position:'absolute',
        top:55,
        justifyContent:'center',
        backgroundColor:"#fff",
        zIndex:10        
    },
    accessoriesTitle:{
        textAlign:'center',
        fontWeight:'bold',
        color:"#FF5733",
        fontSize:13.1
    },
    sportsContainer:{
        position:'absolute',
        top:120,
    },
  
})
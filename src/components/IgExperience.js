import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const IgExperience = ({picture}) => {
  return (
    <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.imageContainer}>
            <Image 
                source={picture} style={styles.imageStyle}
            />
        </TouchableOpacity>
    </View>
  )
}

export default IgExperience

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        marginLeft:wp(3)
    },
    imageContainer:{
        height:hp(20),
        width:hp(20),
        marginBottom:hp(2)
    },
    imageStyle:{
        height:hp(20),
        width:hp(20),
        resizeMode:'contain'
    }
})
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SportsKit = ({picture,title}) => {
  return (
    <View style={styles.mainContainer}>

      <View style={styles.kitCategory}>
        <View style={styles.sportsImageContainer}>
        <Image 
          source={picture}
          style={styles.sportsImage}
        />
        </View>
        <Text style={styles.sportsNameText}>{title}</Text>
      </View>
    </View>
  )
}

export default SportsKit

const styles = StyleSheet.create({
  mainContainer:{
    marginLeft:wp(3),
    marginRight:wp(3)
  },
  kitCategory:{
    height:hp(16),
    width:wp(24.8)
  },
  sportsImageContainer:{
    padding:2,
    height:hp(12),
    width:wp(20),
    marginBottom:hp(0.7)
  },
  sportsImage:{
    flex:1,
    height:hp(10),
    width:wp(20),
    resizeMode:'contain'
  },
  sportsNameText:{
    alignSelf:'center'
  }
})
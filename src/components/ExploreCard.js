import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ExploreCard = ({title, type, bgcolor}) => {
  return (
    <View style={[styles.card,{backgroundColor:bgcolor}]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardType}>{type}</Text>
    </View>
  )
}

export default ExploreCard

const styles = StyleSheet.create({
  card:{
    height:hp(20),
    width:wp(40),
    marginHorizontal:wp(4.5),
    marginVertical:hp(4),
    justifyContent:'space-evenly',
    alignItems:'center',
    borderRadius:20,
  },
  cardTitle:{
    color:'#fff',
    fontSize:26,
    fontWeight:'bold',
    textAlign:'center'
  },
  cardType:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:12
  }
})
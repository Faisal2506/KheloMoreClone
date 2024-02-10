import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MaterialCommunityIcons} from 'react-native-vector-icons'


const AvailableAcademies = ({title,address,picture,sports}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.address}>{address}</Text>
      <Image 
        source={picture} style={styles.picture}
      />
      <View style={styles.sportsContainer}>
        <MaterialCommunityIcons 
          name="baseball"
          size={10}
          color="#000"
        />
        <Text style={styles.sports}>{sports}</Text>
      </View>
    </View>
  )
}

export default AvailableAcademies

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    padding:wp(2),
    // borderWidth:1
  },
  title: {
    // marginBottom:hp(0)
    fontSize:hp(2)
  },
  picture:{
    height:hp(19),
    borderRadius:wp(4),
    marginTop:hp(1)
  },
  sportsContainer:{
    flexDirection:'row',
    marginTop:hp(1),
    alignItems:'center'
  },
  sports:{
    marginLeft:wp(3)
  }
})
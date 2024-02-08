import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Places = ({title, picture, sportsAvailable, address}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image 
        source={picture} style={styles.imageStyle}/>
      </View>
      <View style={styles.availableContainer}>
        <Text>
          {sportsAvailable}
        </Text>
        <MaterialIcons 
          name="fastfood"
          size={20}
          color="blue"
        />
      </View>
    </View>
  )
}

export default Places

const styles = StyleSheet.create({
  mainContainer:{
    height:hp(37),
    flex:1,
    borderBottomColor:'#999',
    paddingLeft: wp(4),
    paddingTop:hp(2)
  },
  titleContainer:{
    paddingBottom:hp(2)
  },
  title:{
    fontSize:hp(2),
    marginBottom:hp(0.5)
  },
  address:{
    fontSize:hp(1.5),
    color:'#999'
  },
  imageContainer:{
    height:hp(22),
    alignSelf:'center',
    width:wp(100)-70
  },
  imageStyle:{
    height:hp(22),
    width:wp(100)-70
  },
  availableContainer:{
    marginTop:hp(2),
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight: wp(3)
  }
})
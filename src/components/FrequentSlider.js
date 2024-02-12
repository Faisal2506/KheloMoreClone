import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { frequentImages } from '../constants/frequent';
import { FontAwesome6, AntDesign } from 'react-native-vector-icons';
import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

const FrequentSlider = ({picture, heading,details}) => {
  return (
      <View style={styles.frequentCard}>
        <ImageBackground source={picture} style={styles.backgroundImage}>
          <View style={styles.textContainer}>
            <View style={styles.headingContainer}>
              <FontAwesome6 
                name="fire"
                size={10}
                color="#fff"
              />
            <Text style={styles.heading}>{heading}</Text>
            </View>
            <Text style={styles.details}>{details}</Text>
            <View style={{flexDirection:'row',marginTop:wp(3),alignItems:'center'}}>
            <Text style={styles.buyNow}>Buy Now</Text>
            <AntDesign 
              name="rightcircle"
              size={12}
              color="#000"
            />
            </View>
          </View>
        </ImageBackground>
      </View>
  )
}

export default FrequentSlider

const styles = StyleSheet.create({
  frequentCard:{
    height:hp(18),
    width:wp(70),
    marginHorizontal:wp(5),
    // backgroundColor:'red'
  },
  backgroundImage:{
    flex:1,
  },
  textContainer:{
    paddingLeft:wp(3),
    paddingTop:hp(1)
  },
  headingContainer:{
    height: hp(3.5),
    // borderWidth:0.19,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(30),
    borderRadius: wp(1),
    backgroundColor: "#FF5733",
    flexDirection:'row'
  },
  heading:{
    fontWeight:'bold',
    color:'#fff',
    marginLeft:wp(1)
  },
  details:{
    marginTop:hp(3),
    // fontWeight:'bold'
    fontSize:16
  },
  buyNow:{
    marginRight:wp(3),
    fontSize:12,
    color:"#999"
  }
})
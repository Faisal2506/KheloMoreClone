import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign, Ionicons } from 'react-native-vector-icons';

const BestSelling = ({ picture,description,price }) => {
  return (
    <View style={styles.mainContaier}>

        <View style={{
          borderWidth: 0.2, borderColor: 'red',marginBottom:wp(1)
        }}>
          <Image
            source={picture}
            style={styles.productImage}
          />
          <TouchableOpacity style={styles.likeContainer}>
            <AntDesign name="hearto" size={18} color="#000" />
          </TouchableOpacity>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>4.3</Text>
            <AntDesign name="star" size={16} color="#fff" />  
          </View>
        </View>
        <View>
          <Text>{description}</Text>
        </View>
        {/* <View style={styles.priceContainer}>
          <Text>{price}</Text>
          <View style={styles.addContainer}>
            <Ionicons 
              name="bag-outline"
              size={10}
              color="#0096FF"
            />
            <Text>ADD</Text>
          </View>
        </View> */}
    </View>
  )
}

export default BestSelling

const styles = StyleSheet.create({
  mainContaier: {
    marginHorizontal: wp(3),
    height: hp(35),
    width: wp(45),
    borderWidth:1
  },
  productImage: {
    height: hp(25),
    width: wp(45),
    resizeMode: 'contain',
    position: 'relative',
  },
  likeContainer: {
    height: 25,
    width: 25,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: hp(8),
    left: wp(35),
    backgroundColor: '#fff'
  },
  ratingContainer:{
    backgroundColor:"#32CD32",
    height:22,
    width:60,
    position:'absolute',
    flexDirection:'row',
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:6,
    bottom:hp(1),
    left:wp(4),
    borderRadius:3
  },
  ratingText:{
    fontSize:12,
    color:'#fff'
  },
  priceContainer:{
    marginTop:wp(3)
  },
  addContainer:{
    flexDirection:1,

  }
})
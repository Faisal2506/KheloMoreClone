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

        <View style={{marginBottom:wp(1)
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
        <View style={{justifyContent:'space-around',flex:1}}>
        <View>
          <Text>{description}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text>{price}</Text>
          <View style={styles.addContainer}>
            <Ionicons 
              name="bag-outline"
              size={14}
              color="#0096FF"
            />
            <Text style={styles.addText}>ADD</Text>
          </View>
        </View>
        </View>
    </View>
  )
}

export default BestSelling

const styles = StyleSheet.create({
  mainContaier: {
    marginHorizontal: wp(3),
    height: hp(35),
    width: wp(45),
    marginBottom:wp(1)
  },
  productImage: {
    height: hp(22),
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
    marginTop:wp(3),
    flexDirection:'row',
    justifyContent:'space-between'
  },
  addContainer:{
    flexDirection:'row',
    borderWidth:1,
    borderColor:"#0096FF",
    width:wp(16),
    height:hp(3),
    borderRadius:wp(1),
    paddingHorizontal:wp(1),
    alignItems:'center',
    justifyContent:'space-between',
    marginRight:wp(1)
  },
  addText:{
    fontWeight:'bold',
    color:"#0096FF"
  }
})
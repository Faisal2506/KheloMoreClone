import { StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CategoriesCard = (props)=>{
  return(
    <TouchableOpacity style={[styles.titleContainer, props.isFocused && styles.focusedContainer]} onPress={props.onPress}>
      <Text style={[styles.titleText,props.isFocused && styles.focusedText]}>
        {props.title}
      </Text> 
    </TouchableOpacity>
    )
}

export default CategoriesCard;

const styles = StyleSheet.create({
  titleContainer: {
    borderWidth:0.3,
    borderColor:'#999',
    borderRadius: wp(4),
    width:'auto',
    height: hp(4.2),
    padding: hp(0.5),
    paddingLeft:wp(3),
    paddingRight:wp(3),
  },
  titleText: {
    fontSize: hp(2),
    color:'#000'
  },
  focusedText: {
    color:'#fff'
  },
  focusedContainer: {
    backgroundColor: '#FC2E20',
  }
})
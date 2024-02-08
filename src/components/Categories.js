import { StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CategoriesCard = (props)=>{
  return(
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>
        {props.title}
      </Text> 
    </View>
    )
}

export default CategoriesCard;

const styles = StyleSheet.create({
  titleContainer: {
    borderWidth:1,
    borderColor:'#999',
    borderRadius: wp(4),
    width:'auto',
    height: hp(4),
    padding: hp(0.5)
  },
  titleText: {
    color:'#000', 
    fontSize: hp(2)
  }
})
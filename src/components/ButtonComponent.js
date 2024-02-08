import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Button = (props) => {
  return (
    <View style={{alignItems: 'center', marginTop: hp(2)}}>
        <TouchableOpacity style={[styles.button,{...props.style}]} onPress={props.buttonFunction}>
          <Text style={[styles.text,{...props.style}]}>{props.title}</Text>
        </TouchableOpacity>
      </View>
  )
}

export default Button

const styles = StyleSheet.create({
  text: {
    fontSize: hp(3),
    fontWeight: 'bold',
    color: '#fff'
  },
  button: {
    width: wp(90),
    alignItems:'center',
    textAlign: 'center',
    justifyContent: 'center',
    height: hp(7),
    backgroundColor: '#FC2E20',
    borderRadius: wp(4),
    marginBottom: hp(2),
  }
  
})
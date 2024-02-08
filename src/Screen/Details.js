import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Button from '../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Details = () => {
  const navigation = useNavigation();
  const handleGoClick =() => {
    navigation.navigate('HomeScreen');
  }
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>
          We're all set!
        </Text>
      </View>
      <View>
        <TextInput style={[styles.input,{marginTop: hp(3)}]} placeholder='Name'/>
        <TextInput style={[styles.input,{marginBottom:hp(8)}]} placeholder='Email'/>
      </View>
      <Button 
        title = "LET'S GO →"
        buttonFunction = {handleGoClick}
      />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  heading: {
    marginTop: hp(10)
  },
  headingText: {
    fontSize: hp(5),
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    width: wp(90),
    height: hp(7),
    borderRadius: wp(4),
    marginBottom: hp(2.5),
    textAlign: 'center'
  },
})
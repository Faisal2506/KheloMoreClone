import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Linking } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import PrivacyComponent from '../components/PrivacyComponent';
import Button from '../components/ButtonComponent';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
  
const Referral = () => {
  const navigation = useNavigation();
  const handleSubmitClick =()=> {
    navigation.navigate('HomeScreen');
  }
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={{marginTop: 100, alignItems: 'center'}}>
      <View style={styles.heading}>
      <Text style={styles.headingText}>
        Invited by friend?
      </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Enter Referral Code and{"\n"} get ₹500 as Credits
        </Text>
      </View>
      <View style={styles.referralContainer}>
        <TextInput style={styles.referralInput} placeholder='REFERRAL CODE' keyboardType='numeric'/>
      </View>
      <PrivacyComponent />
      <Button 
        title='Submit →'
        buttonFunction = {handleSubmitClick}
      />
      </KeyboardAvoidingView>
    </View>
  )
}

export default Referral

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  heading: {
    alignItems: 'center'
  },
  headingText: {
    fontSize: wp(10),
    fontWeight: 'bold'
  },
  text: {
    textAlign: 'center',
    fontSize: hp(2)
  },
  referralContainer: {
    alignItems: 'center',
  },
  referralInput: {
    borderWidth: 1,
    width:  wp(90),
    height: hp(6),
    borderRadius: wp(4),
    marginBottom: hp(8),
    textAlign: 'center'
  },
  textContainer: {
    alignItems: 'center',
    marginTop: hp(3),
    marginBottom: hp(4),

  },
  hyperlinkStyle: {
    color: '#FC2E20'
  },
  
})
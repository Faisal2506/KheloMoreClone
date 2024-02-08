import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

const OTPVerify = () => {
  const navigation = useNavigation();
  const handleOtpVerifyClick = () => {
    navigation.navigate('DetailsScreen')
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>OTP Verification</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Please enter the OTP sent to {"\n"} +91 9876543210</Text>
      </View>
      <View style={styles.otpInputContainer}>
      <TextInput style={styles.otpInput} keyboardType= 'numeric'/>
      <TextInput style={styles.otpInput} keyboardType= 'numeric'/>
      <TextInput style={styles.otpInput} keyboardType= 'numeric'/>
      <TextInput style={styles.otpInput} keyboardType= 'numeric'/>
      </View>
      <View>
        <Text style={styles.optMsgText}>
          Didn't Recieve OTP? {"\n"} Resend in {''}<Text style={styles.timeStyle}>00:22</Text>
        </Text>
      </View>
      <Button 
        title="Verify →"
        buttonFunction = {handleOtpVerifyClick}
      />
    </View>
  )
}

export default OTPVerify

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  headingContainer: {
    marginTop: hp(9)
  },
  headingText: {
    fontSize: wp(10),
    fontWeight: 'bold'
  },
  textContainer: {
    marginTop: hp(2)
  },
  text: {
    fontSize: wp(4),
    textAlign: 'center',
    lineHeight: hp(3)
  },
  otpInputContainer: {
    flexDirection: 'row'
  },
  otpInput: {
    borderWidth: 1,
    marginTop: hp(5),
    marginRight: wp(4),
    width: wp(14),
    height: hp(7),
    borderRadius: wp(4),
    marginBottom: hp(7)
  },
  timeStyle: {
    color: '#FC2E20',
  },
  optMsgText: {
    textAlign: 'center',
    lineHeight: hp(3)
  }
})
import { StyleSheet, Text, TextInput, View, Linking,TouchableOpacity} from 'react-native'
import React from 'react'
import PrivacyComponent from '../components/PrivacyComponent'
import { useNavigation } from '@react-navigation/native'
import Button from '../components/ButtonComponent'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Login = () => {
  const navigation = useNavigation();
  const handleOTPClick =() => {
    navigation.navigate('OTPScreen')
  }
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>
          Hi there!
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Please enter a 10-digit valid mobile {"\n"}number to recieve OTP
        </Text>
      </View>
      </View>
      <View style={styles.numberContainer}>
      <TextInput 
        style={styles.numberInput}
        placeholder='Mobile Number'
        keyboardType='numeric'
      />
      </View>
      <PrivacyComponent />
      <Button 
        title="GET OTP →"
        buttonFunction ={handleOTPClick}
      />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  heading:{
    marginTop: hp(11),
  },
  headingText: {
    fontSize: hp(4),
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textContainer: {
    alignItems: 'center',
    paddingTop: hp(3),
    marginBottom: hp(6),
  },
  text: {
    textAlign: 'center'
  },
  numberContainer: {
    alignItems: 'center'
  },
  numberInput: {
    borderWidth: 1,
    width: wp(90),
    height: hp(6),
    borderRadius: wp(4),
    textAlign: 'center'
  },
})
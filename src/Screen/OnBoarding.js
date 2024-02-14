import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../components/ButtonComponent';
import ImageSlider from '../components/ImageSlider';
import { sliderImages } from '../constants';


const OnBoarding = () => {
  const navigation = useNavigation();
  const handleStartClick =() => {
    navigation.navigate('LoginScreen')
  }
  const handleReferralClick =() => {
    navigation.navigate('ReferralScreen')
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageSlider 
        data={sliderImages}
      />
      <View style={{marginTop: 0}}>
      <Text style={styles.heading}>Book Sport Venue</Text>
      </View>
      <View style={{alignItems:'center'}}>
      <Text style={styles.text}>
        Get instant access to 1000+ Sport {"\n"}
      Venues at your fingertips.</Text>
      <View style={{marginBottom:10}}>
      <TouchableOpacity onPress={handleReferralClick}>
      <Text style={styles.textReferral}>
        Got a referral code? Click here!!
      </Text>
      </TouchableOpacity>
      </View>
      </View>
      <Button 
      title ="Start →"
      buttonFunction = {handleStartClick}
      />
    </SafeAreaView>
  )
}

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:hp(3)

  },
  heading: {
    fontSize: wp(7),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textReferral: {
    color: 'blue',
    marginTop: hp(3),
  },
  text: {
    marginTop: hp(3),
    textAlign: 'center'
  },
})
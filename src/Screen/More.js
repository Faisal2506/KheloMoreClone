import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MaterialCommunityIcons, Entypo} from 'react-native-vector-icons';
const More = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{position:'absolute', width:wp(100)}}>
      <ImageBackground source={require('../../assets/images/backgroundProfile.jpg')} style={styles.backgroundImage}>
      <View style={styles.profileTop}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/logo/logo1.jpg')} style={styles.imageStyle}
          />
          <Text style={styles.titleText}>KheloMore</Text>
        </View>
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>V 5.5.1</Text>
        </View>
      </View>
      <View style={styles.profileDetails}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../assets/images/avatar03.png')} style={styles.avatarImage}
          />
        </View>
        <View style={styles.userName}>
          <Text style={styles.username}>Faisal</Text>
          <Text style={styles.lastPlayed}>Last Played: Yet to Play</Text>
        </View>
        <View style={styles.viewTextContainer}>
          <Text style={styles.viewText}>
            VIEW
          </Text>
        </View>
      </View>
      <View style={styles.nameAndCoins}>
        <View>
          <View>
            <Text style={styles.khelomoreText}>KheloMore Credits</Text>
            </View>
            <View style={styles.creditsExpiry}>
              <Text style={styles.creditsText}>₹ 300 </Text>
            <Text style={styles.expiryText}>₹ 300 IS EXPIRING ON 21ST FEB</Text>
          </View>
        </View>
        <View style={styles.coinContainer}>
          <Image
            source={require('../../assets/images/coin2.png')} style={styles.coinStyle}
          />
        </View>
      </View>
      </ImageBackground>
      </View>
      <ScrollView style={styles.profileScroll}>
        <View style={styles.profileCompletionContainer}>
          <Text style={styles.profileCompletionText}>
            Profile completion: 10%
          </Text>
        </View>
        <View style={styles.passContainer}>
          <View>
            <Entypo 
              name="ticket" size={10}
            />
            <Text>Your Bookings</Text>
          </View>
          <View><Text>Favourite Venues</Text></View>
          <View><Text>Your KheloMore Pass</Text></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default More;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  profileTop: {
    flexDirection: 'row',
    marginTop: hp(2),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  imageContainer: {
    paddingLeft: wp(4),
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageStyle: {
    height: hp(8),
    width: wp(8),
    objectFit: 'contain'
  },
  titleText: {
    color: '#FC2E20',
    marginLeft: wp(3),
    fontWeight: 'bold'
  },
  versionContainer: {
    marginRight: wp(2)
  },
  versionText: {
    fontSize: hp(2),
  },
  profileDetails: {
    flexDirection: 'row',
  },
  avatarContainer: {
    marginLeft: wp(4),
  },
  avatarImage: {
    height: 80,
    width: 100,
    objectFit: 'contain',
    borderRadius: 999
  },
  userName: {
    marginLeft: wp(2),
    justifyContent: 'center'
  },
  username: {
    fontSize: hp(2),
    marginBottom: 2
  },
  lastPlayed: {
    color: '#999',
    fontSize: hp(1.3),
    fontSize: wp(3)
  },
  viewTextContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: wp(3)
  },
  viewText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  nameAndCoins: {
    marginTop: hp(2.2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(4),
    marginRight: wp(4),
    paddingLeft: wp(2),
    paddingTop: hp(2),
    height: hp(10),
    borderRadius: hp(2),
    // elevation: 100,
    backgroundColor: '#fff',
    zIndex:2
  },
  coinStyle: {
    padding: 0,
    marginRight: wp(3),
    objectFit: 'contain',
    height: 50,
    width: 50
  },
  khelomoreText: {
    fontSize: hp(2),
  },
  creditsExpiry:{
    flexDirection:'row',
    alignItems:'center'
  },
  creditsText: {
    fontSize: hp(2.2),
    fontWeight: 'bold'
  },
  expiryText: {
    borderRadius:10,
    padding: 2,
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: '#FFA280',
    color:'#FF4500'
  },
  backgroundImage: {
    height: hp(30),
    zIndex:1
  },
  profileScroll: {
    marginTop:hp(28),
    backgroundColor:'#999',
    paddingTop: 60,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
  },
  profileCompletionContainer: {
    backgroundColor:'#F2F2F2',
    height: 95,
    marginLeft: wp(4),
    marginRight: wp(4),
    paddingLeft: wp(2),
    paddingTop: hp(2),
    borderRadius: hp(2),
  },
  passContainer:{
    borderWidth:1,
    marginTop:25,
    marginLeft: wp(4),
    marginRight: wp(4),
    height: 160,
    borderRadius: 20
  }
})
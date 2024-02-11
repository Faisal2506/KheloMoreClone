import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CityModal from '../components/CityModal'
import { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import HomeSlider from '../components/HomeSlider';
import { coachingSliderImages } from '../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { availableLocations } from '../constants/AvailableLocation';
import AvailableAcademies from '../components/AvailableAcademies';
import SportsKit from '../components/SportsKit';
import { kits } from '../constants/kits';
import { AntDesign } from 'react-native-vector-icons';
const Coaching = () => {
  const [cityModalVisible, setCityModalVisible] = React.useState(false)
  const handleClick = () => {
    setCityModalVisible(cityModalVisible)
  }
  React.useEffect(() => {
    handleClick()
  }, [])
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CityModal
          modalVisible={cityModalVisible}
          toggleModal={handleClick}
        />
        <TopBar />
        <SearchBar />
        <View style={{ marginTop: hp(2) }}>
          <HomeSlider
            data={coachingSliderImages}
          />
        </View>
        <View style={styles.availableContainer}>
          <Text style={styles.availableText}>Available Societies/Academics{'  '}<Text style={{ fontWeight: 'normal' }}>[41]</Text></Text>
          <Text style={[styles.availableText, { color: '#FC2E20' }]}>VIEW ALL</Text>
        </View>
        {/* <AvailableAcademies title={"Bhartiya City Nikoo Home 1"}/> */}
        <View style={{ flex: 1 }}>
          <FlatList
            data={availableLocations}
            renderItem={({ item }) => <AvailableAcademies title={item.title} address={item.address} picture={item.picture} sports={item.sports} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.kitContainer}>
          <View style={styles.kitTitleContainer}>
            <Text style={styles.kitTitle}>Starter Sports Kit</Text>
            <Text style={[styles.kitTitle, { color: "#FC2E20" }]}>VIEW ALL</Text>
          </View>
          <FlatList
            data={kits}
            renderItem={({ item }) => <SportsKit picture={item.picture} title={item.title} />}
            numColumns={3}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.registerCard}>
          <View>
            <Text style={[styles.text,styles.heading]}>REGISTER YOUR SOCIETY</Text>
            <Text style={[styles.text, {fontSize:hp(1.4),marginBottom:hp(1)}]}>for residential sports coaching</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <AntDesign 
              name="rightcircle"
              size={10}
              color="#fff"
            />
            <Text style={styles.text}>{"\t"}Ceritified Sport Coaches</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <AntDesign 
              name="rightcircle"
              size={10}
              color="#fff"
            />
            <Text style={[styles.text,]}>{"\t"}Coaching at your Residence</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <AntDesign 
              name="rightcircle"
              size={10}
              color="#fff"
            />
            <Text style={styles.text}>{"\t"}Unlock your Potential</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <AntDesign 
              name="rightcircle"
              size={10}
              color="#fff"
            />
            <Text style={styles.text}>{"\t"}Avail Best Prices</Text>
            </View>
          </View>
          <View style={{justifyContent:'space-between'}}>
            <Image 
              source={require('../../assets/images/register.jpg')} style={styles.registerImage}
            />
            <TouchableOpacity style={styles.registerButton}>
            <Text style={[styles.text,{fontSize:hp(1.4),color:"#000",fontWeight:'bold'}]}>REGISTER TODAY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Coaching

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: 60,
    backgroundColor: '#fff',
  },
  availableContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth:1,
    marginTop: hp(5),
    paddingLeft: wp(3),
    paddingRight: wp(3)
  },
  availableText: {
    fontSize: hp(2),
    fontWeight: 'bold'
  },
  kitContainer: {
    padding: 4,
    marginHorizontal:wp(3),
    borderWidth: 0.19,
    borderColor: '#999',
    marginTop: hp(3),
    paddingLeft: wp(3),
    paddingRight: wp(3),
    borderRadius:wp(2)
  },
  kitTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp(6)
  },
  kitTitle: {
    fontSize: hp(2),
    fontWeight: 'bold'
  },
  registerCard:{
    flex:1,
    borderWidth:1,
    padding:wp(3),
    justifyContent:'space-between',
    flexDirection:'row',
    backgroundColor:'#000',
    margin:wp(3.5),
    borderRadius:wp(4),
    height:hp(18)
  },
  text:{
    color:"#fff",
    fontSize:hp(1.2),
    lineHeight:hp(2.2)
  },
  heading:{
    fontSize:hp(1.9),
    fontWeight:'bold'
  },
  registerImage:{
    height:hp(10),
    width:wp(38),
    marginBottom:hp(1),
    borderRadius:wp(4)
  },
  registerButton:{
    height:hp(3.5),
    backgroundColor:'#fff',
    padding:hp(0.5),
    justifyContent:'center',
    width:wp(38),
    paddingHorizontal:hp(3),
    marginBottom:hp(2),
    borderRadius:wp(4)
  },
})
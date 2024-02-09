import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
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
const Coaching = () => {
  const [cityModalVisible, setCityModalVisible] = React.useState(false)
  const handleClick =() => {
    setCityModalVisible(cityModalVisible)
  }
  React.useEffect(()=>{
    handleClick()
  },[])
  return (
    <SafeAreaView style={styles.mainContainer}>
    <ScrollView>
    <CityModal 
    modalVisible={cityModalVisible}
    toggleModal={handleClick}
    />
    <TopBar />
    <SearchBar/>
    <View style={{marginTop:hp(2)}}>
    <HomeSlider 
      data={coachingSliderImages}
    />
    </View>
    <View style={styles.availableContainer}>
      <Text>Available Societies/Academics{'  '}<Text>[41]</Text></Text>
      <Text style={styles.viewAllText}>VIEW ALL</Text>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Coaching

const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  },
  availableContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:1,
    marginTop:hp(2)
  }
})
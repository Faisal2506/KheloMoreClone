import { KeyboardAvoidingView, Modal, StyleSheet, Text, TextInput, View, SafeAreaView, Image, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AdressModal from '../components/AdressModal';
import { AntDesign, FontAwesome5, Octions } from 'react-native-vector-icons'
// import { homeSlider } from '../constants';
import HomeSlider from '../components/HomeSlider';
import TopBar from '../components/TopBar';
import Categories from '../components/Categories';
import { categories } from '../constants/caterogies';
import CategoriesCard from '../components/Categories'
// import { turfImages } from '../constants/turf';
// import Places from '../components/Places';

const Home = () => {
  const [addressModalVisible, setAddressModalVisible] = React.useState(false)
  const handleAddressClick = () => {
    setAddressModalVisible(addressModalVisible)
  }
  const [drawerVisible, setDrawerVisible] = React.useState(false)
  React.useEffect(() => {
    handleAddressClick()
  }, [])
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AdressModal modalVisible={addressModalVisible} toggleModal={handleAddressClick} />
      <TopBar />
      <View style={styles.sliderContainer}>
        <HomeSlider />
      </View>
      <View style={styles.availableTitle}>
        <Text style={styles.availableText}>
          Available Venues  {''}<Text style={{ color: '#999' }}>[ 246 ]</Text>
        </Text>
        <View style={styles.filterContainer}>
          <AntDesign
            name="filter" size={20} color='#000'
          />
        </View>
      </View>
      <View style={styles.categories}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}> 7th Feb </Text>
          <AntDesign
            name="down" size={hp(2)} color='#fff'
          />
          <View style={styles.categoriesType}>
            <FlatList style={styles.listStyle}
              data={categories}
              keyExtractor={(key) => { return key.index }}
              renderItem={({ item }) => <CategoriesCard title={item.name} />}
              horizontal
            />
          </View>
        </View>
      </View>
      {/* <View>
        <FlatList 
          data={turfImages}
          renderItem={({item}) => <Places title={item.title} address={item.address} sportsAvailable={item.sportsAvailable} picture={item.picture}/>}
        />
      </View> */}
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },

  sliderContainer: {
    marginTop: hp(2)
  },
  availableTitle: {
    flexDirection: 'row',
    marginTop: hp(3),
  },
  availableText: {
    paddingLeft: wp(3),
    fontSize: hp(2),
    fontWeight: 'bold',

  },
  filterContainer: {
    marginLeft: wp(36),
    borderWidth: 1,
    width: wp(14),
    height: hp(4),
    borderColor: 'gray',
    borderRadius: hp(2),
    padding: wp(0.5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  categories: {
    marginTop: hp(3),
    // borderWidth: 1,
    height: hp(5),
    // borderColor: 'red',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dateContainer: {
    marginLeft: wp(2),
    flexDirection: 'row',
    borderWidth: 1,
    width: wp(30),
    height: hp(4.5),
    alignItems: 'center',
    borderRadius: wp(8),
    backgroundColor: '#161b33',
  },
  dateText: {
    color: '#fff',
    fontSize: hp(2),
    fontWeight: 'bold',
    paddingLeft: wp(2),
    paddingRight: wp(6)
  },
  listStyle: {
    borderWidth: 1,
    borderColor: 'red',
  },
  categoriesType: {
    marginRight: wp(4),
    flex: 1
  }
})
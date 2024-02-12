import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import TopBar from '../components/TopBar'
import HomeSlider from '../components/HomeSlider'
import { shopSliderImages } from '../constants/shop';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Shop = () => {
  const [drawerVisible, setDrawerVisible] = React.useState(false)
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopBar />
      <ScrollView>
      <View style={{ marginTop: hp(1) }}>
        <HomeSlider
          data={shopSliderImages}
        />
        </View>
        <View style={styles.shopCategory}>
          <TouchableOpacity style={styles.categoryContainer}>
            <MaterialCommunityIcons name="badminton" size={hp(3)} color="#228B22" />
            <Text style={styles.categoryText}>
              Sport Equipments
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryContainer}>
            <MaterialCommunityIcons name="shoe-sneaker" size={hp(3)} color="#00D4FF" />
            <Text style={styles.categoryText}>
              Active Wear and Shoes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryContainer}>
            <MaterialCommunityIcons name="bag-personal" size={hp(3)} color="#E4D00A" />
            <Text style={styles.categoryText}>
              Accessories & Essentials
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryContainer}>
            <MaterialCommunityIcons name="food" size={hp(3)} color="#FF5733" />
            <Text style={styles.categoryText}>
              Book Sports Venues
            </Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.trendingCard}>
            <View style={styles.trendingTextContainer}>
              <View style={styles.trendingTitleContainer}>
              <Text style={styles.trendingTitle}>TRENDING</Text>
              </View>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Buy best cricket gears{"\n"}for your next match</Text>
              <Text style={{fontSize:11,color:"#999"}}>Exciting offers on all products</Text>
            </View>
            <View>
              <Image 
                source={require('../../assets/images/bat-ball-image.jpg')}  style={{borderTopRightRadius:8,borderBottomRightRadius:8}}
              />
            </View>
          </TouchableOpacity>
          <View>
            
          </View>
          </ScrollView>
    </SafeAreaView>
  )
}

export default Shop

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  shopCategory: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop:hp(1)
  },
  categoryContainer: {
    backgroundColor:"#00000099",
    borderRadius:wp(2),
    height: hp(8),
    width: wp(22),
    paddingLeft:wp(1)
  },
  categoryText: {
    marginTop:hp(0.5),
    fontSize: 11
  },
  trendingCard:{
   marginTop: hp(2),
   marginHorizontal:wp(3),
   flexDirection:'row',
   justifyContent:'space-between',
   paddingLeft:wp(3),
   backgroundColor:"#E6E6FA",
   borderRadius:8
  },
  trendingTextContainer:{
    justifyContent:'space-around'
  },
  trendingTitleContainer:{
    height:hp(3.5),
    // borderWidth:0.19,
    justifyContent:'center',
    alignItems:'center',
    width:wp(36),
    borderRadius:wp(1),
    backgroundColor:"#4CBB17",
  },
  trendingTitle:{
    color: '#fff',
    fontWeight:'bold'
  }
})
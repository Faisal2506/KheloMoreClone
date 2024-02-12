import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import TopBar from '../components/TopBar'
import HomeSlider from '../components/HomeSlider'
import { shopSliderImages } from '../constants/shop';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import FrequentSlider from '../components/FrequentSlider';
import { frequentImages } from '../constants/frequent';
import ViewAll from '../components/ViewAll';
import BestSelling from '../components/BestSelling';
import { bestSelling } from '../constants/bestSelliingCricket';

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
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Buy best cricket gears{"\n"}for your next match</Text>
            <Text style={{ fontSize: 11, color: "#999" }}>Exciting offers on all products</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/images/bat-ball-image.jpg')} style={{ borderTopRightRadius: 8, borderBottomRightRadius: 8 }}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.twoCards}>
          <View style={styles.card}>
            <ImageBackground
              style={styles.backgroundImage}
              source={require('../../assets/images/badmintonShop.jpg')}
            >
              <View style={styles.textContainer}>
                <View>
                  <Text style={styles.text}>Get prepared for{"\n"}your badminton{"\n"}match</Text>
                </View>
                <View>
                  <Text>Price starting ₹299/-</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.card}>
            <ImageBackground
              style={styles.backgroundImage}
              source={require('../../assets/images/footballShop.jpg')}
            >
              <View style={styles.textContainer}>
                <Text style={styles.text}>Get prepared for{"\n"}your badminton{"\n"}match</Text>
                <Text>Price starting ₹299/-</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
        <ViewAll title="Frequently bought" description="Great options for your first purchase" />
        <View>
          <FlatList horizontal showsHorizontalScrollIndicator={false}
            data={frequentImages}
            renderItem={({item}) => <FrequentSlider picture={item.picture} heading={item.heading} details={item.details} />}
          />
        </View>
        <ViewAll title={"Best Selling Cricket"} description="We're trying to make your cricket shopping easier" />
   
          <FlatList 
            data={bestSelling}
            renderItem={({item}) => <BestSelling picture={item.picture} description={item.description} price={item.price} />} 
            numColumns={2}
          />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Shop

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom:60
  },
  shopCategory: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp(1)
  },
  categoryContainer: {
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: wp(2),
    height: hp(8),
    width: wp(22),
    paddingLeft: wp(1)
  },
  categoryText: {
    marginTop: hp(0.5),
    fontSize: 11
  },
  trendingCard: {
    marginTop: hp(3),
    marginHorizontal: wp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: wp(3),
    backgroundColor: "#E6E6FA",
    borderRadius: 8,
    height: hp(18)
  },
  trendingTextContainer: {
    justifyContent: 'space-around'
  },
  trendingTitleContainer: {
    height: hp(3.5),
    // borderWidth:0.19,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(36),
    borderRadius: wp(1),
    backgroundColor: "#4CBB17",
  },
  trendingTitle: {
    color: '#fff',
    fontWeight: 'bold'
  },
  twoCards: {
    marginHorizontal: wp(3),
    marginTop: hp(3),
    marginHorizontal: wp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: hp(18)
  },
  backgroundImage: {
    height: hp(18),
    width: wp(45),
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  // frequentContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginTop: hp(3),
  //   marginHorizontal: wp(3),
  // },
  // frequentTitle: {
  //   fontSize: 17,
  //   fontWeight: 'bold',
  //   marginBottom: hp(1)
  // },
  // frequentDesc: {
  //   fontSize: 12,
  //   color: '#999'
  // },
  viewAll: {
    fontWeight: 'bold',
    color: "#0096FF"
  }
})
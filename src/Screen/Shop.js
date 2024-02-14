import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImageBackground,
  FlatList,
} from "react-native";
import React from "react";
import TopBar from "../components/TopBar";
import HomeSlider from "../components/HomeSlider";
import { shopSliderImages } from "../constants/shop";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons, Entypo, AntDesign } from "react-native-vector-icons";
import FrequentSlider from "../components/FrequentSlider";
import { frequentImages } from "../constants/frequent";
import ViewAll from "../components/ViewAll";
import BestSelling from "../components/BestSelling";
import { bestSellingCricket } from "../constants/bestSelliingCricket";
import { explore } from "../constants/explore";
import ExploreCard from "../components/ExploreCard";
import { bestSelliingFootball } from "../constants/bestSellingFootball";
import { frequentBadminton } from "../constants/frequentBadminton";
import { bestSelliingBadminton } from "../constants/bestSellingBadminton";
import Accessories from "../components/Accessories";
import { accessories } from "../constants/accessories";
import IgExperience from "../components/IgExperience";
import { igExperience } from "../constants/igExperience";

const Shop = () => {
  const [drawerVisible, setDrawerVisible] = React.useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopBar />
      <ScrollView>
        <View style={{ marginTop: hp(1) }}>
          <HomeSlider data={shopSliderImages} />
        </View>
        <View style={styles.shopCategory}>
          <TouchableOpacity style={styles.categoryContainer}>
            <MaterialCommunityIcons
              name="badminton"
              size={hp(3)}
              color="#228B22"
            />
            <Text style={styles.categoryText}>Sport Equipments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryContainer}>
            <MaterialCommunityIcons
              name="shoe-sneaker"
              size={hp(3)}
              color="#00D4FF"
            />
            <Text style={styles.categoryText}>Active Wear and Shoes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryContainer}>
            <MaterialCommunityIcons
              name="bag-personal"
              size={hp(3)}
              color="#E4D00A"
            />
            <Text style={styles.categoryText}>Accessories & Essentials</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryContainer}>
            <MaterialCommunityIcons name="food" size={hp(3)} color="#FF5733" />
            <Text style={styles.categoryText}>Book Sports Venues</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.trendingCard}>
          <View style={styles.trendingTextContainer}>
            <View style={styles.trendingTitleContainer}>
              <Text style={styles.trendingTitle}>TRENDING</Text>
            </View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Buy best cricket gears{"\n"}for your next match
            </Text>
            <Text style={{ fontSize: 11, color: "#999" }}>
              Exciting offers on all products
            </Text>
          </View>
          <View>
            <Image
              source={require("../../assets/images/bat-ball-image.jpg")}
              style={{ borderTopRightRadius: 8, borderBottomRightRadius: 8 }}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.twoCards}>
          <View style={styles.card}>
            <ImageBackground
              style={styles.backgroundImage}
              source={require("../../assets/images/badmintonShop.jpg")}
            >
              <View style={styles.textContainer}>
                <View>
                  <Text style={styles.text}>
                    Get prepared for{"\n"}your badminton{"\n"}match
                  </Text>
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
              source={require("../../assets/images/footballShop.jpg")}
            >
              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Get prepared for{"\n"}your badminton{"\n"}match
                </Text>
                <Text>Price starting ₹299/-</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
        <ViewAll
          title="Frequently bought"
          description="Great options for your first purchase"
        />
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={frequentImages}
            renderItem={({ item }) => (
              <FrequentSlider
                picture={item.picture}
                heading={item.heading}
                details={item.details}
              />
            )}
          />
        </View>
        <ViewAll
          title={"Best Selling Cricket"}
          description="We're trying to make your cricket shopping easier"
        />
        <FlatList
          data={bestSellingCricket}
          renderItem={({ item }) => (
            <BestSelling
              picture={item.picture}
              description={item.description}
              price={item.price}
            />
          )}
          numColumns={2}
        />
        <View style={styles.exploreContainer}>
          <View style={styles.exploreTitle}>
            <Text style={styles.exploreTitle}>EXPLORE SPORT COLLECTIONS</Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={explore}
            renderItem={({ item }) => (
              <ExploreCard
                title={item.title}
                type={item.type}
                bgcolor={item.bgcolor}
              />
            )}
          />
        </View>
        <ViewAll
          title={"It's all about Football"}
          description="The true essence of football is felt with its Kit"
        />
        <FlatList
          data={bestSelliingFootball}
          renderItem={({ item }) => (
            <BestSelling
              picture={item.picture}
              description={item.description}
              price={item.price}
            />
          )}
          numColumns={2}
        />
        <View style={styles.frequentBadmintonContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={frequentBadminton}
            renderItem={({ item }) => (
              <FrequentSlider
                picture={item.picture}
                heading={item.heading}
                details={item.details}
              />
            )}
          />
        </View>
        <ViewAll
          title={"Spotlight on Badminton!"}
          description="Get everything about badminton at one place"
        />
        <FlatList
          data={bestSelliingBadminton}
          renderItem={({ item }) => (
            <BestSelling
              picture={item.picture}
              description={item.description}
              price={item.price}
            />
          )}
          numColumns={2}
        />
        <View style={{marginTop:hp(5)}}>
            <FlatList horizontal showsHorizontalScrollIndicator={false}
              data={accessories}
              renderItem={({item}) => <Accessories picture={item.picture} title={item.title} sports={item.sports} />}
            />
          <TouchableOpacity style={styles.accessoriesButton}>
            <Text style={styles.accessoriesText}>BROWSE MORE ACCESSORIES</Text>
          </TouchableOpacity>
        </View>
        <ViewAll title={"Experiences Shared on Instagram"}
          description="Follow us on Instagram @KheloMore"/>
        <View>
          <FlatList 
            data={igExperience}
            renderItem={({item}) => <IgExperience picture={item.picture} />}
            numColumns={2}
          />
        </View>
        <View style={styles.shopMisc}>
          <View style={styles.miscContainer}>
            <View style={styles.miscHeaderContainer}>
              <Text style={styles.miscHeader}>Quick Links</Text>
            </View>
            <Text style={styles.miscText}>
              My Orders{"\t"}|{"\t"}Track Order{"\t"}|{"\t"}Sport Equipments
              {"\t"}|{"\t"}Active Wears{"\t"}
              {"\n"}|{"\t"}Accessories & Essentials{"\t"}|{"\t"}Foods &
              Beverages{"\t"}|{"\t"}FAQs{"\t"}
            </Text>
          </View>
          <View style={styles.miscContainer}>
            <View style={styles.miscHeaderContainer}>
              <Text style={styles.miscHeader}>Help & Support</Text>
            </View>
            <Text style={styles.miscText}>
              Return and Refund{"\t"}|{"\t"}Contact Us{"\t"}|{"\t"}Privacy
              Policy
              {"\n"}|{"\t"}Terms and Conditions
            </Text>
          </View>
          <View>
            <View style={{ marginTop: hp(2) }}>
              <Text style={styles.miscHeader}>Connect With Us</Text>
            </View>
            <View style={styles.socialMediaContainer}>
              <Entypo name="facebook-with-circle" size={40} color="#fff" />
              <Entypo name="instagram-with-circle" size={40} color="#fff" />
              <Entypo name="twitter-with-circle" size={40} color="#fff" />
            </View>
            <View style={{marginTop:hp(2), flexDirection:'row',alignItems:'center'}}>
              <AntDesign 
                name="copyright"
                size={10}
                color="#fff"
              />
              <Text style={styles.pvtText}> 2024 KHELOMORE SPORTS PRIVATE LIMITED. ALL RIGHTS RESERVED.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 60,
  },
  shopCategory: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: hp(1),
  },
  categoryContainer: {
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: wp(2),
    height: hp(8),
    width: wp(22),
    paddingLeft: wp(1),
  },
  categoryText: {
    marginTop: hp(0.5),
    fontSize: 11,
  },
  trendingCard: {
    marginTop: hp(3),
    marginHorizontal: wp(3),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: wp(3),
    backgroundColor: "#E6E6FA",
    borderRadius: 8,
    height: hp(18),
  },
  trendingTextContainer: {
    justifyContent: "space-around",
  },
  trendingTitleContainer: {
    height: hp(3.5),
    // borderWidth:0.19,
    justifyContent: "center",
    alignItems: "center",
    width: wp(36),
    borderRadius: wp(1),
    backgroundColor: "#4CBB17",
  },
  trendingTitle: {
    color: "#fff",
    fontWeight: "bold",
  },
  twoCards: {
    marginHorizontal: wp(3),
    marginTop: hp(3),
    marginHorizontal: wp(3),
    flexDirection: "row",
    justifyContent: "space-between",
    height: hp(18),
  },
  backgroundImage: {
    height: hp(18),
    width: wp(45),
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  exploreContainer: {
    marginTop: hp(6),
    marginLeft: wp(3),
  },
  exploreTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  frequentBadmintonContainer: {
    marginTop: hp(10),
    marginBottom: hp(6),
  },
  accessoriesButton:{
    height:hp(5),
    width:wp(94),
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#FF5733",
    borderRadius: 10,
    marginTop: hp(4),
    // marginBottom:hp(2)
  },
  accessoriesText:{
    color:"#fff",
    fontWeight:'bold'
  },
  shopMisc: {
    backgroundColor: "#000",
    paddingHorizontal: wp(3),
    paddingBottom:hp(13)
  },
  miscContainer: {
    marginTop: hp(2),
    borderBottomWidth: 1,
    borderColor: "#fff",
    paddingBottom: hp(2.5),
  },
  miscHeaderContainer: {
    borderColor: "#fff",
    marginBottom: hp(1),
  },
  miscHeader: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  miscText: {
    color: "#fff",
    fontSize: 13,
    lineHeight: 20,
  },
  socialMediaContainer: {
    marginTop: hp(1),
    flex:1,
    flexDirection: "row",
    width: wp(40),
    justifyContent:"space-between"
  },
  pvtText:{
    color:"#fff",
    fontSize:10
  }
});

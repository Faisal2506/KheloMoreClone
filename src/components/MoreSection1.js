import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
} from "react-native-vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const MoreSection = () => {
  return (
    <View>
      <View style={styles.section01}>
        <View style={[styles.container, { paddingBottom: hp(2) }]}>
          <View style={styles.iconAndText}>
            <Entypo name="ticket" size={20} style={styles} />
            <Text style={styles.text}>Your Bookings</Text>
          </View>
          <AntDesign name="right" size={20} color="#000000" />
        </View>
        <View style={[styles.container, { paddingBottom: hp(2) }]}>
          <View style={styles.iconAndText}>
            <AntDesign name="hearto" size={20} style={styles} />
            <Text style={styles.text}>Favourite Venues</Text>
          </View>
          <AntDesign name="right" size={20} color="#000000" />
        </View>
        <View style={[styles.container, { borderBottomWidth: 0 }]}>
          <View style={styles.iconAndText}>
            <MaterialCommunityIcons
              name="ticket-confirmation-outline"
              size={20}
              style={styles}
            />
            <Text style={styles.text}>Your KheloMore Pass</Text>
          </View>
          <AntDesign name="right" size={20} color="#000000" />
        </View>
      </View>
      <View style={styles.section02}>
        <View style={[styles.container, { paddingBottom: hp(2) }]}>
          <View style={styles.iconAndText}>
            <Entypo name="ticket" size={20} style={styles} />
            <Text style={styles.text}>Help and FAQs</Text>
          </View>
          <AntDesign name="right" size={20} color="#000000" />
        </View>
        <View style={[styles.container, { borderBottomWidth: 0 }]}>
          <View style={styles.iconAndText}>
            <AntDesign name="hearto" size={20} style={styles} />
            <Text style={styles.text}>Raise a Request</Text>
          </View>
          <AntDesign name="right" size={20} color="#000000" />
        </View>
      </View>
      <View style={styles.section03}>
        <View style={[styles.container, { borderBottomWidth: 0 }]}>
          <View style={styles.iconAndText}>
            <Entypo name="ticket" size={20} style={styles} />
            <Text style={styles.text}>Sports Coaching</Text>
          </View>
          <AntDesign name="right" size={20} color="#000000" />
        </View>
      </View>
      <TouchableOpacity style={styles.referImageContainer}>
        <Image
          source={require("../../assets/images/refer.jpg")}
          style={styles.referImage}
        />
      </TouchableOpacity>
      <View style={styles.section04}>
        <View style={[styles.container, { paddingBottom: hp(2) }]}>
          <View style={styles.iconAndText}>
            {/* <Entypo name="ticket" size={20} style={styles} /> */}
            <Text style={styles.text}>Register your venue on KheloMore</Text>
          </View>
          <AntDesign name="right" size={20} color="#000000" />
        </View>
        <View style={[styles.container, { paddingBottom: hp(2) }]}>
          <View style={styles.iconAndText}>
            {/* <AntDesign name="hearto" size={20} style={styles} /> */}
            <Text style={styles.text}>Blogs and articles</Text>
          </View>
          <AntDesign name="right" size={20} color="#000000" />
        </View>
        <View style={[styles.container, { paddingBottom: hp(2) }]}>
          <View style={styles.iconAndText}>
            {/* <AntDesign name="hearto" size={20} style={styles} /> */}
            <Text style={styles.text}>Terms and Conditions</Text>
          </View>
          <AntDesign name="right" size={20} color="#000000" />
        </View>
        <View style={[styles.container, { borderBottomWidth: 0 }]}>
          <View style={styles.iconAndText}>
            {/* <MaterialCommunityIcons
              name="ticket-confirmation-outline"
              size={20}
              style={styles}
            /> */}
            <Text style={styles.text}>Privacy Policy</Text>
          </View>
          <AntDesign name="right" size={20} color="#000000" />
        </View>
      </View>
      <View style={styles.section03}>
        <View style={[styles.container, { borderBottomWidth: 0 }]}>
          <View style={styles.iconAndText}>
            <Text style={[styles.text, {fontWeight:'bold'}]}>LOGOUT</Text>
          </View>
          
        </View>
      </View>
      {/** */}
      <View style={{height:50}}></View>
    </View>
  );
};

export default MoreSection;

const styles = StyleSheet.create({
  section01: {
    justifyContent: "space-evenly",
    borderWidth: 1,
    // marginTop:25,
    marginBottom: hp(2),
    marginLeft: wp(4),
    marginRight: wp(4),
    height: 162,
    borderRadius: 20,
    paddingLeft: wp(2),
    paddingRight: wp(2),
  },
  section02: {
    justifyContent: "space-evenly",
    borderWidth: 1,
    // marginTop:25,
    marginBottom: hp(2),
    marginLeft: wp(4),
    marginRight: wp(4),
    height: 120,
    borderRadius: 20,
    paddingLeft: wp(2),
    paddingRight: wp(2),
  },
  section03: {
    justifyContent: "space-evenly",
    borderWidth: 1,
    // marginTop:25,
    marginBottom: hp(2),
    marginLeft: wp(4),
    marginRight: wp(4),
    height: 60,
    borderRadius: 20,
    paddingLeft: wp(2),
    paddingRight: wp(2),
  },
  section04: {
    justifyContent: "space-evenly",
    borderWidth: 1,
    // marginTop:25,
    marginBottom: hp(2),
    marginLeft: wp(4),
    marginRight: wp(4),
    height: 240,
    borderRadius: 20,
    paddingLeft: wp(2),
    paddingRight: wp(2),
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth:1,
    borderBottomWidth: 0.5,
    // paddingBottom:hp(1)
  },
  iconAndText: {
    flexDirection: "row",
  },
  text: {
    marginLeft: wp(2),
  },
  referImageContainer: {
    alignItems: "center",
  },
  referImage: {
    height: 100,
    width: 100,
  },
});

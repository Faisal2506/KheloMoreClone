import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { FontAwesome6 } from 'react-native-vector-icons'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LeaderTop3 = ({iconSize,iconColor,rank,rankerName,rankerPoints,rankBg}) => {
  return (
      <View style={styles.leaderContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome6
            name="circle-user"
            size={iconSize}
            color={iconColor}
          />
          <View style={[styles.rankContainer,{backgroundColor:rankBg}]}>
            <Text style={styles.rankText}>{rank}</Text>
          </View>
        </View>
        <View style={styles.leaderInfoContainer}>
          <Text style={styles.leaderName}>{rankerName}</Text>
          <Text style={styles.leaderPoints}>{rankerPoints} points</Text>
        </View>
      </View>
  )
}

export default LeaderTop3

const styles = StyleSheet.create({
  allLeaderContainer: {
    height: hp(24),
    width: wp(94),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "#fff"
  },
  leaderContainer: {
    height:hp(24),
    width: wp(31),
    alignItems: "center",
  },
  iconContainer: {
    position: "relative",
    marginTop: hp(5)
  },
  rankContainer: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 0.19,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: 'center',
    position: "absolute",
    top: hp(7),
    left: wp(6.5),
  },
  rankText: {
    fontWeight: "bold",
    fontSize: 12
  },
  leaderInfoContainer: {
    flex: 1,
    borderColor: "#fff",
    marginTop: hp(2),

  },
  leaderName: {
    color: "#fff",
    textAlign: 'center',
    fontSize: 12,
    fontWeight: "bold"
  },
  leaderPoints: {
    color: "#fff",
    textAlign: "center",
    fontSize: 10,
    marginTop: hp(1)
  }
})
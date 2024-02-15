import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React from 'react';
import { Entypo, AntDesign } from 'react-native-vector-icons'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LeaderTop3 from '../components/LeaderTop3';
import LeaderList from '../components/LeaderList';
import { playerListData } from '../constants/playerListData';

const Leaderboard = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topSection}>
      <View>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Leaderboard
          </Text>
        </View>
        <View style={styles.headerIcons}>
          <Entypo 
            name="share"
            size={25}
            color="#fff"
          />
          <AntDesign 
            name="questioncircle"
            size={25}
            color="#fff"
          />
        </View>
      </View>
      <View style={styles.monthlyContainer}>
        <View style={styles.monthlyButtonContainer}>
        <TouchableOpacity style={styles.monthlyButton}>
          <Text style={styles.monthlyText}> MONTHLY - APP EXCLUSIVE</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.monthlyDateContainer}>
          <Text style={styles.monthlyDate}>
            1 Dec - 31Dec
          </Text>
          <AntDesign 
            name="caretdown"
            size={11}
            color="#fff"
          />
        </View>
      </View>
      </View>
      <View style={{flexDirection:'row'}}>
      <LeaderTop3 iconSize={70} iconColor={"#FF5733"} rankBg={"#FF5733"} rank={2} rankerName={"Rupesh Deshmukh"} rankerPoints={"3,562"} />
      <LeaderTop3 iconSize={70} iconColor={"#FFBF00"} rankBg={"#FFBF00"} rank={1} rankerName={"Faisal Shah"} rankerPoints={"3,950"} />
      <LeaderTop3 iconSize={70} iconColor={"#0096FF"} rankBg={"#0096FF"} rank={3} rankerName={"Sandeep Daga"} rankerPoints={"2,890"} />
      </View>
      <TouchableOpacity style={styles.prizeCard}>
        <View style={styles.prizeTextContainer}>
          <Text style={styles.prizeText}>Prizes worth Rs. 25,000 waiting for you </Text>
          <Text style={[styles.prizeText,{fontWeight:'bold'}]}>CHECK NOW →</Text>
        </View>
        <Image 
        source={require("../../assets/images/prize.png")} style={styles.prizeImage}
        />
      </TouchableOpacity>
      </View>
      {/* <LeaderList /> */}
      <ScrollView>
      <View style={styles.rankingHeader}>
        <Text style={[styles.headerText,{marginRight:wp(30)}]}>All Players {"[2,12,512]"}</Text>
        <Text style={[styles.headerText,{marginRight:wp(12)}]}>Points</Text>
        <Text style={styles.headerText}>Rank</Text>
      </View>
      <FlatList 
        data={playerListData}
        renderItem={({item}) => <LeaderList name={item.name} points={item.points} rank={item.rank} />}
      />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Leaderboard

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    marginTop:hp(4),
    marginBottom:60
  },
  topSection:{
    backgroundColor:"#000",
    paddingHorizontal:wp(3)
  },
  headerContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    height:hp(6),
    alignItems:'center'
  },
  title:{
    color:"#fff",
    fontSize:20,
    fontWeight:"bold"
  },
  headerIcons:{
    flexDirection:'row',
    justifyContent:"space-between",
    width:wp(20)
  },
  monthlyContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:hp(2)
  },
  monthlyButtonContainer:{
    width:wp(60),
    borderRightWidth:1,
    borderColor:"#fff"
  },
  monthlyButton:{
    height:hp(4.5),
    width:wp(55),
    backgroundColor:"#0096FF",
    justifyContent:'center',
    borderRadius:4
  },
  monthlyText:{
    color:"#fff",
    textAlign:'center',
    fontWeight:"bold",
    fontSize:11
  },
  monthlyDateContainer:{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:wp(4)
  },
  monthlyDate:{
    color:"#fff",
    fontSize:11,
    marginRight:wp(2)
  },
  prizeCard:{
    height:hp(8.5),
    marginBottom:hp(2),
    backgroundColor:"#E49B0F",
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between'
  },
  prizeTextContainer:{
    marginLeft:wp(3),
  },
  prizeText:{
    color:"#fff"
  },
  prizeImage:{
    height:hp(8),
    width:wp(20)
  },
  rankingHeader:{
    flexDirection:"row",
    height:hp(3.3),
    alignItems:'center',
    paddingHorizontal:wp(3)
  },
  headerText:{
    fontSize:13,
    color:"#999"
  },
})
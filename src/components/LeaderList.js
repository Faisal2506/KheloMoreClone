import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome6, AntDesign } from 'react-native-vector-icons'

const LeaderList = ({name,points,rank}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.playersList}>
      <FontAwesome6
            name="circle-user"
            size={40}
            color="#000"
          />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.points}>{points}</Text>
          <Text style={styles.rank}>{rank}</Text>
          <AntDesign 
            name="rightcircleo"
            size={12}
            color="orange"
          />
      </View>
    </View>
  )
}

export default LeaderList

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    paddingHorizontal:wp(3)
  },

  playersList:{
    height:hp(6),
    flexDirection:'row',
    alignItems:'center'
  },
  name:{
    fontWeight:"bold",
    width:wp(45),
    marginLeft:wp(2)
  },
  points:{
    width:wp(18),
    textAlign:'center'
  },
  rank:{
    width:wp(13),
    paddingLeft:wp(10)
  }
})
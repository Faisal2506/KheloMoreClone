import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const ViewAll = ({title,description}) => {
  return (
    <View style={styles.container}>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
    <View style={{justifyContent:'center'}}>
      <Text style={styles.viewAll}>VIEW ALL</Text>
    </View>
  </View>
  )
}

export default ViewAll

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(3),
    marginHorizontal: wp(3),
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: hp(1)
  },
  desc: {
    fontSize: 12,
    color: '#999'
  },
  viewAll: {
    fontSize:12,
    fontWeight: 'bold',
    color: "#0096FF"
  }
})
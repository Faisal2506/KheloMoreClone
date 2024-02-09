import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import {AntDesign} from 'react-native-vector-icons'
import { TextInput } from 'react-native-paper';
const SearchBar = () => {
  return (
    <View style={styles.searchMainContainer}>
      <AntDesign 
        name="search1"
        size={hp(2.5)}
        color="#000"
      />
      <TextInput style={styles.searchInput}
        placeholder='Search for Society/Academy'
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchMainContainer:{
        marginTop:hp(2.8),
        height: hp(6.8),
        width:wp(100)-70,
        borderWidth:1,
        borderColor:'#999',
        alignSelf:'center',
        borderRadius:wp(4),
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:wp(6)
    },
    searchInput:{
        backgroundColor:'transparent',
        // borderWidth:1,
        width:wp(65)
    }
})
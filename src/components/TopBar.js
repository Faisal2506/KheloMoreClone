import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AntDesign, FontAwesome5, Octions} from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import AdressModal from './AdressModal';

const TopBar = () => {
  const navigation = useNavigation();
  const [addressModalVisible,setAddressModalVisible]=React.useState(false)
  const handleAddressClick =() => {
    setAddressModalVisible(!addressModalVisible)
  } 
  return (
    <View style={styles.topBar}>
    <View style={styles.imageContainer}>
    <Image 
      source={require('../../assets/logo/logo1.jpg')} style={styles.imageStyle}
    />
    </View>
    <TouchableOpacity style={{flexDirection:'row'}} onPress={handleAddressClick}>
    <Text style={styles.addressText}>{"\t"} Address </Text>
    <AntDesign 
      name="down" size={hp(2)} color='#000000' 
    />
    </TouchableOpacity>
    <View style={styles.leftContents}>
    <AntDesign 
      name="search1" size={hp(2)} color='#000000' 
    />
    <AntDesign  
      name="hearto" size={hp(2)} color='#000000' 
    />
    <View style={styles.coin}>
      <FontAwesome5
        name="coins"  color='#000000'
      />
      <Text>{"\t"}300</Text>
    </View>
    </View>
    <AdressModal   modalVisible={addressModalVisible}
    toggleModal={handleAddressClick}
    />
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
  topBar: {
    marginTop: hp(4),
    width: wp(100),
    height: hp(6),
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#999',
    borderBottomWidth: 0.5
  },
  imageContainer: {
    paddingLeft: wp(4),
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    height: hp(8),
    width: wp(8),
    objectFit: 'contain'
  },
  addressText: {
    marginLeft: wp(2),
    marginRight:wp(2)
  },
  searchIcon: {
    marginLeft: wp(30)
  },
  leftContents: {
    flex: 1,
    marginLeft: wp(30),
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  coin: {
    borderWidth:1,
    width: wp(14),
    flexDirection: 'row',
    borderColor: 'gray',
    borderRadius: hp(2),
    padding: wp(0.5),
  },
})
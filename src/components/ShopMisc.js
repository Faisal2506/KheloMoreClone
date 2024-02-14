import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ShopMisc = ({title,text}) => {
  return (
    <View style={styles.miscContainer}>
      <View style={styles.miscHeaderContainer}>
        <Text style={styles.miscHeader}>{title}</Text>
      </View>
      <Text style={styles.miscText}>
        {/* My Orders{"\t"}|{"\t"}Track Order{"\t"}|{"\t"}Sport Equipments{"\t"}|
        {"\t"}Active Wears{"\t"}
        {"\n"}|{"\t"}Accessories & Essentials{"\t"}|{"\t"}Foods & Beverages
        {"\t"}|{"\t"}FAQs{"\t"} */}
        {text}
      </Text>
    </View>
  );
};

export default ShopMisc;

const styles = StyleSheet.create({
    miscContainer:{
        marginTop:hp(4),
        borderBottomWidth:1,
        borderColor:"#fff",
        paddingBottom:hp(4),
        marginBottom:hp(4)
      },
      miscHeaderContainer:{
        borderColor:"#fff",
        marginBottom:hp(1)
      },
      miscHeader:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:18,
      },
      miscText:{
        color:"#fff",
        fontSize:13,
        lineHeight:20
      }
});

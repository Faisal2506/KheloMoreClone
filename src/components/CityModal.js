import {
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "react-native-vector-icons";
import { RadioButton } from "react-native-paper";

const CityModal = ({ modalVisible, toggleModal }) => {
  const [checked, setChecked] = React.useState();
  return (
    <Modal visible={modalVisible} transparent>
      <View style={styles.bottomView}>
        <View style={styles.mainModal}>
          <View style={styles.modalHeader}>
            <Text>Select Your City</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Feather name="x-circle" size={20} color="gray" />
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity>
            <View style={styles.wrapper}>
              <View style={styles.radio}><View style={styles.radioBG}></View></View>
              <Text style={styles.radioText}> Navi Mumbai</Text>
            </View>
          </TouchableOpacity> */}
          <View style={styles.allCityWrapper}>
            <View style={styles.wrapper}>
              <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
              />
              <Text style={styles.radioText}> Navi Mumbai</Text>
            </View>
            <View style={styles.wrapper}>
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
              />
              <Text style={styles.radioText}> Bengaluru</Text>
            </View>
            <View style={styles.wrapper}>
              <RadioButton
                value="third"
                status={checked === "third" ? "checked" : "unchecked"}
                onPress={() => setChecked("third")}
              />
              <Text style={styles.radioText}> Thane</Text>
            </View>
            <View style={styles.wrapper}>
              <RadioButton
                value="fourth"
                status={checked === "fourth" ? "checked" : "unchecked"}
                onPress={() => setChecked("fourth")}
              />
              <Text style={styles.radioText}> Mumbai</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CityModal;

const styles = StyleSheet.create({
  bottomView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#00000099",
    marginBottom: 60,
  },
  mainModal: {
    height: hp(38),
    width: wp(100),
    backgroundColor: "#fff",
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4),
  },
  modalHeader: {
    flexDirection: "row",
    borderBottomWidth: 0.19,
    justifyContent: "space-between",
    paddingLeft: wp(3),
    paddingTop: hp(2),
    paddingBottom: hp(2),
    paddingRight: wp(3),
  },
  allCityWrapper: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.19,
    // borderWidth:1,
    // borderBottomColor:'red',
    // borderColor:'blue'
  },
  // radio:{
  //   width:40,
  //   height:40,
  //   borderColor:'#000',
  //   borderRadius:20,
  //   borderWidth:1
  // }
});

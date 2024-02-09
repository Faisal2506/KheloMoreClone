import {
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Button from "../components/ButtonComponent";
const AdressModal = ({ modalVisible, toggleModal }) => {
  // const [modalVisible, setModalVisible] = useState(true)
  // const handleLocationClick = () => {
  //   setModalVisible(false)
  // }
  return (
    <Modal visible={modalVisible} transparent>
      <KeyboardAvoidingView behavior="padding" style={styles.bottomView}>
        <View style={styles.mainModal}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Set Your Location</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.addressInput}
              placeholder="Enter Location Manually"
            />
          </View>
          <Text style={{ textAlign: "center" }}>Or</Text>
          <Button
            title="📍  USE CURRENT LOCATION"
            buttonFunction={toggleModal}
            style={styles.locationButton}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AdressModal;

const styles = StyleSheet.create({
  mainModal: {
    height: hp(31),
    width: wp(100),
    backgroundColor: "#fff",
    borderTopLeftRadius: wp(3),
    borderTopRightRadius: wp(3),
  },
  bottomView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  heading: {
    paddingLeft: wp(4),
    paddingTop: hp(3),
  },
  headingText: {
    fontSize: wp(5),
  },
  addressInput: {
    borderWidth: 1,
    width: wp(90),
    height: hp(6),
    borderRadius: wp(4),
    textAlign: "center",
    marginTop: hp(3),
  },
  inputContainer: {
    alignItems: "center",
    marginBottom: hp(2),
  },
  locationButton: {
    fontSize: hp(2),
  },
});

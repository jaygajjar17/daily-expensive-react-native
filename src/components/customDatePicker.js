import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import React from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import styles from "../screens/TransferScreen/styles";
const { width } = Dimensions.get("screen");

const CustomDatePicker = ({ value, onChangeDate }) => {
  return (
    <View
      style={{
        shadowColor: "white",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
      }}
    >
      <RNDateTimePicker
        value={value}
        display="spinner"
        onChange={onChangeDate}
      />
    </View>
  );
};

export default CustomDatePicker;

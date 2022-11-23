import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Spacer from "./spacer";

const CustomInput = ({
  placeholder,
  icon,
  keyboardType = "name-phone-pad",
  onChangeText,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={20} color="grey" />
      <Spacer width={10} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor="grey"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    paddingLeft: 15,
    shadowColor: "white",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  input: {
    width: "100%",
    height: "100%",
  },
});

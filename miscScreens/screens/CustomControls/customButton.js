import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";

const CustomButton = ({
  width = 100,
  height = 30,
  radius = 0,
  textColor = "black",
  textSize = 18,
  text = "Button",
  backgroundColor = "white",
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            width: width,
            height: height,
            backgroundColor: backgroundColor,
            borderRadius: radius,
          },
        ]}
      >
        <Text style={{ color: textColor, fontSize: textSize }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "white",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

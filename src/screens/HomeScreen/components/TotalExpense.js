import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import values from "../../../constants/values";
const { width } = Dimensions.get("screen");
const TotalExpense = ({ amount }) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: "white",
          color: "black",
          shadowColor: "white",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.5,
          shadowRadius: 3,
        },
      ]}
    >
      <Text style={[values.h1Style, { marginTop: 10 }]}>
        {`₹ ${amount || 0}`}
      </Text>
      <Image style={styles.image} />
    </View>
  );
};

export default TotalExpense;

const styles = StyleSheet.create({
  container: {
    width: width * 0.88,
    height: 150,
    borderRadius: 50,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 45,
    height: 45,
  },
});

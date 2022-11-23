import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import burger from "../assets/images/burger.png";
const { width } = Dimensions.get("screen");

const CardItem = (item) => {
  return (
    <View
      style={{
        display: "flex",
        height: 70,
        borderRadius: 25,
        margin: 10,
        paddingTop: 20,
        backgroundColor: "white",
        paddingLeft: 20,
        shadowColor: "grey",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 10,
        flexDirection: "row",
      }}
    >
      <Image style={{ width: 30, height: 30, flexGrow: 0 }} source={burger} />
      <Text
        style={{
          color: "black",
          marginLeft: 20,
          flexGrow: 1,
          fontSize: 22,
        }}
      >
        {item.data.name.replace(/(.{20})..+/, "$1…")}
      </Text>
      <Text
        style={{
          color: "black",
          fontSize: 20,
          overflow: "hidden",
          fontWeight: "bold",
          paddingRight: 10,
        }}
      >
        ₹ {item.data.expense}
      </Text>
    </View>
  );
};

export default CardItem;

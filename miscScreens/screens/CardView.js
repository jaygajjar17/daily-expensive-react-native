import { StyleSheet, FlatList, View, Text } from "react-native";
import React from "react";
import CardItem from "./CardItem";

const CardView = (props) => {
  return (
    <View>
      <Text style={styles.CardView}>Recent Activities</Text>
      <FlatList
        horizontal
        data={props.data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardItem data={item} />}
      />
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
  CardView: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
});

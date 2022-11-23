import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
} from "react-native";
import React from "react";
import firebase from "../../../service/firebase";

import deleteIcon from "../../../../assets/images/deleteIcon.png";

const { width } = Dimensions.get("screen");
const CardItem = (props) => {
  return (
    <View>
      <View
        style={[
          styles.container,
          { backgroundColor: props.data.backgroundColor },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Do you want to delete", "", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "OK",
                onPress: async () => {
                  await firebase
                    .firestore()
                    .collection("jay")
                    .doc(props.data.id)
                    .delete();
                  console.log("deleted");
                  await props.getDocs();
                },
              },
            ]);
          }}
        >
          <Image source={deleteIcon} style={styles.img} />
        </TouchableOpacity>
        <View>
          <Text style={styles.price}>{props.data.name}</Text>
          <Text style={styles.price}>₹ {props.data.expense}</Text>
        </View>
        <View>
          <Text style={styles.cardNum}>
            {new Date(props.data.timestamp).toLocaleString(undefined, {
              dateStyle: "short",
            })}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    height: 100,
    borderRadius: 15,
    marginRight: 10,
    padding: 10,
    justifyContent: "space-between",
    shadowColor: "white",
    shadowOffset: { width: -2, height: 4 },
    shadowRadius: 10,
  },
  img: {
    width: 10,
    height: 10,
    alignSelf: "flex-end",
  },
  balance: {
    fontSize: 12,
    color: "grey",
  },
  price: {
    fontWeight: "bold",
    color: "white",
  },
  cardNum: {
    fontWeight: "bold",
    color: "white",
  },
});

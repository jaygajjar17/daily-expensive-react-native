import {
  View,
  Button,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import User from "../assets/images/user.png";
import FlatExpenseList from "./FlatExpenseList";
import TabViewNav from "./TabViewNav";

const Home = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#41224a",
        }}
      >
        <View
          style={{
            flex: 0,
            paddingTop: 60,
            borderRadius: 20,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              paddingLeft: 20,
              paddingTop: 10,
              fontSize: 45,
              color: "white",
            }}
          >
            Hello,
          </Text>
          <Text
            style={{
              paddingLeft: 20,
              paddingTop: 10,
              fontSize: 50,
              fontWeight: "bold",
              color: "white",
              paddingBottom: 20,
            }}
          >
            Jay
          </Text>
        </View>
        <TouchableOpacity
          style={{
            paddingTop: 80,
            marginLeft: 150,
          }}
        >
          <Image source={User} style={{ width: 59, height: 59 }} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 2 }}>
        <TabViewNav />
      </View>
    </>
  );
};

export default Home;

import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Alert,
  RefreshControl,
  SafeAreaView,
  Fragment,
} from "react-native";
import React, { useState, useEffect } from "react";

import styles from "./styles";
import Header from "./components/header";
import Transfer from "./components/transfer";
import { transfer, cards } from "../../constants/data";
import Spacer from "../../components/spacer";
import Cards from "./components/cards";
import CustomButton from "../../components/customButton";
import colors from "../../constants/colors";
import CustomInput from "../../components/customInput";
import CustomDatePicker from "../../components/customDatePicker";

const { width } = Dimensions.get("screen");
import firebase from "../../service/firebase";
import TotalExpense from "../HomeScreen/components/TotalExpense";

var database = firebase.database();
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const TransferScreen = () => {
  const [activity, setActivity] = useState("");
  const [expense, setExpense] = useState(0);
  const [date, setDate] = useState(new Date());
  const [timestamp, setTimestamp] = useState(new Date().getTime());
  const [expenseList, setExpenseList] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const colors = ["#003153", "#0892d0", "#0047ab", "#40e0d0", "#0abab5"];

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const onChangeDate = (event) => {
    const { nativeEvent } = event;
    setDate(new Date(nativeEvent["timestamp"]));
    setTimestamp(nativeEvent["timestamp"]);
  };
  useEffect(() => {
    getDocs();
  }, []);

  async function getDocs() {
    const events = firebase
      .firestore()
      .collection("jay")
      .orderBy("createdAt", "desc");
    events.get().then((querySnapshot) => {
      const expenseDocList = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      setExpenseList(expenseDocList);
      setTotalExpense(
        expenseDocList.reduce((a, v) => (a = a + Number(v.expense)), 0)
      );
    });
  }

  const addExpense = () => {
    const random = Math.floor(Math.random() * colors.length);
    firebase
      .firestore()
      .collection("jay")
      .add({
        name: activity,
        expense: expense,
        backgroundColor: colors[random],
        timestamp: timestamp,
        createdAt: new Date().getTime(),
      })
      .then((ref) => {
        getDocs();
        setExpense(0);
        setActivity("");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const isEmpty = () => {
    if (!activity.trim()) {
      Alert.alert(`Activity is required`);
      return false;
    } else return true;
  };

  return (
    <ScrollView
      style={{ backgroundColor: "black" }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <View style={styles.horizontalPaddingView}>
          <Header />
          <Spacer height={20} />
          <TotalExpense amount={totalExpense} />
          <Spacer height={20} />

          <CustomInput
            placeholder="Enter Activity Name"
            value={activity}
            onChangeText={(text) => setActivity(text)}
          />
          <Spacer height={20} />
          <CustomInput
            keyboardType="phone-pad"
            placeholder="Enter Expence Value"
            value={expense}
            onChangeText={(text) => setExpense(text)}
          />
          <Spacer height={20} />
          <CustomDatePicker value={date} onChangeDate={onChangeDate} />
          <View style={styles.btnContainer}>
            <CustomButton
              width={width * 0.7}
              height={40}
              radius={5}
              textSize={18}
              text="Add"
              backgroundColor={colors.orage}
              onPress={() => {
                isEmpty() && addExpense();
                getDocs();
              }}
            />
          </View>
          <ScrollView>
            <Spacer height={20} />
            {/* <Transfer data={transfer} /> */}
            {/* <Spacer height={20} /> */}
            <Cards data={expenseList} getDocs={getDocs} />
            <Spacer height={20} />
            {/* <View style={styles.btnContainer}>
            <CustomButton
              width={width * 0.7}
              height={40}
              radius={5}
              textSize={18}
              text="Proceed"
              backgroundColor={colors.orage}
              onPress={() => {}}
            />
          </View> */}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default TransferScreen;

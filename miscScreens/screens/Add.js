import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  Dimensions,
  Alert,
} from "react-native";
import React, { useState } from "react";
import styles from "../screens/styles";
import Spacer from "./CustomControls/spacer";
import CustomButton from "./CustomControls/customButton";
import CustomInput from "./CustomControls/customInput";
import CustomDatePicker from "./CustomControls/customDatePicker";
const { width } = Dimensions.get("screen");

const Add = () => {
  const [activity, setActivity] = useState("");
  const [expense, setExpense] = useState(0);
  const [date, setDate] = useState(new Date());
  const [timestamp, setTimestamp] = useState(new Date().getTime());
  const [expenseList, setExpenseList] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const colors = ["#003153", "#0892d0", "#0047ab", "#40e0d0", "#0abab5"];
  const [refreshing, setRefreshing] = React.useState(false);

  const onChangeDate = (event) => {
    const { nativeEvent } = event;
    setDate(new Date(nativeEvent["timestamp"]));
    setTimestamp(nativeEvent["timestamp"]);
  };
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

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
                isEmpty();
              }}
            />
          </View>
          <ScrollView>
            <Spacer height={20} />
            {/* <Transfer data={transfer} /> */}
            {/* <Spacer height={20} /> */}
            {/* <Cards data={expenseList} getDocs={getDocs} /> */}
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

export default Add;

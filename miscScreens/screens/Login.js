import { View, Text, ScrollView, Button } from "react-native";
import React from "react";

const Login = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Button onPress={() => navigation.navigate("Home")} title="next">
          Login
        </Button>
      </View>
    </ScrollView>
  );
};

export default Login;

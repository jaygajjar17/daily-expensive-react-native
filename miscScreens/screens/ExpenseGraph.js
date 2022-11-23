import { View, Text, Dimensions, ScrollView } from "react-native";
const screenWidth = Dimensions.get("window").width;

import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
const ExpenseGraph = () => {
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  return (
    <ScrollView>
      <PieChart
        data={data}
        width={screenWidth}
        height={250}
        chartConfig={{
          backgroundColor: "black",
          backgroundGradientFrom: "black",
          backgroundGradientTo: "black",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(221, 122, 255, ${opacity})`,
          labelColor: (opacity = 1) => `red, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        accessor={"population"}
        backgroundColor={"transparent"}
        center={[10, 50]}
      />
    </ScrollView>
  );
};

export default ExpenseGraph;

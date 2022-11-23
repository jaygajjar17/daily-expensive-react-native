import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import FlatExpenseList from "./FlatExpenseList";
import Add from "./Add";

const HomeRoute = () => <Add />;
const TransactionRoute = () => <FlatExpenseList />;

const renderScene = SceneMap({
  Home: HomeRoute,
  Trasaction: TransactionRoute,
  Graph: TransactionRoute,
  Category: TransactionRoute,
});

export default function TabViewNav() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Home", title: "Home" },
    { key: "Trasaction", title: "History" },
    { key: "Graph", title: "Graph" },
    { key: "Category", title: "Category" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      animationEnabled={true}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={{
            backgroundColor: "black",
          }}
        />
      )}
    />
  );
}

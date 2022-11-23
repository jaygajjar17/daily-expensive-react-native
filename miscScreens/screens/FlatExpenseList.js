import { View, FlatList, Text, Image } from "react-native";
import React from "react";
import CardItem from "./CardItem";

const FlatExpenseList = () => {
  return (
    <View>
      <Text style={{ margin: 20, fontWeight: "bold", fontSize: 20 }}>
        Transaction List
      </Text>
      <FlatList
        data={[
          { name: "Nike StoresStoresStores", expense: 8000 },
          { name: "Adidas", expense: 5000 },
          { name: "Nike1 StoresStoresStores", expense: 8000 },
          { name: "Adidas2", expense: 5000 },
          { name: "Nike3 StoresStoresStores", expense: 8000 },
          { name: "Adidas4", expense: 5000 },
          { name: "Nike5 StoresStoresStores", expense: 8000 },
          { name: "Adidas6", expense: 5000 },
          { name: "Nike StoresStoresStores7", expense: 8000 },
          { name: "Adidas3", expense: 5000 },
          { name: "Nike StoresStoresStores8", expense: 8000 },
          { name: "Adidas91", expense: 5000 },
          { name: "Adidas92", expense: 5000 },
          { name: "Adidas93", expense: 5000 },
          { name: "Adidas94", expense: 5000 },
        ]}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <CardItem data={item} />}
      />
    </View>
  );
};

export default FlatExpenseList;

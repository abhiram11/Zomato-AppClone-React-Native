import React from "react";
import { View, Text, Image } from "react-native";

export default function Restaurants() {
  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}>
        1 Trillion restaurants around you
      </Text>
      {/* reusable component */}
      <RestaurantInfo />
    </View>
  );
}

const RestaurantInfo = () => (
  // TODO change border radius to box shadow
  <View style={{ margin: 10, borderWidth: 1, borderRadius: 18 }}>
    <Image
      source={{
        uri: "https://www.manjulaskitchen.com/wp-content/uploads/everyday-lunch-menu-1024x576.jpg",
      }}
      style={{ width: "100%", height: 200, borderRadius: 18 }}
    />
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 10,
          paddingBottom: 10,
          marginHorizontal: 10,
          borderBottomWidth: 1,
          borderBottomColor: "lightgray",
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>McDesi's</Text>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#7b797b" }}>
            Indian Chinese
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "white",
              backgroundColor: "green",
              fontWeight: "bold",
              paddingVertical: 2,
              paddingHorizontal: 6,
              borderRadius: 6,
            }}
          >
            4.2 Star
          </Text>
          <Text>Money for People</Text>
        </View>
      </View>
    </View>
    <View style={{ padding: 10 }}>
      <Text> Extra info </Text>
    </View>
  </View>
);

import React from "react";
import { View, Text, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

export default function Restaurants() {
  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}>
        1 Trillion restaurants around you
      </Text>
      {/* reusable component */}
      <RestaurantInfo />
      <RestaurantInfo />
      <RestaurantInfo />
      <RestaurantInfo />
      <RestaurantInfo />
    </View>
  );
}

const RestaurantInfo = () => (
  // TODO change border radius to box shadow
  <View style={{ margin: 10, borderWidth: 1, borderRadius: 18 }}>
    <View>
      <Image
        source={{
          uri: "https://www.manjulaskitchen.com/wp-content/uploads/everyday-lunch-menu-1024x576.jpg",
        }}
        style={{
          width: "100%",
          height: 200,
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
        }}
      />
      {/* EXTRA COMPONENTS on IMAGE */}
      <Text
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          paddingHorizontal: 4,
          fontSize: 12,
          fontWeight: "bold",
          color: "white",
          backgroundColor: "#7b797b",
          opacity: 0.6,
          borderRadius: 4,
        }}
      >
        Promoted
      </Text>
      <Entypo
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          color: "gray",
          backgroundColor: "white",
          padding: 8,
          borderRadius: 100,
        }}
        name="bookmark"
        size={20}
      />
      <Text
        style={{
          position: "absolute",
          right: 10,
          bottom: 10,
          backgroundColor: "white",
          paddingVertical: 2,
          paddingHorizontal: 4,
          borderRadius: 4,
          fontSize: 12,
          fontWeight: "bold",
          color: "#7b797b",
        }}
      >
        24 mins
      </Text>
      <Text
        style={{
          position: "absolute",
          bottom: 10,
          color: "white",
          backgroundColor: "crimson",
          fontWeight: "bold",
          paddingVertical: 2,
          paddingHorizontal: 6,
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
        }}
      >
        PRO extra 25% OFF
      </Text>

      {/* EXTRA COMPONENTS END HERE */}
    </View>

    {/* UNDER IMAGE INFO  */}
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

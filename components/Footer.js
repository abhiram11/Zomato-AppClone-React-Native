import React from "react";
import { View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Footer() {
  return (
    <View
      style={{
        position: "absolute",
        backgroundColor: "white",
        bottom: 0,
        zIndex: 100,
        borderTopWidth: 1,
        borderTopColor: "lightgray",
        margin: -6,
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {/* order */}
      <View
        style={{
          width: "33%",
          alignItems: "center",
          paddingVertical: 6,
          borderTopWidth: 2,
          borderTopColor: "crimson",
        }}
      >
        <Feather name="shopping-bag" size={24} />
        <Text>Order</Text>
      </View>

      {/* go out */}
      <View
        style={{
          width: "33%",
          alignItems: "center",
          paddingVertical: 6,
        }}
      >
        <MaterialCommunityIcons
          name="shoe-print"
          size={24}
          style={{
            color: "gray",
          }}
        />
        <Text
          style={{
            color: "gray",
          }}
        >
          Go Out
        </Text>
      </View>

      {/* pro */}
      <View
        style={{
          width: "33%",
          alignItems: "center",
          paddingVertical: 6,
        }}
      >
        <FontAwesome5
          name="crown"
          size={24}
          style={{
            color: "gray",
          }}
        />
        <Text
          style={{
            color: "gray",
          }}
        >
          Pro
        </Text>
      </View>
    </View>
  );
}

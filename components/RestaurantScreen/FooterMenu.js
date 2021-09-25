import React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function FooterMenu() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 24,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "black",
        position: "absolute",
        bottom: 20,
        right: 20,
        zIndex: 999,
      }}
    >
      <Ionicons
        name="menu"
        size={18}
        style={{ color: "white", paddingTop: 2 }}
      />
      <Text style={{ fontSize: 16, color: "white", marginHorizontal: 4 }}>
        Menu
      </Text>
    </View>
  );
}

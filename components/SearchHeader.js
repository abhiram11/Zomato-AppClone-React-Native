import React from "react";
import { View, Text, TextInput } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchHeader() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "lightgray",
      }}
    >
      <AntDesign
        name="search1"
        size={18}
        color="crimson"
        style={{ margin: 4 }}
      />
      <TextInput
        placeholder="Restaurant name, cuisine, or a dish..."
        style={{ fontSize: 16, marginLeft: 6 }}
      />
    </View>
  );
}

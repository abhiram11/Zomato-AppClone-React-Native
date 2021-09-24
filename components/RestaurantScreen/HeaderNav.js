import React from "react";
import { View, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function HeaderNav() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // marginHorizontal: 6,
      }}
    >
      <Feather name="chevron-left" size={32} style={{ marginLeft: -8 }} />
      <View style={{ flexDirection: "row" }}>
        <Feather name="camera" size={24} style={{ marginLeft: 30 }} />
        <FontAwesome name="bookmark-o" size={24} style={{ marginLeft: 30 }} />
        <FontAwesome5 name="share" size={24} style={{ marginLeft: 30 }} />
      </View>
    </View>
  );
}

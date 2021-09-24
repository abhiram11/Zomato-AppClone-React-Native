import React from "react";
import { View, Text } from "react-native";
import HeaderNav from "../components/RestaurantScreen/HeaderNav";
import ShortInfo from "../components/RestaurantScreen/ShortInfo";

export default function RestaurantScreen() {
  return (
    <View style={{ margin: 12 }}>
      <HeaderNav />
      <ShortInfo />
    </View>
  );
}

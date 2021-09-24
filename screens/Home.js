import React from "react";
import { View, Text } from "react-native";
import FoodCategories from "../components/FoodCategories";
import ProfileLocation from "../components/ProfileLocation";
import SearchHeader from "../components/SearchHeader";

export default function Home() {
  return (
    <View style={{ margin: 6 }}>
      <ProfileLocation />
      <SearchHeader />
      <FoodCategories />
    </View>
  );
}

import React from "react";
import { View, Text, ScrollView } from "react-native";
import FoodCategories from "../components/FoodCategories";
import ProfileLocation from "../components/ProfileLocation";
import Restaurants from "../components/Restaurants";
import SearchHeader from "../components/SearchHeader";

export default function Home() {
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <View style={{ margin: 6 }}>
        <ProfileLocation />
        <SearchHeader />
        <FoodCategories />
        <Restaurants />
      </View>
    </ScrollView>
  );
}

import React from "react";
import { View, Text, ScrollView } from "react-native";
import FoodCategories from "../components/FoodCategories";
import Footer from "../components/Footer";
import ProfileLocation from "../components/ProfileLocation";
import Restaurants from "../components/Restaurants";
import SearchHeader from "../components/SearchHeader";

export default function Home() {
  return (
    <View style={{ margin: 6 }}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <ProfileLocation />
        <SearchHeader />
        <FoodCategories />
        <Restaurants />
      </ScrollView>
      <Footer />
    </View>
  );
}

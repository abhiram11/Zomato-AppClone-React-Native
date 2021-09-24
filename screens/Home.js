import React from "react";
import { View, Text, ScrollView } from "react-native";
import FoodCategories from "../components/Home/FoodCategories";
import Footer from "../components/Home/Footer";
import ProfileLocation from "../components/Home/ProfileLocation";
import Restaurants from "../components/Home/Restaurants";
import SearchHeader from "../components/Home/SearchHeader";

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

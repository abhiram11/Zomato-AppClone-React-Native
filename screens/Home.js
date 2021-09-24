import React from "react";
import { View, Text } from "react-native";
import ProfileLocation from "../components/ProfileLocation";
import SearchHeader from "../components/SearchHeader";

export default function Home() {
  return (
    <View>
      <ProfileLocation />
      <SearchHeader />
    </View>
  );
}

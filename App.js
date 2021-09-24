import * as React from "react";
import { View, Text } from "react-native";
import Home from "./screens/Home";
import RestaurantScreen from "./screens/RestaurantScreen";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 45,
      }}
    >
      {/* <Home /> */}
      <RestaurantScreen />
    </View>
  );
}

import React from "react";
import { View, Text, Image } from "react-native";
import { Avatar } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ProfileLocation() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons
          style={{ marginRight: 5, marginLeft: 10 }}
          name="location-sharp"
          size={24}
          color="crimson"
        />
        {/* <Text style={{ marginRight: 10, marginLeft: 10 }}>Icon</Text> */}
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Home - Your Address
          </Text>
        </View>
      </View>
      <View style={{ marginRight: 10 }}>
        {/* <Text>Image</Text> */}
        <Avatar
          rounded
          source={{
            uri: "https://avatars.githubusercontent.com/u/20269286?v=4",
          }}
          size={32}
        />
      </View>
    </View>
  );
}

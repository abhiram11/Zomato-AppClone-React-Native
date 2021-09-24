import React from "react";
import { View, Text } from "react-native";

export default function ShortInfo() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: "whitesmoke",
      }}
    >
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          McDesi's Special Hotel
        </Text>
        <Text style={{ fontSize: 18 }}>Indian, Chinese</Text>
        <Text>Near Indore, Indore</Text>
        <Text>IMAGE -- more</Text>
      </View>

      {/* TODO Make these resuable as one component */}
      <View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            backgroundColor: "green",
            color: "white",
            paddingVertical: 6,
            paddingHorizontal: 6,
            marginTop: 6,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          3.9 Star{"\n"}DELIVERY
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            backgroundColor: "gray",
            color: "white",
            paddingVertical: 6,
            paddingHorizontal: 6,
            marginTop: 6,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          13{"\n"}PHOTOS
        </Text>
      </View>
    </View>
  );
}

import React from "react";
import { View, Text, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Restaurants() {
  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}>
        1 Trillion restaurants around you
      </Text>
      {/* reusable component */}
      <RestaurantInfo promoted offer pro />
      <RestaurantInfo offer pro />
      <RestaurantInfo offer />
      <RestaurantInfo promoted pro />
      <RestaurantInfo />
    </View>
  );
}

const RestaurantInfo = (props) => (
  // TODO change border radius to box shadow
  <View style={{ margin: 10, borderWidth: 1, borderRadius: 18 }}>
    <View>
      <Image
        source={{
          uri: "https://www.manjulaskitchen.com/wp-content/uploads/everyday-lunch-menu-1024x576.jpg",
        }}
        style={{
          width: "100%",
          height: 200,
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
        }}
      />
      {/* EXTRA COMPONENTS on IMAGE */}
      {props.promoted ? (
        <Text
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            paddingHorizontal: 4,
            fontSize: 12,
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#191919",
            opacity: 0.6,
            borderRadius: 4,
          }}
        >
          Promoted
        </Text>
      ) : null}
      <Ionicons
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          color: "black",
          backgroundColor: "white",
          padding: 10,
          borderRadius: 100,
        }}
        name="bookmark-outline"
        size={20}
      />
      <Text
        style={{
          position: "absolute",
          right: 10,
          bottom: 10,
          backgroundColor: "white",
          paddingVertical: 2,
          paddingHorizontal: 4,
          borderRadius: 4,
          fontSize: 12,
          fontWeight: "bold",
          color: "#7b797b",
        }}
      >
        24 mins
      </Text>
      {props.offer ? (
        <Text
          style={{
            position: "absolute",
            bottom: 40,
            color: "white",
            backgroundColor: "#006DFF",
            fontWeight: "bold",
            paddingVertical: 2,
            paddingHorizontal: 6,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
          }}
        >
          10% OFF{"\n"}Up to Rs. 40
        </Text>
      ) : null}

      {props.pro ? (
        <Text
          style={{
            position: "absolute",
            bottom: 10,
            color: "white",
            backgroundColor: "crimson",
            fontWeight: "bold",
            paddingVertical: 2,
            paddingHorizontal: 6,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
          }}
        >
          PRO extra 25% OFF
        </Text>
      ) : null}

      {/* EXTRA COMPONENTS END HERE */}
    </View>

    {/* UNDER IMAGE INFO  */}
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 10,
          paddingBottom: 10,
          marginHorizontal: 10,
          borderBottomWidth: 1,
          borderBottomColor: "lightgray",
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>McDesi's</Text>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#7b797b" }}>
            Indian Chinese
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "white",
              backgroundColor: "green",
              fontWeight: "bold",
              paddingVertical: 2,
              paddingHorizontal: 6,
              borderRadius: 6,
              alignSelf: "flex-end",
            }}
          >
            4.2 <FontAwesome name="star" style={{}} />
          </Text>
          <Text>Money for People</Text>
        </View>
      </View>
    </View>
    <View style={{ padding: 10 }}>
      <Text> Extra info </Text>
    </View>
  </View>
);

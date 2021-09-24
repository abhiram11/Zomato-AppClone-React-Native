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
      <RestaurantInfo promoted offer pro time={14} />
      <RestaurantInfo offer pro time={16} />
      <RestaurantInfo offer time={32} />
      <RestaurantInfo promoted pro time={24} />
      <RestaurantInfo />
    </View>
  );
}

const RestaurantInfo = (props) => (
  // TODO change border radius to box shadow
  <View
    style={{
      margin: 10,
      borderWidth: 2,
      borderRadius: 18,
      borderColor: "whitesmoke",
    }}
  >
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
        {props.time} mins
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
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            McDesi's Special Hotel
          </Text>
          <Text
            style={{
              marginTop: 4,
              fontSize: 14,
              fontWeight: "bold",
              color: "#7b797b",
            }}
          >
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
          <Text
            style={{
              marginTop: 4,
              fontSize: 14,
              fontWeight: "bold",
              color: "#7b797b",
            }}
          >
            Rs.200 for one
          </Text>
        </View>
      </View>
    </View>
    <View style={{ padding: 10 }}>
      <ExtraInfoOne />
      {/* <ExtraInfoTwo /> */}
    </View>
  </View>
);

const ExtraInfoOne = () => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Ionicons
      name="trending-up"
      size={14}
      style={{
        color: "white",
        backgroundColor: "#7B679A",
        padding: 4,
        borderRadius: 100,
      }}
    />
    <Text style={{ marginHorizontal: 6, color: "gray" }}>
      390+ orders placed from here recently
    </Text>
    <Image
      source={{
        uri: "https://b.zmtcdn.com/data/o2_assets/e50eb01feab6bd50e50430f34b4645ac1613542991.png",
      }}
      style={{ width: 62, height: "100%", marginLeft: "auto" }}
    />
  </View>
);

const ExtraInfoTwo = () => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Image
      source={{
        uri: "https://b.zmtcdn.com/data/o2_assets/e50eb01feab6bd50e50430f34b4645ac1613542991.png",
      }}
      style={{ width: 62, height: "100%" }}
    />

    <Text style={{ marginHorizontal: 6, color: "gray" }}>
      390+ orders placed from here recently
    </Text>
    <Ionicons
      name="trending-up"
      size={14}
      style={{
        color: "white",
        backgroundColor: "#7B679A",
        padding: 4,
        borderRadius: 100,
        marginLeft: "auto",
      }}
    />
  </View>
);

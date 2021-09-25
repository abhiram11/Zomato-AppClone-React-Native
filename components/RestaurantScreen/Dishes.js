import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SearchBar } from "../Home/SearchHeader";

export default function Dishes() {
  const localDishesData = [
    {
      dish: "Shahi Paneer",
      price: 180,
      rating: 4.0,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlw38ZVWw74XBNysmFmkqcHBA34C1e1UcvIw&usqp=CAU",
      totalRatings: 120,
    },
    {
      dish: "Boondi Raita",
      price: 120,
      rating: 4.2,
      imageUrl:
        "https://simmertoslimmer.com/wp-content/uploads/2019/04/Boondi-raita.jpg",
      totalRatings: 160,
    },
    {
      dish: "Rajma Chawal Combo",
      price: 280,
      rating: 4.1,
      imageUrl:
        "https://eatmoreart.org/wp-content/uploads/2020/05/Rajma-Chawal-Indian-Curried-Kidney-Beans-Rice-IMG_1801-scaled.jpg",
      totalRatings: 280,
    },
    {
      dish: "Senzu Bean",
      price: 99999,
      rating: 5,
      imageUrl:
        "https://i.pinimg.com/originals/ed/a9/b8/eda9b816a6d11d00905957565803e656.png",
      totalRatings: 100000,
    },
    {
      dish: "Senzu Bean",
      price: 99999,
      rating: 5,
      imageUrl:
        "https://i.pinimg.com/originals/ed/a9/b8/eda9b816a6d11d00905957565803e656.png",
      totalRatings: 100000,
    },
    {
      dish: "Senzu Bean",
      price: 99999,
      rating: 5,
      imageUrl:
        "https://i.pinimg.com/originals/ed/a9/b8/eda9b816a6d11d00905957565803e656.png",
      totalRatings: 100000,
    },
  ];
  return (
    <View>
      <SearchBar placeholder="Search within the menu..." />
      <ScrollView vertical>
        {localDishesData.map((dish, index) => (
          <Dish
            dishName={dish.dish}
            dishPrice={dish.price}
            dishRating={dish.rating}
            dishTotalRatings={dish.totalRatings}
            dishImage={dish.imageUrl}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const Dish = (props) => (
  <View
    style={{
      flexDirection: "row",
      borderTopWidth: 1,
      borderTopColor: "whitesmoke",
      justifyContent: "space-between",
      paddingHorizontal: 6,
      paddingVertical: 12,
    }}
  >
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{props.dishName}</Text>
      <Text style={{ fontWeight: "bold" }}>Rs.{props.dishPrice}</Text>
      <View style={{ flexDirection: "row", marginTop: 48 }}>
        <Text
          style={{
            color: "gray",
            backgroundColor: "gold",
            paddingHorizontal: 6,
            borderRadius: 6,
          }}
        >
          {props.dishRating} Star
        </Text>
        <Text style={{ color: "gray" }}> ({props.dishTotalRatings}+)</Text>
      </View>
    </View>
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{
          uri: props.dishImage,
        }}
        style={{ width: 140, height: 100, borderRadius: 10 }}
      />
      <TouchableOpacity activeOpacity={0.7}>
        <Text
          style={{
            color: "crimson",
            backgroundColor: "#fff3f3",
            marginTop: -18,
            paddingVertical: 6,
            paddingHorizontal: 30,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "crimson",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          ADD +
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

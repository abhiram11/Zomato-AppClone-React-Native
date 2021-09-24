import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"; // crown, caret-down

import Ionicons from "react-native-vector-icons/Ionicons"; // swap-vertical popular,

const categoriesData = [
  { title: "MAX Safety" },
  { title: "PRO", icon: "crown", left: true },
  { title: "Cuisines", icon: "caret-down" },
  { title: "Rating 4.0+" },
  { title: "Fastest Delivery" },
  { title: "Offers" },
  { title: "Takeaway" },
];

export default function SearchHeader() {
  return (
    <View style={{ marginBottom: 10 }}>
      {/* Searchbox */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: 10,
          paddingVertical: 6,
          paddingHorizontal: 8,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "lightgray",
        }}
      >
        <AntDesign
          name="search1"
          size={18}
          color="crimson"
          style={{ margin: 4 }}
        />
        <TextInput
          placeholder="Restaurant name, cuisine, or a dish..."
          style={{ fontSize: 16, marginLeft: 6 }}
        />
      </View>
      {/* Scrollable Categories */}
      <View style={{ flexDirection: "row" }}>
        <ScrollView
          horizontal
          style={{ marginLeft: 6 }}
          showsHorizontalScrollIndicator={false}
        >
          {categoriesData.map((category, index) => (
            <CategoriesSearch
              category={category.title}
              directionLeft={category.left}
              iconName={category.icon}
              key={index}
            />
          ))}
        </ScrollView>
        {/* swap-vertical */}
        <CategoriesSearch category="Popular" isPopular directionLeft />
      </View>
    </View>
  );
}

const CategoriesSearch = (props) => {
  return (
    <View
      style={{
        padding: 6,
        margin: 4,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "lightgray",
      }}
    >
      <TouchableOpacity style={{ flexDirection: "row" }}>
        {props.directionLeft ? (
          props.isPopular ? (
            <Ionicons name="swap-vertical" size={12} style={{ padding: 3 }} />
          ) : (
            <FontAwesome5
              name={props.iconName}
              size={10}
              style={{ padding: 3 }}
            />
          )
        ) : null}
        <Text style={{ fontSize: 12 }}>{props.category}</Text>
        {props.directionLeft ? null : (
          <FontAwesome5
            name={props.iconName}
            size={10}
            style={{ padding: 3 }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

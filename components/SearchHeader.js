import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const categoriesData = [
  { title: "MAX Safety" },
  { title: " <Icon< PRO" },
  { title: "Cuisines ^" },
  { title: "Rating 4.0+" },
  { title: "Fastest Delivery" },
  { title: "Offers" },
  { title: "Takeaway" },
];

export default function SearchHeader() {
  return (
    <View>
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
      {/* Make a component that can be re-used */}
      <View style={{ flexDirection: "row" }}>
        <ScrollView
          horizontal
          style={{ marginLeft: 6 }}
          showsHorizontalScrollIndicator={false}
        >
          {categoriesData.map((category, index) => (
            <CategoriesSearch category={category.title} key={index} />
          ))}
        </ScrollView>
        <CategoriesSearch category="^^ Popular" isPopular />
      </View>
    </View>
  );
}

const CategoriesSearch = (props) => {
  // const [clicked, setClicked] = useState(false);
  // const toggleColor = () => {
  //   setClicked(!clicked);
  // };

  return (
    // set overall margins for the view later
    <View
      style={{
        padding: 6,
        // margin: props.isPopular ? 0 : 4,
        margin: 4,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "lightgray",
        // borderColor: clicked ? "crimson" : "lightgray",
      }}
    >
      <TouchableOpacity
      // onClick={() => {
      //   setClicked(() => !clicked);
      // }}
      >
        <Text style={{ fontSize: 12 }}>{props.category}</Text>
      </TouchableOpacity>
    </View>
  );
};

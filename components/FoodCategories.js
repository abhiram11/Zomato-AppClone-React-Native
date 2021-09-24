import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const foodCategoryData = [
  {
    imageUrl:
      "https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg",
    title: "Healthy",
  },
  {
    imageUrl:
      "https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg",
    title: "Home Style",
  },
  {
    imageUrl:
      "https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg",
    title: "Poha",
  },
  {
    imageUrl:
      "https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg",
    title: "Kachori",
  },
  {
    imageUrl:
      "https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg",
    title: "Samosa",
  },
  {
    imageUrl:
      "https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg",
    title: "Sandwich",
  },
  {
    imageUrl:
      "https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg",
    title: "Paratha",
  },
  {
    imageUrl:
      "https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg",
    title: "Vada",
  },
];

export default function FoodCategories() {
  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Eat what makes you happy
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginVertical: 6,
          justifyContent: "space-around",
        }}
      >
        {/* Another Reusable component coming!!! */}
        {foodCategoryData.map((foodCategory, index) => (
          <FoodCategory
            key={index}
            image={foodCategory.imageUrl}
            heading={foodCategory.title}
          />
        ))}
      </View>
      <TouchableOpacity>
        <View
          style={{ borderWidth: 1, borderColor: "lightgray", borderRadius: 10 }}
        >
          <Text
            style={{ paddingVertical: 6, fontSize: 12, alignSelf: "center" }}
          >
            see more ^
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const FoodCategory = (props) => (
  <View
    style={{
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

      marginVertical: 10,
    }}
  >
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: 80, height: 80, borderRadius: 100 }}
    />
    <Text
      style={{ fontSize: 12, fontWeight: "bold", color: "gray", marginTop: 4 }}
    >
      {props.heading}
    </Text>
  </View>
);

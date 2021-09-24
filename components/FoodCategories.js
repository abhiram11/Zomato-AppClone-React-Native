import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const foodCategoryData = [
  {
    imageUrl:
      "https://static.onecms.io/wp-content/uploads/sites/35/2021/02/12/heart-healthy-foods-promo.jpg",
    title: "Healthy",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/oecyzqehfysmfzczqeov",
    title: "Home Style",
  },
  {
    imageUrl:
      "https://achalafood.com/wp-content/uploads/2018/07/mixed-vegetable-poha-featured-image.jpg",
    title: "Poha",
  },
  {
    imageUrl:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2013/01/matar-kachori-recipe-2-500x375.jpg",
    title: "Kachori",
  },
  {
    imageUrl:
      "https://www.cookwithmanali.com/wp-content/uploads/2019/08/Homemade-Samosa-500x500.jpg",
    title: "Samosa",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHCQcWavSwL86mByRUzILw_RPOMiQtB2FDw&usqp=CAU",
    title: "Sandwich",
  },
  {
    imageUrl:
      "https://i.ndtvimg.com/i/2018-05/aloo-ka-paratha_650x400_61525766113.jpg",
    title: "Paratha",
  },
  {
    imageUrl:
      "https://cdn1.foodviva.com/static-content/food-images/breakfast-recipes/medu-vada/medu-vada.jpg",
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
            see more <FontAwesome5 name="chevron-down" size={10} />
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

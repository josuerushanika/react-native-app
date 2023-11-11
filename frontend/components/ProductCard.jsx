import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../styles/styles";

const ProductCard = ({
  stock,
  name,
  price,
  image,
  id,
  addToCardHandler,
  i,
  navigate,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate.navigate("productdetails", { id })}
    >
      <View
        style={{
          elevation: 5,
          width: 220,
          alignItems: "center",
          justifyContent: "space-between",
          margin: 20,
          borderRadius: 20,
          height: 400,
          backgroundColor: i % 2 === 0 ? colors.color1 : colors.color1,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            with: "100%",
            height: "200%",
            resizeMode: "contain",
            position: "absolute",
            left: 50,
            top: 105,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            padding: 20,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 5,
              fontWeight: "300",
            }}
          >
            {name}
          </Text>

          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 5,
              fontWeight: "300",
            }}
          >
            ${price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

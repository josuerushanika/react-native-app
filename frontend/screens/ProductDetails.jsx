import { View, Text } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";

const ProductDetails = ({ route: { params } }) => {
  console.log(params.id);

  return (
    <View style={{
        ...defaultStyle,
        padding: 0,
        backgroundColor: colors.color1,
    }}>
        <Headers/>
      <Text>ProductDetails</Text>
    </View>
  );
};

export default ProductDetails;

import { View, Text } from "react-native";
import { colors } from "../styles/styles";
import React from "react";

const CartItem = ({
  name,
  amount,
  qty,
  stock,
  index,
  imgSrc,
  id,
  decrementHandler,
  incrementHandler,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        marginVertical: 20,
      }}
    >
      <View
        style={{
          width: "40%",
          backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <Image
          source={{ uri: imgSrc }}
          style={{ with: 200, height: "100%", resizeMode: "contain" }}
        />
      </View>
      <Text>CartItem</Text>
    </View>
  );
};

export default CartItem;

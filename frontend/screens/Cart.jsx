import { View, Text } from "react-native";
import { defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import React from "react";
import Heading from "../components/Heading";

const Cart = () => {
  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
      }}
    >
      {/* Header */}
      <Header back={true} emptyCart={true} />

      {/*  Heading */}
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
      />

      <Text>Cart</Text>
    </View>
  );
};

<Heading />;

export default Cart;

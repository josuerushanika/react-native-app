import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import React from "react";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";

const cartItems = [
  {
    name: "Macbook",
    image:
      "https://i5.walmartimages.com/asr/0a820426-4454-45a7-ab86-dc918308d5da.25f65a4a76d1774b8de643e67bcf26a3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    product: "dhdhdhdhdhdhdhdhdhdheieieieieryryrycbc",
    stock: 3,
    price: 4999,
    quantity: 2,
  },
  {
    name: "Shoes",
    image:
      "https://www.cdusport.com/wp-content/uploads/2013/08/google-hangout-usain-bolt.jpg",
    product: "maeuyssxjxksry",
    stock: 5,
    price: 49909,
    quantity: 5,
  },
];

const Cart = () => {
  const decrementHandler = () => {
   
  }

  const incrementHandler = () => {
   
  }

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

      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView>
          {cartItems.map((i, index) => (
            <CartItem
              key={i.product}
              id={i.product}
              name={i.name}
              stock={i.stock}
              amount={i.price}
              imgSrc={i.image}
              index = {index}
              qty = {i.quantity}
              incrementHandler = {incrementHandler}
              decrementHandler = {incrementHandler}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text> $ 5 </Text>
      </View>

   
    </View>
  );
};

<Heading />;

export default Cart;

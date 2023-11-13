import { View, Text, Dimensions, StyleSheet,Image } from "react-native";
import React, { useRef } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetails = ({ route: { params } }) => {
  console.log(params.id);

  const isCarousel = useRef(null);

  const images = [
    {
      id: "aakakakakakaka",
      url: "djdjdjoowowsjsjsjxnxnxnxnxxnxnx",
    },
    {
        id: "aakakakakakaka",
        url: "djdjdjoowowsjsjsjxnxnxnxnxxnxnx",
    },

  ];

  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
        backgroundColor: colors.color1,
      }}
    >
      <Header back={true} />

      {/* Carousel */}

      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />
      <Text>ProductDetails</Text>
    </View>
  );
};

const CarouselCardItem = (item, index) => (
  <View style={style.container}>
    <Image source={{ uri: item.url }} style={style.image} />
  </View>
);

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
  },
});
export default ProductDetails;

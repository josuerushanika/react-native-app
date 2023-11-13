import { View, Text, Dimensions,  StyleSheet } from "react-native";
import React, { useRef } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";

const SLIDER_WIDTH =  Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;


const ProductDetails = ({ route: { params } }) => {
  console.log(params.id);

  const isCarousel = useRef(null);
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
        sliderWidth={SLIDER - WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data= {images}
        renderItem={CarouselCardItem}
         />
      <Text>ProductDetails</Text>
    </View>
  );
};

const CarouselCardItem = () => {
   <View style={style.container}>
     <Image source={{uri: item.url}} style={style.image}/>
   </View>
}

const style = StyleSheet.create ({
    container : {},
    image: {
        width: ITEM_WIDTH,
        resizeMode: "contain",
        height: 250,
    }
})
export default ProductDetails;

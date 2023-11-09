import { View, Text } from "react-native";
import React from "react";
import { defaultStyle } from "../styles/styles";

const Home = () => {
  return (
    <View style={defaultStyle}>
      {/* Header */}

      <view>
        <Text style={{fontSize: 25}}>Our </Text>
        <Text style={{fontSize: 25, fontWeight: "900" }}>Products </Text>
      </view>
    </View>
  );
};

export default Home;

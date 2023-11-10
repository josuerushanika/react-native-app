import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import React from "react";
import { defaultStyle, colors } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";

const Home = () => {
  const categories = [
    { category: "Nice", _id: "sndjskad" },
    { category: "Nice2", _id: "sndjskadjd" },
    { category: "Nice4", _id: "sndjskadmdjd" },
    { category: "Nice5", _id: "sndjskadkjdjd" },
    { category: "Nice6", _id: "sndjskaddkjdjd" },
    { category: "Nice7", _id: "sndjskadopdjd" },
    { category: "Nice8", _id: "sndjska90djd" },
    { category: "Nice9", _id: "sndjskajijdjd" },
  ];

  const [category,setCategory ] = useState("");

  const categoryButtonHandler = (id) => {
    setCategory(id);
  }

  console.log(category)

  return (
    <View style={{ defaultStyle }}>
      {/* Heading Row */}
      <Header />
      <View
        style={{
          paddingTop: 70,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontSize: 25 }}>Our </Text>
          <Text style={{ fontSize: 25, fontWeight: "900" }}>Products </Text>
        </View>
        {/* Search Bar */}
        <View>
          <TouchableOpacity>
            <Avatar.Icon
              icon={"magnify"}
              size={50}
              color={"gray"}
              style={{ backgroundColor: colors.color2, elevation: 12 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/*  Categories */}
      <View
        style={{
          flexDirection: "row",
          height: 80,
        }}
      >
        <ScrollView horizontal contentContainerStyle={{
          alignItems: "center",
        }} showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (
            <Button
              key={item._id}
              style={{
                backgroundColor: category === item._id ? colors.color1 : colors.color5,
                borderRadius: 100,
                margin: 5,
              }}
              onPress= {() => categoryButtonHandler(item._id)}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: category === item._id ? colors.color2 : "gray",
                }}
              >
                {item.category}
              </Text>
            </Button>
          ))}
        </ScrollView>
      </View>

      {/* Product */}
    </View>
  );
};

export default Home;

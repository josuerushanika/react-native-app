import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import React from "react";
import { defaultStyle, colors } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";

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

const products = [
  {
    price: 23123,
    stock: 23,
    name: "Sample",
    _id: "Sadayawiwo",
    images: [{}],
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdlinkmea.com%2Findex.php%2Fproduct%2Fdetails%3Fdet%3DdkNPSHNzb2ZwY3dMUUlibTZFOVBpQT09&psig=AOvVaw1fANaL8XifQVyYPqeneo2L&ust=1699753019131000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPjl5MnnuoIDFQAAAAAdAAAAABAZ",
  },
];

const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigation()

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCardHandler = (id) => {
    console.log("Add to cart ", id);
  };

  console.log(category);

  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}

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
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
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
          <ScrollView
            horizontal
            contentContainerStyle={{
              alignItems: "center",
            }}
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
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
      </View>
      {/* Product */}
      <View style={{ flex: 1 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.map((item, index) => (
            <ProductCard
              stock={item.stock}
              name={item.name}
              price={item.price}
              image={item.images[0]?.url}
              addToCardHandler={addToCardHandler}
              id={item._id}
              key={item._id}
              i={index}
              navigate={navigate}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

const Header = ({ back , emptyCart=false }) => {
  const navigate = useNavigation();
  const emptyCartHandler  =  () => {
    console.log("Empty Cart")
  }

  return (
    <>
      {back && (
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 20,
            top: 40,
            zIndex: 10,
          }}
          onPress={() => navigate.goBack()}
        >
          <Avatar.Icon
            style={{
              backgroundColor: colors.color4,
            }}
            icon={"arrow-left"}
            color={colors.color3}
          />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={{
          position: "absolute",
          right: 20,
          top: 40,
          zIndex: 10,
        }}
        onPress={() => navigate.navigate("cart")}
      >
        <Avatar.Icon
          style={{
            backgroundColor: colors.color4,
          }}
          icon={emptyCart ? "delete-outline" : "cart-outline"}
          color={colors.color3}
        />
      </TouchableOpacity>
    </>
  );
};

export default Header;

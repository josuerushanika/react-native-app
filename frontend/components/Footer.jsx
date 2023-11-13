import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/styles";
import { Avatar } from "react-native-paper";

const Footer = ({ activeRoute = "home" }) => {
  const navigate = useNavigation();
  const isAuthenticated = true;

  const navigationHandler = (key) => {};

  return (
    <View
      style={{
        backgroundColor: colors.color1,
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigationHandler(1)}
        >
          <Avatar.Icon
            color={colors.color2}
            size={50}
            style={{ backgroundColor: colors.color1 }}
            icon={activeRoute === "cart" ? "shopping" : "shopping-outline"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigationHandler(1)}
        >
          <Avatar.Icon
            color={colors.color2}
            size={50}
            style={{ backgroundColor: colors.color1 }}
            icon={activeRoute === "profile" ? "account" : "account-outline"}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          width: 50,
          height: 50,
          backgroundColor: colors.color2,
          borderRadius: 90,
          justifyContent: "center",
          alignItems: "center",
          top: -9,
          alignSelf: "center",
        }}
      >
        <View
          style={{
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigationHandler(0)}
          >
            <Avatar.Icon
              color={colors.color2}
              size={50}
              style={{ backgroundColor: colors.color1 }}
              icon={activeRoute === "profile" ? "account" : "account-outline"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Footer;

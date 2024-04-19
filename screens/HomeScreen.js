import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
const HomeScreen = () => {
  return (
    <SafeAreaView>
      {/* search bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,

          margin: 10,
          marginTop: 50,
          padding: 10,
          borderColor: "#c0c0c0",
          borderRadius: 7,
        }}
      >
        <TextInput placeholder="search for items" style={{ fontSize: 17 }} />
        <AntDesign name="search1" size={24} color="black" />
      </View>
      {/* Carousal */}
      <Carousel />
      {/* food types */}
      <FoodTypes />
      {/* Bottom navigation bar */}
      <View style={styles.bottomNavBar}>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Cart" onPress={() => navigation.navigate("Cart")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomNavBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#c0c0c0",
  },
});

export default HomeScreen;

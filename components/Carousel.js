import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg",
    "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg",
    "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg",
  ];
  return (
    <View>
      <SliderBox
        images={images}
       autoPlay
       circleLoop
       dotColor="red"
       inactiveDotColor="black"
       ImageComponentStyle={{borderRadius: 6, width: '95%'}}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});

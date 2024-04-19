import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:'#fff'}}>
      {/* search bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomWidth: 1,
borderBottomStyle: 'solid',
borderBottomColor: 'rgba(40, 44, 63, 0.1)',
          
          marginTop: 50,
          padding: 10,
          zIndex:10,
        }}
      >
      <View style={{alignItems:'center',flexDirection:'row'}}>
      <Entypo name="location-pin" size={24} color="black" />
      <Text style={{color:'#282c3f',fontSize:18,fontWeight:800, marginLeft:5, letterSpacing: -0.4, fontFamily: 'Basis_Grotesque_Pro'}}>Other</Text>
      </View>
       
       <View style={{backgroundColor:'#3d4152',padding:10, borderRadius:30}}>
       <MaterialCommunityIcons name="account" size={24} color="white" />
       </View>
      
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between', margin:10, alignItems:'center' }}>
      <Image source={{uri:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/ak4f9kufbxgb8fprancy'}} style={{ width:194,height:140,}}/>
      <Image source={{uri:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/9887a65f6a7e11c18965c02bbf255e79'}} style={{ width:164,height:140,}}/>
      </View>
        {/* food types */}
        <FoodTypes />
      {/* Carousal */}
      <Carousel />
    
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default HomeScreen;

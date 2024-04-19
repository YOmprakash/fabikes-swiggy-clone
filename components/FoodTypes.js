import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'

const FoodTypes = () => {
    const types = [
        {
            id:"0",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
            name:"Pizza",
        },
        {
            id:"1",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
            name:"Dessert"
        },
        {
            id:"2",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
            name:"Burger"
        },
        {
            id:"3",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
            name:"Salad",

        },
        {
            id:"4",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
            name:"Sandwiches"
        }
    ]

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item,index) => (
            <View style={{margin:10}} key={index}>
                <Image source={{uri:item.image}} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:6,textAlign:"center"}}>{item.name}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default FoodTypes

const styles = StyleSheet.create({})
import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'

const FoodTypes = () => {
    const types = [
        {
            id:"0",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
            
        },
        {
            id:"1",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png",
           
        },
        {
            id:"2",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
            name:"Burger"
        },
        {
            id:"3",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png",
            name:"Salad",

        },
        {
            id:"4",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Juice.png",
          
        },
        {
            id:"5",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png",
           
        },
        {
            id:"6",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Uttapam.png",
            
        },
        {
            id:"7",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
          
        },
        {
            id:"8",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Bonda.png",
         
        },
        {
            id:"9",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
         
        }
    ]

  return (
    <View>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <Image source={{uri:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/sl9oogwe7n5dusolt5xe'}} style={{width:30,height:30,marginLeft:10}}/>
    <Text style={{color:'#282c3f', marginLeft:10,marginTop:10,  letterSpacing: -0.4, fontFamily: 'Basis_Grotesque_Pro',
    fontWeight: '800',
    fontSize: 24,}}>What's on your mind?</Text>
    </View>
   
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item,index) => (
            <View style={{margin:10}} key={index}>
                <Image source={{uri:item.image}} style={{ width:100,height:100,  backgroundColor: 'transparent'}}/>
               
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default FoodTypes

const styles = StyleSheet.create({})
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";


import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
      navigation.navigate("Home");
    };
  return (
    <SafeAreaView>
      <View style={{marginTop:100, padding: 10, margin:10}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between",  alignItems:'center', marginBottom: 10}}>
          <View >
          <Text style={{fontSize:30, fontWeight:500, color: '#282c3f' }}>Login</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <Text style={{ marginRight: 5 }}>or</Text>
  <Text style={{fontSize:15, fontWeight:500, color: '#fc8019' ,marginTop:5}}> Create an Account</Text>
</View>
          <View style={{ marginTop:10, borderBottomWidth: 1, borderBottomColor: '#000', width:30 }} />
          </View>
         
          <Image style={{ width: 100, height: 100 }}
            source={{ uri: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" }}
          />
        </View>
        <View style={styles.form}>
          <TextInput style={{   
    height: 60,
 
    paddingLeft: 10,
    
fontSize: 16,
   
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,}} placeholder="Phone Number" keyboardType="phone-pad" />

<TouchableOpacity style={{ width: '100%',
    textDecoration: 'none',
    cursor: 'pointer',
   
    textAlign: 'center',
    border: 'none',
   
    fontSize: 14,alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    height: 50,
    padding: '0 2rem',
    color: '#fff',
    backgroundColor: '#fc8019',
    boxShadow: '0 1px 3px 0 rgba(0,0,0,.12)',
    textTransform: 'uppercase',}}  onPress={handleLogin}>
  <Text style={{color: 'white'}}>Login</Text>
</TouchableOpacity>
<Text style={{fontSize: 12,
    color: '#686b78',
    marginTop: 6,
    fontWeight: 500,}}>By clicking on Login, I accept the Terms & Conditions & Privacy Policy </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

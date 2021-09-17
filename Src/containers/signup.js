import React from 'react';
import {
 StyleSheet,Text, View,Button,Image,TextInput,TouchableOpacity
} from 'react-native';
import { useState } from 'react';

import { singupUser } from '../store/action';
import { useDispatch } from 'react-redux';
import logo from '../Assets/logo.png'






export default function Signup({navigation}) {

   const [username, setUsername] = useState("") 
   const [password, setPassword] = useState("")  
   const [email, setEmail] = useState("")  
   const dispatch = useDispatch();
  


  function register (){

       let user={
         username,
         email,
         password
       }
      dispatch(singupUser(user))
   } 

  return (
    <View style={styles.container}>
    <Image style={styles.image} source={logo} />

    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="UserName."
        placeholderTextColor="#003f5c"
        onChangeText={(text) => setUsername(text)}
      />
    </View>

    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Email."
        placeholderTextColor="#003f5c"
        onChangeText={(text) => setEmail(text)}
      />
    </View>

    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
    </View>
    

    <TouchableOpacity>
      <Text style={styles.forgot_button}>Forgot Password?</Text>
    </TouchableOpacity>

  

    <TouchableOpacity  onPress={register} style={styles.loginBtn}>
      <Text on style={styles.loginText}>Signup</Text>
    </TouchableOpacity>

    <TouchableOpacity 
     onPress={() => navigation.navigate('Login')}
     style={styles.loginBtn}>

      <Text style={styles.loginText}>Login</Text>
    </TouchableOpacity>
    
    
  </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:"center",
    
  },
  image: {
    resizeMode:'contain',
    width:"40%",
    height:"30%"
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "80%",
    height: 55,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    width:"100%",
     textAlign:"center"
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "70%",
    borderRadius: 30,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#FF1493",
  },
  loginText:{
    fontSize:20,
    color:"#fff",
    
},
});



























   // auth()
    // .createUserWithEmailAndPassword(email, password)
    // .then(() => {
    //   console.log('User account created & signed in!');
    // })
    // .catch(error => {
    //   if (error.code === 'auth/email-already-in-use') {
    //     console.log('That email address is already in use!');
    //   }
  
    //   if (error.code === 'auth/invalid-email') {
    //     console.log('That email address is invalid!');
    //   }
  
    //   console.error(error);
    // });
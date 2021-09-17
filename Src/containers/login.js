import React from 'react';
import {
  StyleSheet,
  Text, 
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { loginUser } from '../store/action';
import { useDispatch } from 'react-redux';
import logo from '../Assets/logo.png'



export default function Signup({navigation}) {

  const [password, setPassword] = useState("")  
  const [email, setEmail] = useState("") 
  const dispatch = useDispatch()
 
  
  const login =()=>{
      let user = {
        email,
        password
      }
      dispatch(loginUser(user,navigation))
      .then((uid)=>{
        navigation.navigate("Home",{user:uid})
      })
      .catch((error)=>{
        alert(error) 
      })
     
   }

  return (
    <View style={styles.container}>
    <Image style={styles.image} source={logo} />

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

    
    <TouchableOpacity onPress={login} style={styles.loginBtn}>
      <Text style={styles.loginText}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity 
        onPress={() => navigation.navigate('Signup')}
       style={styles.loginBtn}>
      <Text style={styles.loginText}>Create Account</Text>
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
    height: 50,
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



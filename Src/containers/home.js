import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { getUser,getAllUsers } from '../store/action';
import { useEffect,useState } from 'react';
import {StyleSheet,Text, View,Image,FlatList, ImageBackground,TouchableOpacity,ScrollView,SafeAreaView, } from 'react-native';

import img1 from "../Assets/circle.png"
import background from "../Assets/background.jpg"


export default function Home({navigation}) {
  
  const user = useSelector(state => state.user)
  const AllUser = useSelector(state => state.allUsers)
  const route = useRoute();
  const dispatch = useDispatch()
  const image = { uri: "https://wallpaperaccess.com/full/2224368.png" };

  useEffect(()=>{
      dispatch(getUser(route.params.user))
      dispatch(getAllUsers())
      
  },[])

  const chat =()=>{
    
    dispatch(chatdata(user,navigation))
    .then((uid)=>{
      navigation.navigate("Chat",{user:uid})
    })
    .catch((error)=>{
      alert(error) 
    })
   
 }
  
  return (
     
    <ImageBackground source={image} resizeMode="cover" style={{flex: 1,
    justifyContent: "center"}}>

    <View style={styles.sectionContainer}>
      <View  style={{flexDirection:"row" ,width:"100%"}}>
      <TouchableOpacity style={{padding:5 ,borderWidth:2, borderColor:"#fff" ,backgroundColor:"#fff"}}>
        <Text style={{fontSize:20,margin:5,color:"#000000"}}>Cam</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:5 ,borderWidth:2, borderColor:"#fff" ,width:"30%",backgroundColor:"#fff"}}>
        <Text style={{fontSize:20,margin:5,color:"#000000"}}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:5 ,borderWidth:2, borderColor:"#fff",width:"30%", backgroundColor:"#fff"}}>
        <Text style={{fontSize:20,margin:5,color:"#000000"}}>Status</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:5 ,borderWidth:2, borderColor:"#fff", width:"30%", backgroundColor:"#fff"}}>
        <Text style={{fontSize:20,margin:5,color:"#000000"}}>Call</Text>
      </TouchableOpacity>
      </View>
     {/* <Text style={styles.Text}>Home</Text>
     <Text style={styles.Text}>{user.username}</Text>
     <Text style={styles.Text}>{user.email}</Text> */}
     <ScrollView style={{width:"100%"}}>
     <View>
     {AllUser.map((e, i) => {
       return (  e.email !== user.email &&
        
        <View key={i} style={{}}>
                  <TouchableOpacity style={{padding:15 ,flexDirection:"row"}}>
                  <Image style={{width:50,height:50, borderWidth:2, borderColor:"#fff" , backgroundColor:"#fff",borderRadius:50}} />
                  <Text style={{fontSize:20,margin:5,marginLeft:5,color:"#fff"}}>{e.username}</Text>
                  {/* <Text style={{fontSize:15}}>{e.email}</Text> */}
                  </TouchableOpacity>
             </View>
            
            
            
            ) 
          })}
     </View>
     </ScrollView>
   </View>
    </ImageBackground>
  )
}



const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
    
    alignItems:"center",
    justifyContent:"center"
  },
  Text: {

    fontSize: 25,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});



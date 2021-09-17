import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { getUser } from '../store/action';
import { useEffect } from 'react';
import {StyleSheet,Text, View,} from 'react-native';



export default function Chat({navigation}) {
  
  const user = useSelector(state => state.user)
  const route = useRoute();
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getUser(route.params.user))
  },[])

  return (
   <View style={styles.sectionContainer}>
     <Text style={styles.Text}>Chat</Text>
     
     <View>
     
     </View>
   </View>
  )
}



const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
    backgroundColor:'#fff',
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




import React from 'react';
import {
Button,  StyleSheet,Text,View,
} from 'react-native';



export default function About({navigation}) {
  return (
   <View style={styles.sectionContainer}>
     <Text style={styles.Text}>About</Text>
     <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
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



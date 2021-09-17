import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from "../containers/home";
import About from "../containers/about";
import Login from "../containers/login";
import Signup from "../containers/signup";
import Profile from '../containers/profile';
import Chat from '../containers/chat'

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Chat" component={Chat} />
          
  
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;
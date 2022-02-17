import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Dimensions} from 'react-native';
import HomePage from './tabs/Home/home' 
import LoginPage from './tabs/Login/login'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

function App({ navigation }) {
  return (
    <LoginPage navigation={navigation} />   
  );
}

function Homepage({ navigation }) {
  return (
    <HomePage navigation={navigation} />
  );
}

const Stack = createStackNavigator();

function Nav() {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={App} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={Homepage} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Nav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e28',
    width: Dimensions.get("screen").width, //for full screen
    height: Dimensions.get("window").height   
  },  
});


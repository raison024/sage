import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity, Image} from 'react-native'
import LoginImage from './assets/LoginPic.png'
import { TextInput, Checkbox } from 'react-native-paper';

function Login( {navigation} ) {
  const [checked, setChecked] = React.useState(false);
  return(
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Image source={LoginImage} style={styles.image} />
        <TextInput label="Email" mode='outlined' outlineColor='transparent' selectionColor='#e28' activeOutlineColor='#e28'
          style={{height: 55, width: '85%', fontSize: 15, margin: 10}} 
        />

        <TextInput label="Password" secureTextEntry mode='outlined' outlineColor='transparent' selectionColor='#e28' activeOutlineColor='#e28'
          style={{height: 55, width: '85%', fontSize: 15, margin: 10}} 
        />
        <Checkbox.Item 
          label='Keep me signed in'
          position='leading'
          color='#e28'
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
          setChecked(!checked);
        }}/>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.logbutton}>
            <Text style={styles.buttontext}>Login</Text>
          </TouchableOpacity>
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      width: Dimensions.get("screen").width, //for full screen
      height: Dimensions.get("window").height   
    },
    title: {
      color: '#333',
      fontSize: 35,
      fontWeight: 'bold',
      margin: 1,
      alignSelf: 'flex-start',
      marginLeft: 30,
    },
    image: {
      height: '30%',
      width: '70%',
      margin: 40,
    },
    logbutton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: '85%',
      flexDirection: 'column',
      alignSelf: 'center',
      backgroundColor: '#e28',
      borderRadius: 5,
      margin: 10,
      },
    buttontext: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 'normal',
    },
    mc: {
      padding: 100,
      backgroundColor: 'coral',
    },
  
    
  });

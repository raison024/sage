import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Dimensions, ScrollView, Pressable} from 'react-native';
import Tasks from '../Tasks/tasks';
import Profile from '../Profile/profile';
import Settings from '../Settings/settings';
import { Ionicons } from '@expo/vector-icons';

import DatePicker from 'react-native-neat-date-picker';
import { IconButton, Card, List, Avatar } from 'react-native-paper';
import '../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';

function HomeScreen() {

  const [showDatePicker, setShowDatePicker] = useState(false)
  const openDatePicker = () => {
    setShowDatePicker(true)
  }
  const onCancel = () => {
    setShowDatePicker(false)
  }
  const onConfirm = ( date ) => {
    setShowDatePicker(false)
    console.log(date.getDate())
  }

  const {t, i18n} = useTranslation();
  const [currentLanguage,setLanguage] =useState('en');
  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={{fontSize: 25, color: '#333'}}>
            {t('welcome')}
          </Text>
          <Pressable
          onPress={() => changeLanguage('en')}
          style={{
            backgroundColor:
              currentLanguage === 'en' ? '#33A850' : '#d3d3d3',
            padding: 3,
          }}>
          <Text>English</Text>
        </Pressable>
        <Pressable
          onPress={() => changeLanguage('kan')}
          style={{
            backgroundColor:
              currentLanguage === 'kan' ? '#33A850' : '#d3d3d3',
            padding: 3,
          }}>
          <Text>ಕನ್ನಡ</Text>
        </Pressable>
        </View>

        <View style={styles.dataContainer}>
          <View style={styles.dataGrid}>
            
            <Text style={{fontSize: 18, color: '#333', fontWeight: 'bold'}}>23&deg;C</Text>
          </View> 
          <View style={styles.dataGrid}>
            <Text style={{fontSize: 18, color: '#26d7ab', fontWeight: 'bold'}}> {t('health')} </Text>
            <Text style={{fontSize: 12, color: '#333', marginTop: 5}}> {t('healthtitle')} </Text>
          </View>
        </View>

        <View style={styles.dataContainer}>
          <View style={styles.expgrid}>
            <Text style={{fontSize: 13, color: '#333'}}> {t('expyield')} </Text>
              <Text style={{fontSize: 13, color: '#333', marginLeft: 50, fontWeight: 'bold'}}>
                {t('yield')} </Text>
            <Text style={{fontSize: 13, color: '#333'}}> {t('expprice')} </Text>
              <Text style={{fontSize: 13, color: '#333', marginLeft: 50, fontWeight: 'bold'}}>
                {t('price')} </Text>
          </View>

          <View style={styles.calgrid}>
            <IconButton
              icon="calendar-edit" color="#000" size={40} onPress={openDatePicker} style={{marginTop: -10}}
            />
              <DatePicker
                isVisible={showDatePicker} mode={'single'}
                onCancel={onCancel} onConfirm={onConfirm} />
            <Text style={{fontSize: 12, color: '#000', marginTop: -10}}> {t('checkdate')} </Text>
          </View>
        </View>
      <View style={styles.alertContainer}>
        <Card.Title
          title= {t('redalert')} 
          subtitle= {t('plscheck')} 
          left={(props) => <Avatar.Icon {...props} icon="bell" backgroundColor="#e28" />}
          right={(props) => <IconButton {...props} icon="help" onPress={() => {}} />} />
        <ScrollView style={styles.alertContent}>
          <List.Item
            title= {t('renewtitle')}
            description= {t('renewcontent')}
            right={props => <List.Icon {...props} icon="delete" />} />
          <List.Item
            title= {t('firstitemtitle')}
            description= {t('firstitemcontent')}
            right={props => <List.Icon {...props} icon="delete" />} />
          <List.Item
            title= {t('firstitemtitle')}
            description= {t('firstitemcontent')}
            right={props => <List.Icon {...props} icon="delete" />} />
          <List.Item
            title= {t('firstitemtitle')}
            description= {t('firstitemcontent')}
            right={props => <List.Icon {...props} icon="delete" />} />
        </ScrollView>
      </View>
      </View>
    );
  }
  
  function TasksScreen() {
    return (
      <Tasks />
    );
  }

  function ProfileScreen() {
    return (
      <Profile />
    );
  }

  function SettingsScreen() {
    return (
      <Settings />
    );
  }
  
  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          padding: 1,
          height: '7%',
          paddingBottom: 10,
          backgroundColor: '#f6f6f6',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home-sharp'
              : 'home-outline';
          } 
          else if (route.name === 'Tasks') {
            iconName = focused ? 'layers-sharp' : 'layers-outline';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          else if (route.name === 'Settings') {
            iconName = focused ? 'settings-sharp' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#e28',
        tabBarInactiveTintColor: '#333',
      })}
      >

        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarLabel: Home,
        }}
        />
        
        <Tab.Screen name="Tasks" component={TasksScreen} 
        options={{
          tabBarLabel: 'Tasks',
        }}
        />
        
        <Tab.Screen name="Profile" component={ProfileScreen} 
        options={{
          tabBarLabel: 'Profile',
        }}
        />
        
        <Tab.Screen name="Settings" component={SettingsScreen} 
        options={{
          tabBarLabel: 'Settings',
        }}
        />
      </Tab.Navigator>
    );
  }
  
  export default function Home() {
    return (
      <NavigationContainer independent={true}>
        <MyTabs />
      </NavigationContainer>
    );
  }
  

const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#f6f6f6',
      width: Dimensions.get("screen").width, //for full screen
      height: Dimensions.get("window").height,   
    },
    welcomeContainer: {
      flex: 0.12,
      width: '100%',
      alignItems: 'flex-start', 
      justifyContent: 'center',
      margin: 5,
      marginBottom: -5,
      marginTop: -15,
    },
    dataContainer: {
      flex: 0.18,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      backgroundColor: '#fff',
      borderRadius: 18,
    },
    dataGrid: {
      height: '100%',
      width: '48%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    expgrid: {
      width: '48%',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    calgrid: {
      width: '48%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    alertContainer:{
      flex: 0.5,
      width: '100%',
    },
    alertContent: {
      height: '74%',
      width: '100%',
    },
  });

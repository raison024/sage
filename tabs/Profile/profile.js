import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, Dimensions, ScrollView} from 'react-native';
import { Avatar, Title, List} from 'react-native-paper';
import ImageCarousel from './Carousel/carousel';

  function ProfileScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.userContainer}>
            <Avatar.Image size={120} source={require('./assets/avatar.jpg')} style={{marginRight:20, marginTop:15}} />
            <View style={styles.userColumn}>
                <Title>Ramappa</Title>
                <List.Item
                    style={{marginTop: -13}}
                    titleStyle={{fontSize: 14}}
                    title="Farm Size: 2acr"
                    left={props => <List.Icon {...props} icon="tractor" 
                        style={{margin: -2, marginLeft: -17, marginRight: -10}} color='#000' />}
                />
                <List.Item
                    style={{margin: -20}}
                    titleStyle={{fontSize: 14}}
                    title="Bengaluru, India"
                    left={props => <List.Icon {...props} icon="map-marker" 
                        style={{margin: -2, marginLeft: 1, marginRight: -10}} color='#000' />}
                />
                <List.Item
                    style={{marginTop: -2}}
                    titleStyle={{fontSize: 14}}
                    title="4.5"
                    left={props => <List.Icon {...props} icon="star" 
                        style={{margin: -2, marginLeft: -18, marginRight: -10}} color='#000' />}
                />
            </View> 
        </View>
        <ScrollView>
          <ImageCarousel />
        </ScrollView>
       
      </View>
    );
  }

  export default ProfileScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#f8f8f8',
      width: Dimensions.get("screen").width, //for full screen
      height: Dimensions.get("window").height,   
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userColumn: {
        height: '100%',
        width: '40%',
        /*backgroundColor: 'blue',*/
        marginLeft: 10,
    },
    userContainer: {
        marginTop: 40,
        height: '18%',
        width: '100%',
        /*backgroundColor: 'blueviolet',*/
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

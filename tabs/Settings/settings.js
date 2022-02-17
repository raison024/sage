import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import { Avatar, Title, List, Button, Dialog, Provider, Portal, Switch} from 'react-native-paper';
import '../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';


  function SettingsScreen() {
  const [accvisible, setaccVisible] = React.useState(false);
  const showaccdialog = () => setaccVisible(true);
  const hideaccdialog = () => setaccVisible(false);

  const [notifvisible, setnotifVisible] = React.useState(false);
  const shownotifdialog = () => setnotifVisible(true);
  const hidenotifdialog = () => setnotifVisible(false);

  const [notifSwitchOn, setnotifSwitchOn] = React.useState(false);
  const onTogglenotifSwitch = () => setnotifSwitchOn(!notifSwitchOn);

  const [redSwitchOn, setredSwitchOn] = React.useState(false);
  const onToggleredSwitch = () => setredSwitchOn(!redSwitchOn);

  const {t, i18n} = useTranslation();
  const [currentLanguage,setLanguage] =useState('en');
  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

    return (
      <Provider>
      <View style={styles.container}>
        <View style={styles.userContainer}>
            <View style={styles.imgContainer}>
              <Avatar.Image size={80} source={require('./assets/avatar.jpg')} style={{marginTop: 18}} />
              <TouchableOpacity>
                <Text style={styles.changepfp} >
                  {t('changepfp')}
                </Text>
              </TouchableOpacity>
            </View>
                <Title> {t('username')} </Title>
        </View>

        <View style={styles.menuContainer}>
        <List.Item onPress={showaccdialog} title= {t('accset')}
            left={props => <List.Icon {...props} icon="account" />} />
        <Portal>
          <Dialog visible={accvisible} onDismiss={hideaccdialog}>
            <Dialog.Title>Account Settings</Dialog.Title>
              <Dialog.Content>
                <Text>This is not a </Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideaccdialog} color='#e28'>Done</Button>
              </Dialog.Actions>
            </Dialog>
        </Portal>

        <List.Item onPress={shownotifdialog} title={t('notifset')}
            left={props => <List.Icon {...props} icon="bell" />} />
        <Portal>
          <Dialog visible={notifvisible} onDismiss={hidenotifdialog}>
            <Dialog.Title>Notification Settings</Dialog.Title>
              <Dialog.Content>
                <View style={styles.row}>
                  <Text>Turn off notifications</Text>
                  <Switch value={notifSwitchOn} onValueChange={onTogglenotifSwitch} color='#e28' />
                </View>
                <View style={styles.row}>
                  <Text>Turn off Red Alert notifications</Text>
                  <Switch value={redSwitchOn} onValueChange={onToggleredSwitch} color='#e28' />
                </View>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hidenotifdialog} color='#e28' >Done</Button>
              </Dialog.Actions>
            </Dialog>
        </Portal>

        <List.Item onPress={() => {}} title={t('farmset')}
            left={props => <List.Icon {...props} icon="leaf" />} />

        <List.Item onPress={() => {}} title={t('weatherset')}
            left={props => <List.Icon {...props} icon="cloud" />} />

            <List.Item onPress={() => {}} title={t('helpset')}
            left={props => <List.Icon {...props} icon="help-circle" />} />

        </View>
      </View>
      </Provider>
    );
  }

  export default SettingsScreen 

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
        justifyContent: 'space-between',
    },
    imgContainer: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: -8,
      },
    userContainer: {
        marginTop: 30,
        height: '18%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    menuContainer: {
        marginTop: 30,
        width: '100%',
    },
    changepfp: {
      fontSize: 12,
      color: '#333',
      margin: 2,
      marginTop: 8,
    },
    accContainer: {
      height: '100%',
      width: '100%',
      backgroundColor: '#000'
    },
  });

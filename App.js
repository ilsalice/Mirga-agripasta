/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

//PAGES
import LoginPage from './pages/login';
import RegistrazionePage from './pages/registrazione';
import RegistrazioneS1 from './pages/registrazione-s1';
import RegistrazioneS2 from './pages/registrazione-s2';
import RegistrazioneDone from './pages/registrazione-done';
import Farine from './pages/farine';
import Cereali from './pages/cereali';
import Ripieni from './pages/ripieni';
import FormaPasta from './pages/forma pasta';
import FormaPastaRipiena from './pages/forma pasta ripiena';
import Condimenti from './pages/condimenti';
import WebviewTest from './pages/webView';
import PrivacyPage from './pages/privacy';

const App = ({navigation}) => {
  const [loading, setloading] = useState(true);
  const [userId, setUserId] = useState();

  async function getData() {
    try {
      const value = await AsyncStorage.getItem('id');
      if (value !== null) {
        const jsonObject = JSON.parse(value);
        setUserId(jsonObject[0].id);
        setloading(false);
      } else {
        setUserId(false);
        setloading(false);
      }
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    getData();
    SplashScreen.hide();
  }, []);

  if (loading) return <></>;
  return (
    <NavigationContainer>
      <Stack.Navigator
        animationEnabled={false}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="login"
          component={LoginPage}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="privacy"
          component={PrivacyPage}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="registrazione"
          component={RegistrazionePage}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="registrazioneS1"
          component={RegistrazioneS1}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="registrazioneS2"
          component={RegistrazioneS2}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="registrazioneDone"
          component={RegistrazioneDone}
        />
        <Stack.Screen options={{animation: 'slide_from_right'}} name="farine">
          {() => <Farine userId={userId} />}
        </Stack.Screen>
        <Stack.Screen options={{animation: 'slide_from_right'}} name="cereali">
          {() => <Cereali userId={userId} />}
        </Stack.Screen>
        <Stack.Screen options={{animation: 'slide_from_right'}} name="ripieni">
          {() => <Ripieni userId={userId} />}
        </Stack.Screen>
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="formapasta">
          {() => <FormaPasta userId={userId} />}
        </Stack.Screen>
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="formapastaripiena">
          {() => <FormaPastaRipiena userId={userId} />}
        </Stack.Screen>
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="condimenti">
          {() => <Condimenti userId={userId} />}
        </Stack.Screen>
        <Stack.Screen options={{animation: 'slide_from_right'}} name="webview">
          {() => <WebviewTest userId={userId} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

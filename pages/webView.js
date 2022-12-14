import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {WebView} from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
function WebviewTest() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(true);
  async function getData() {
    try {
      const value = await AsyncStorage.getItem('id');

      if (value !== null) {
        const jsonObject = JSON.parse(value);
        setUsername(jsonObject[1].username);
        setPassword(jsonObject[2].password);
      } else {
      }
    } catch (e) {
      // error reading value
    }
  }
  useEffect(() => {
    getData();
    setLoading(false);
  }, []);

  if (loading) return <></>;

  return (
    <WebView
      source={{
        uri:
          'https://agripasta.it/app-API/login.php?username=' +
          username +
          '&password=' +
          password,
      }}
    />
  );
}

export default WebviewTest;

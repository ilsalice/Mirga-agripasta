import React, {useState} from 'react';
import axios from 'axios';

import {View, Text} from 'react-native';

import PrimaryBtn from '../components/primaryBtn';
import FormInput from '../components/formInput';
import Link from '../components/links';

import Layout from '../templates/layout';

import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginPage({navigation}) {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('id', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const Login = () => {
    setError(false);
    setLoading(true);
    axios
      .get(
        'https://agripasta.it/app-API/retriveId.php?username=' +
          username +
          '&password=' +
          password,
      )
      .then(response => {
        console.log(username + password + response.data.id);
        if (response.data.login) {
          setError(false);
          storeData([
            {id: response.data.id},
            {username: username},
            {password: password},
          ]);
          navigation.replace('webview', {
            id: response.data.id,
            username: username,
            password: password,
          });
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      })
      .catch(error => {
        alert(error);
      });
  };

  function test() {
    storeData([{id: 'ss'}, {username: 'username'}, {password: 'password'}]);
    navigation.navigate('webview', {
      id: '1',
      username: '2dadsad',
      password: 'password',
    });
  }

  return (
    <Layout>
      {loading ? (
        <>
          <Text style={{textAlign: 'center', fontSize: 20, color: '#000'}}>
            Loading...
          </Text>
        </>
      ) : (
        <>
          <FormInput
            onChange={setUsername}
            autoCapitalize="none"
            placeholder="Username o email">
            Username o email
          </FormInput>
          <FormInput
            onChange={setPassword}
            secureTextEntry={true}
            keyboardType="default"
            autoCapitalize={'none'}
            placeholder="Password">
            Password
          </FormInput>
          {error && (
            <Text style={{color: 'red', textAlign: 'center'}}>
              Username o password non validi
            </Text>
          )}
          <View style={{marginTop: 10}}>
            <PrimaryBtn funzioni={Login}>Accedi</PrimaryBtn>
          </View>

          <Text style={{textAlign: 'center', marginTop: 47, marginBottom: 4}}>
            Non hai un account?
          </Text>
          <Link link="registrazione" navigation={navigation}>
            Registrati
          </Link>
        </>
      )}
    </Layout>
  );
}

export default LoginPage;

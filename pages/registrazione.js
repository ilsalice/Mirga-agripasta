import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Input,
  Image,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import PrimaryBtn from '../components/primaryBtn';
import FormInput from '../components/formInput';
import Link from '../components/links';
import Layout from '../templates/layout';
import axios from 'axios';

import CheckBox from '@react-native-community/checkbox';

function RegistrazionePage({navigation}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [error, setError] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [loading, setLoading] = useState(false);

  const firstCheck = () => {
    setError(false);
    setLoading(true);
    if (password !== password2) {
      setError('Le passwords non coincidono');
      return;
    }
    if (!username || !password || !password2) {
      setError('Riempi tutti i campi');
      return;
    }
    axios
      .get(
        'https://agripasta.it/app-API/checkEmail.php?email=' +
          username +
          '&password=' +
          password +
          '&password2=' +
          password2,
      )
      .then(result => {
        if (result.data === 'done') {
          navigation.navigate('registrazioneS1', {
            username: username,
            password: password,
            password2: password2,
          });
        } else if (result.data === 'invalid email') {
          setLoading(false);
          setError('Email non valida');
        } else if ('exist') {
          setLoading(false);
          setError('Utente già registrato');
        }
      })
      .catch(e => {
        return;
      });
  };

  return (
    <Layout>
      {loading ? (
        <Text style={{textAlign: 'center', fontSize: 20, color: '#000'}}>
          Loading...
        </Text>
      ) : (
        <>
          <FormInput
            autoCapitalize={'none'}
            onChange={setUsername}
            placeholder="Username o email">
            Email
          </FormInput>
          <FormInput
            onChange={setPassword}
            secureTextEntry={true}
            keyboardType="default"
            autoCapitalize={'none'}
            placeholder="Password">
            Password
          </FormInput>
          <FormInput
            onChange={setPassword2}
            secureTextEntry={true}
            keyboardType="default"
            autoCapitalize={'none'}
            placeholder="Ripeti Password">
            Ripeti Password
          </FormInput>
          {error && (
            <Text style={{color: 'red', textAlign: 'center'}}>{error}</Text>
          )}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              tintColors={{true: '#003FB5', false: 'black'}}
            />
            <Text>Accetto le </Text>
            <Text
              style={{color: '#003FB5', fontWeight: '700'}}
              onPress={() => {
                navigation.navigate('privacy');
              }}>
              condizioni sulla privacy
            </Text>
          </View>
          {toggleCheckBox ? (
            <View style={{marginTop: 10}}>
              <PrimaryBtn funzioni={firstCheck}>Registrati</PrimaryBtn>
            </View>
          ) : (
            <View style={{marginTop: 10}}>
              <PrimaryBtn disabled={true} funzioni={firstCheck}>
                Registrati
              </PrimaryBtn>
            </View>
          )}

          <Text style={{textAlign: 'center', marginTop: 47, marginBottom: 4}}>
            Hai già un account?
          </Text>
          <Link navigation={navigation} link="login">
            Accedi
          </Link>
        </>
      )}
    </Layout>
  );
}

export default RegistrazionePage;

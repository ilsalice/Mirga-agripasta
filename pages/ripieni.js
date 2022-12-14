import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {View, Text} from 'react-native';
import Link from '../components/links';

import Layout from '../templates/layout';
import NextBtn from '../components/nextBtn';
import SelectMultiple from '../components/selectMultiple';

import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

function Ripieni() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(false);
  const [userId, setUserId] = useState(false);

  const navigation = useNavigation();

  async function getData() {
    try {
      const value = await AsyncStorage.getItem('id');
      if (value !== null) {
        const jsonObject = JSON.parse(value);
        setUserId(jsonObject[0].id);
      } else {
      }
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    getData();
    axios
      .get('https://agripasta.it/app-API/getItems.php?type=ripieno')
      .then(response => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(userId);

  const funzione = () => {
    axios
      .post('https://agripasta.it/app-API/userPreferences.php', {
        type: 'ripieno',
        itemsArray: selected,
        userId: userId,
      })
      .then(response => {
        if (response.data === 1) {
          navigation.navigate('formapasta');
          console.log(response.data);
        } else console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  if (loading)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );

  return (
    <Layout logo={false}>
      <View style={{alignItems: 'center', marginBottom: 20, marginTop: 20}}>
        <Text style={{fontSize: 20, color: '#000', fontWeight: '700'}}>
          Quali ripieno preferisci?
        </Text>
      </View>
      <SelectMultiple
        getSelected={selected => setSelected(selected)}
        array={data}
      />
      <View style={{marginBottom: 20, marginTop: 30}}>
        <View style={{marginBottom: 20}}>
          <NextBtn funzioni={funzione} testo={'Prossimo'} />
        </View>
        <Link navigation={navigation} link="formapasta">
          Salta
        </Link>
      </View>
    </Layout>
  );
}

export default Ripieni;

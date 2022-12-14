import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {View, Text} from 'react-native';
import Link from '../components/links';

import Layout from '../templates/layout';
import NextBtn from '../components/nextBtn';
import SelectMultiple from '../components/selectMultiple';

import {useNavigation} from '@react-navigation/native';

function Condimenti({userId}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(false);

  const navigation = useNavigation();
  useEffect(() => {
    axios
      .get('https://agripasta.it/app-API/getItems.php?type=condimento')
      .then(response => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  }, []);

  const funzione = () => {
    axios
      .post('https://agripasta.it/app-API/userPreferences.php', {
        type: 'condimento',
        itemsArray: selected,
        userId: userId,
      })
      .then(response => {
        if (response.data === 1) {
          navigation.replace('webview');
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
          Quali farine preferisci?
        </Text>
      </View>
      <SelectMultiple
        array={data}
        getSelected={selected => setSelected(selected)}
      />
      <View style={{marginBottom: 100, marginTop: 30}}>
        <View style={{marginBottom: 20}}>
          <NextBtn funzioni={funzione} testo={'Prossimo'} />
        </View>
        <Link link={'webview'} navigation={navigation}>
          Salta
        </Link>
      </View>
    </Layout>
  );
}

export default Condimenti;

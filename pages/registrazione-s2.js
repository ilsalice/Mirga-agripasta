import React, {useState} from 'react';

import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import FormInput from '../components/formInput';

import Layout from '../templates/layout';
import NextBtn from '../components/nextBtn';
import StepsBar from '../components/stepsBar';
import SelectMultiple from '../components/selectMultiple';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function RegistrazioneS2({navigation, route}) {
  const [selectedDiet, setSelectedDiet] = useState('Onnivora');
  const [selected, setSelected] = useState(false);
  const [patologie, setPatologie] = useState(false);
  const [loading, setLoading] = useState(false);

  const email = route.params.email;

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('id', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const funzione = () => {
    setLoading(true);
    axios
      .get(
        'https://agripasta.it/app-API/registration.php?email=' +
          email +
          '&password=' +
          route.params.password +
          '&nome=' +
          route.params.nome +
          '&cognome=' +
          route.params.cognome +
          '&password2=' +
          route.params.password2 +
          '&telefono=' +
          route.params.telefono +
          '&sesso=' +
          route.params.sesso +
          '&eta=' +
          route.params.eta +
          '&peso=' +
          route.params.peso +
          '&dieta=' +
          selectedDiet +
          '&patologie=' +
          patologie +
          '&intolleranze=' +
          selected,
      )
      .then(results => {
        setLoading(false);
        if (results.data.status === 1) {
          storeData([
            {id: results.data.id},
            {username: route.params.username},
            {password: route.params.password},
          ]);
          navigation.replace('registrazioneDone');
        }
        console.log(results.data);
      })
      .catch(e => {
        return;
      });
  };

  console.log(route.params);

  return (
    <Layout>
      {loading ? (
        <Text style={{fontSize: 20, color: '#000', textAlign: 'center'}}>
          Loading...
        </Text>
      ) : (
        <>
          <Text
            style={{
              marginLeft: 10,
              fontWeight: '600',
              color: '#000',
              marginBottom: 4,
            }}>
            Che dieta segui?
          </Text>
          <View
            style={{borderWidth: 1, borderColor: '#C3C1C1', borderRadius: 9}}>
            <Picker
              selectedValue={selectedDiet}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedDiet(itemValue)
              }>
              <Picker.Item label="Onnivora" value="onnivora" />
              <Picker.Item label="Vegetariana" value="vegetariana" />
              <Picker.Item label="Vegana" value="vegana" />
            </Picker>
          </View>

          <View style={{marginTop: 20, marginBottom: 25}}>
            <Text style={{marginLeft: 10, color: '#000', fontWeight: '600'}}>
              Hai qualche intolleranza?
            </Text>
            <SelectMultiple
              getSelected={selected => setSelected(selected)}
              array={[
                'Latticini',
                'Legumi',
                'Uova',
                'Cereali',
                'Frutta secca',
                'Altro',
              ]}
            />
          </View>
          <FormInput onChange={setPatologie} placeholder="Patologie">
            Hai qualche patologia?
          </FormInput>
          <View style={{marginTop: 20}}>
            <NextBtn testo="Fine" funzioni={funzione} />
          </View>
        </>
      )}
      <StepsBar step={2} />
    </Layout>
  );
}

export default RegistrazioneS2;

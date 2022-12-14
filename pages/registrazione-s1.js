import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Input,
  Image,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';

import PrimaryBtn from '../components/primaryBtn';
import FormInput from '../components/formInput';
import Link from '../components/links';
import GoogleBtn from '../components/accediConGoogle';

import Layout from '../templates/layout';
import FormInputSmall from '../components/formInputSmall';
import BtnBig from '../components/buttonBig';
import NextBtn from '../components/nextBtn';
import StepsBar from '../components/stepsBar';

function RegistrazioneS1({navigation, route}) {
  const [nome, setNome] = useState(false);
  const [cognome, setCognome] = useState(false);
  const [telefono, setTelefono] = useState(false);
  const [sesso, setSesso] = useState(false);
  const [eta, setEta] = useState(false);
  const [peso, setPeso] = useState(false);
  const [error, setError] = useState(false);

  const funzione = () => {
    setError(false);
    if (!nome || !cognome || !telefono || !sesso || !eta || !peso) {
      setError('Compila tutti i campi');
    } else {
      navigation.navigate('registrazioneS2', {
        email: route.params.username,
        username: route.params.username,
        password: route.params.password,
        password2: route.params.password2,
        nome: nome,
        cognome: cognome,
        telefono: telefono,
        sesso: sesso,
        eta: eta,
        peso: peso,
      });
    }
  };
  return (
    <Layout>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <FormInputSmall onChange={setNome} placeholder="Nome">
          Nome
        </FormInputSmall>
        <FormInputSmall onChange={setCognome} placeholder="Cognome">
          Cognome
        </FormInputSmall>
      </View>
      <FormInput
        keyboardType="numeric"
        onChange={setTelefono}
        placeholder="Telefono">
        Telefono
      </FormInput>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          marginBottom: 15,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {sesso === 'femmina' ? (
            <BtnBig active={true} value={false} onPress={setSesso}>
              Femmina
            </BtnBig>
          ) : (
            <BtnBig active={false} value={'femmina'} onPress={setSesso}>
              Femmina
            </BtnBig>
          )}
          {sesso === 'maschio' ? (
            <BtnBig active={true} value={false} onPress={setSesso}>
              Maschio
            </BtnBig>
          ) : (
            <BtnBig active={false} value={'maschio'} onPress={setSesso}>
              Maschio
            </BtnBig>
          )}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 14,
        }}>
        <FormInputSmall
          keyboardType="numeric"
          onChange={setEta}
          placeholder="Età">
          Età
        </FormInputSmall>
        <FormInputSmall
          keyboardType="numeric"
          onChange={setPeso}
          placeholder="Peso">
          Kg
        </FormInputSmall>
      </View>
      <NextBtn testo="Prossimo" funzioni={funzione} />
      {error && (
        <Text style={{color: 'red', textAlign: 'center'}}>{error}</Text>
      )}
      <StepsBar step={1} />
    </Layout>
  );
}

export default RegistrazioneS1;

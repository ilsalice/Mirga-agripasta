import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Input,
  Image,
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

import Check from '../icons/check.svg';

function RegistrazioneDone({navigation}) {
  const funzione = () => {
    navigation.navigate('farine');
  };
  return (
    <Layout logo={false}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: '#3A6225',
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
          }}>
          <Check width={50} height={50} />
        </View>
        <Text style={{fontSize: 20, color: '#000', fontWeight: '700'}}>
          Fatto!
        </Text>
      </View>
      <View style={{marginBottom: 30}}>
        <Text
          style={{
            color: '#000',
            textAlign: 'center',
            fontWeight: '600',
            marginTop: 20,
            marginBottom: 5,
          }}>
          Aiutaci a capire cosa ti piace
        </Text>

        <View style={{marginBottom: 15}}>
          <PrimaryBtn funzioni={funzione}>Inizia</PrimaryBtn>
        </View>
        <Link navigation={navigation} link="webview">
          Salta
        </Link>
      </View>
      <StepsBar step={3} />
    </Layout>
  );
}

export default RegistrazioneDone;

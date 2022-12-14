import React, {Children} from 'react';

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

function Layout({children, logo}) {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Image
          style={{
            width: '100%',
            objectFit: 'cover',
            height: '100%',
          }}
          source={require('../images/pasta.jpg')}
        />
      </View>

      {/* FILTRO */}
      <View
        style={{
          width: '100%',
          height: '100%',
          zIndex: 3,
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '80%',
            marginTop: '10%',
            marginBottom: '10%',
            zIndex: 3,
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: 20,
            paddingBottom: 30,
          }}>
          <ScrollView>
            {logo !== false && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                  marginBottom: 40,
                }}>
                <Image
                  source={require('../images/logo-agripasta.png')}
                  style={{
                    width: 98,
                    height: 67,
                    margin: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </View>
            )}
            {children}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Layout;

import React from 'react';
import {TouchableHighlight, Text, Image, View} from 'react-native';

function GoogleBtn({children}) {
  return (
    <TouchableHighlight
      style={{
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 9,
        fontSize: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image
          style={{width: 20, height: 20, marginRight: 10}}
          source={require('../images/google-logo.png')}
        />
        <Text style={{color: '#000'}}>{children}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default GoogleBtn;

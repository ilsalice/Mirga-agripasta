import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

function BtnBig({children, onPress, value, active}) {
  if (active) {
    return (
      <TouchableHighlight
        style={{
          height: 45,
          backgroundColor: '#000',
          borderRadius: 9,
          fontSize: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '49%',
          borderWidth: 2,
          borderColor: '#000',
        }}
        onPress={e => {
          onPress(value);
        }}>
        <Text style={{color: '#fff', fontWeight: '700'}}>{children}</Text>
      </TouchableHighlight>
    );
  }
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
        width: '49%',
        borderWidth: 2,
        borderColor: '#000',
      }}
      onPress={e => {
        onPress(value);
      }}>
      <Text style={{color: '#000', fontWeight: '700'}}>{children}</Text>
    </TouchableHighlight>
  );
}

export default BtnBig;

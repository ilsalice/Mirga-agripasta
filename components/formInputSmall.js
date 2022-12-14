import React from 'react';
import {TextInput, View, Text} from 'react-native';

function FormInputSmall({children, placeholder, onChange, keyboardType}) {
  return (
    <View
      style={{
        flexGrow: 1,
        width: '40%',
        marginRight: 4,
      }}>
      <Text style={{marginLeft: 10, fontWeight: '600', color: '#000'}}>
        {children}
      </Text>
      <TextInput
        keyboardType={keyboardType}
        onChangeText={e => {
          onChange(e);
        }}
        style={{
          borderWidth: 1,
          borderColor: '#C3C1C1',
          paddingLeft: 14,
          borderRadius: 9,
          marginBottom: 16,
          height: 45,
          marginTop: 5,
          width: '100%',
        }}
        placeholder={placeholder}
      />
    </View>
  );
}

export default FormInputSmall;

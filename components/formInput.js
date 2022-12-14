import React from 'react';
import {TextInput, View, Text} from 'react-native';

function FormInput({
  children,
  placeholder,
  autoCapitalize,
  secureTextEntry,
  onChange,
  keyboardType,
}) {
  return (
    <View>
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
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

export default FormInput;

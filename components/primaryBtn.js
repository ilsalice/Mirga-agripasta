import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

function PrimaryBtn({children, funzioni, disabled}) {
  return (
    <TouchableHighlight
      style={{
        height: 45,
        backgroundColor: '#000000',
        borderRadius: 9,
        fontSize: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      disabled={disabled}
      onPress={funzioni}>
      <Text style={{color: '#fff'}}>{children}</Text>
    </TouchableHighlight>
  );
}

export default PrimaryBtn;

import React from 'react';

import {Text} from 'react-native';

function Link({children, cstyle, navigation, link}) {
  return (
    <Text
      onPress={() => {
        navigation.navigate(link);
      }}
      style={{color: '#003FB5', textAlign: 'center', fontWeight: '700'}}>
      {children}
    </Text>
  );
}

export default Link;

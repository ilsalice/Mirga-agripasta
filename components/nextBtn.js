import React from 'react';
import {TouchableHighlight, Text, View, Image} from 'react-native';

import SVGRigth from '../icons/arrow-right-white.svg';
import SVGLeft from '../icons/arrow-left-grey.svg';

function NextBtn({children, funzioni, testo}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {/* <TouchableHighlight
        style={{
          width: '30%',
          borderRadius: 9,
          borderWidth: 2,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: '#707070',
        }}>
        <SVGLeft width={20} height={20} fill="none" />
      </TouchableHighlight> */}
      <TouchableHighlight
        style={{
          height: 45,
          backgroundColor: '#000000',
          borderRadius: 9,
          fontSize: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
        onPress={funzioni}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: '#fff',
              marginRight: 10,
              marginLeft: 20,
              fontWeight: '700',
            }}>
            {testo}
          </Text>
          <SVGRigth width={20} height={20} fill="none" />
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default NextBtn;

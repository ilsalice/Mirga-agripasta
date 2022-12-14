import React, {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

function SelectMultiple({array, getSelected}) {
  const [selected, setSelected] = useState([]);
  return (
    <View
      style={{
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      {array.map(item => {
        if (selected.includes(item)) {
          return (
            <TouchableHighlight
              key={item}
              onPress={() => {
                const arr = selected.filter(stuff => stuff !== item);
                setSelected(arr);
                getSelected(arr);
              }}
              style={{
                marginTop: 6,
                marginLeft: 2,
                marginRight: 2,
                borderWidth: 1,
                borderColor: '#000',
                backgroundColor: '#000',
                borderRadius: 40,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                paddingLeft: 15,
                paddingRight: 15,
              }}>
              <Text style={{color: '#fff', fontWeight: '700'}}>{item}</Text>
            </TouchableHighlight>
          );
        } else {
          return (
            <TouchableHighlight
              key={item}
              onPress={() => {
                setSelected([...selected, item]);
                getSelected([...selected, item]);
              }}
              style={{
                marginTop: 6,
                marginLeft: 2,
                marginRight: 2,
                borderWidth: 1,
                borderColor: '#000',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 40,
                paddingLeft: 15,
                paddingRight: 15,
              }}>
              <Text style={{color: '#000'}}>{item}</Text>
            </TouchableHighlight>
          );
        }
      })}
    </View>
  );
}

export default SelectMultiple;

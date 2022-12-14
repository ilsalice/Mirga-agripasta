import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CheckGrey from '../icons/check-grey.svg';
import Check from '../icons/check.svg';

const styles = StyleSheet.create({
  circle: {
    height: 34,
    width: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#707070',
    color: '#707070',
    borderRadius: 40,
  },
  circleActive: {
    height: 34,
    width: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 30,
  },
  divider: {
    width: 30,
    height: 2,
    backgroundColor: '#707070',
  },

  dividerActive: {
    width: 30,
    height: 2,
    backgroundColor: '#000',
  },
});

function StepsBar({step}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
      }}>
      <View style={styles.circleActive}>
        <Text style={{color: '#fff'}}>1</Text>
      </View>
      {step >= 2 ? (
        <>
          <View style={styles.dividerActive} />
          <View style={styles.circleActive}>
            <Text style={{color: '#fff'}}>2</Text>
          </View>
        </>
      ) : (
        <>
          <View style={styles.divider} />
          <View style={styles.circle}>
            <Text>2</Text>
          </View>
        </>
      )}
      {step === 3 ? (
        <>
          <View style={styles.dividerActive} />
          <View style={styles.circleActive}>
            <Check width={20} height={20} />
          </View>
        </>
      ) : (
        <>
          <View style={styles.divider} />
          <View style={styles.circle}>
            <CheckGrey width={20} height={20} />
          </View>
        </>
      )}
    </View>
  );
}

export default StepsBar;

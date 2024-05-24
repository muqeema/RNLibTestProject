import React, { useEffect, useCallback, useState } from 'react';
import { ScrollView, Text, Button, View, TextInput, StyleSheet, Input, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
// import DocereeAd from './DocereeAd.js';
 import { DocereeAdView } from 'react-native-awesome-module-mu'

const SingleAdScreen = ({ route, navigation }) => {


  const handleAdSuccess = (newMessage) => {
    console.log("handleAdSuccess : ", newMessage);
  };

  const handleAdFailure = (newMessage) => {
    console.log("handleAdFailure : ", newMessage);
  };

//    const navigation = useNavigation();
    const { adSize, adUnit } = route.params;
    console.log('adSize SingleAdScreen:',adSize, adUnit);
    return (
        <View style={styles.container}>
            <DocereeAdView adSize={adSize} adSlot={adUnit} success = {handleAdSuccess} failure = {handleAdFailure}/>
        </View>
      );
}
  // <DocereeAdView adSize={adSize} adUnit={adUnit}/>
const styles = StyleSheet.create({
  container: {
    top: 50,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
});

export default SingleAdScreen;

//<DocereeAdNew1 parameter={adSize}/>

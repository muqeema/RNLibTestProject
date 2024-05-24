
import React, { useEffect, useCallback, useState } from 'react';
import { ScrollView, Text, Button, View, TextInput, StyleSheet, Input, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
// import DocereeAd from './DocereeAd.js';
// import DocereeAdView from '../src/screens/DocereeAdView.tsx';

const MultipleAdsScreen = ({ navigation }) => {
//    const navigation = useNavigation();
    const buttonTitles = ['320 x 50', '320 x 100', '300 x 50', '300 x 250', '728 x 90', '468 x 60', '200 x200', '250 x 250'];
    const adUnitIds = ['DOC-707-1', 'DOC-739-1', 'DOC-738-1', 'DOC-737-1', 'DOC-736-1', 'DOC-735-1', 'DOC-164-1', 'DOC-163-1'];

    return (
        <View style={styles.container}>

        </View>
      );
}
// <DocereeAdView adSize={buttonTitles[0]} adUnit={adUnitIds[0]}/>
// <DocereeAdView adSize={buttonTitles[0]} adUnit={adUnitIds[0]}/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default MultipleAdsScreen;

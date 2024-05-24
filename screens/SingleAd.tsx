import React, {useState, useEffect } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  View} from 'react-native';

import { DocereeAdView } from 'react-native-awesome-module-mu'

  function SingleAd({navigation}){


    const handleAdSuccess = (newMessage) => {
      console.log("handleAdSuccess : ", newMessage);
    };

    const handleAdFailure = (newMessage) => {
      console.log("handleAdFailure : ", newMessage);
    };

    return (<SafeAreaView>
      <TextInput  style={styles.input}
        value="Input Field"/>

      <DocereeAdView adSize = '320 X 100' adSlot = 'DOC-739-1' success = {handleAdSuccess} failure = {handleAdFailure}/>

      <View style={styles.button}>
        <Button
          title="List Screen"
          onPress={() => navigation.navigate('ListScreen', {name: 'ListScreen'})} />
      </View>
      <View style={styles.button}>
        <Button
          title="Scroll Screen"
          onPress={() => navigation.navigate('ScrollScreen', {name: 'ScrollScreen'})} />
      </View>
    </SafeAreaView>);

  }

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
      margin: 12
    }
  });



  export default SingleAd;

import React, { useEffect, useCallback, useState } from 'react';
import { ScrollView, Text, Button, View, TextInput, StyleSheet, Input, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
// import DocereeAd from './DocereeAd.js';
import { requestTrackingPermission } from 'react-native-tracking-transparency';
//import { getAdId } from 'react-native-ad-id';
import { getAdvertisingInfo } from 'react-native-advertising-info'
// import HcpBuilder from '../src/models/HcpBuilder';
import { JSHash, JSHmac, CONSTANTS } from "react-native-hash";
import { StartGameScreen } from 'react-native-awesome-module-mu'
import { HcpBuilder } from 'react-native-awesome-module-mu'


const HomeScreen = (adSize, adUnit) => {
    const navigation = useNavigation();
    initializeHcp()
    useEffect(() => {
        requestPermission()
    });

    // Function to request tracking permission
    const requestPermission = async () => {
        try {
            const status = await requestTrackingPermission();
            if (status === 'authorized') {
                // User granted permission
                console.log('Tracking permission granted');
                getAdvertisingId()
            } else {
                // User denied or restricted permission
                console.log('Tracking permission denied');
                getAdvertisingId()
            }
        } catch (error) {
            console.error('Error requesting tracking permission:', error);
        }
    };

    // Function to retrieve the Advertising ID
    const getAdvertisingId = async () => {
        try {
//        const adId = await getAdId();
//        console.log('Advertising ID:', adId);
            const adInfo = await getAdvertisingInfo()//.then((adInfo) => console.log(adInfo))
            // console.log('Advertising ID:', adInfo.adTrackingEnabled);
        } catch (error) {
            console.error('Error retrieving Advertising ID:', error);
        }
    };


    function initializeHcp() {
      var promiseHcpId = JSHash("5432112", CONSTANTS.HashAlgorithms.sha256);
      var promiseHcpEmail = JSHash("doceree@yopmail.com", CONSTANTS.HashAlgorithms.sha256);
      Promise.all([promiseHcpId, promiseHcpEmail]).then((values) => {
        // console.log(values[0]+values[1]);
        var hcpBuilder = new HcpBuilder();
        hcpBuilder.setHcpId("54321");
        hcpBuilder.setHashedHcpId(values[0]);
        hcpBuilder.setFirstName("John");
        hcpBuilder.setLastName("Doe");
        hcpBuilder.setEmail("doceree@yopmail.com");
        hcpBuilder.setSpecialization("Anesthesiology"); // Anesthesiology //Psychiatry
        hcpBuilder.setOrganisation("XYZ-organisation");
        hcpBuilder.setCity("New Delhi");
        hcpBuilder.setState("Delhi");
        hcpBuilder.setCountry("INDIA");
        hcpBuilder.setZipCode("110024");
        hcpBuilder.setGender("Male");
        hcpBuilder.setHashedEmail(values[1]);
        var hcp = hcpBuilder.build();
        // console.log("HCP : ", JSON.stringify(hcp));
      })

    }


    function getHashedString(str: String): String{
        return str;
    }

    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <Image
                style={{width: '100%', height: '50%'}}
                source={{ uri: "https://d3gglspuvl1a31.cloudfront.net/237/147/creatives6/103993905.JPEG" }}
            />
            <StartGameScreen />
        </View>
   )
}

const styles = StyleSheet.create({
  container: {
//    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: 300, // Shortened width
    height: 250,
  },
});

export default HomeScreen;

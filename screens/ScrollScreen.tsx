import React, {useState} from 'react';
import {ScrollView, Button, Text, View} from 'react-native';

import string from '../src/constant/strings';
import { DocereeAdView } from 'react-native-awesome-module-mu'

const ScrollScreen = props => {

  const [textSize, setTextSize] = useState(14);

  const handleAdSuccess = (newMessage) => {
    console.log("handleAdSuccess : ", newMessage);
  };

  const handleAdFailure = (newMessage) => {
    console.log("handleAdFailure : ", newMessage);
  };


  return(<ScrollView>
      <View>
        <Text style={{fontSize:27, textAlign: 'justify', margin: 15}}>
          Sample Text {string.sampleText}
        </Text>
        <DocereeAdView  adSize = '320 X 100' adSlot = 'DOC-710-1' success = {handleAdSuccess} failure = {handleAdFailure} />
        <Text style={{fontSize:27, textAlign: 'justify', margin: 15}}>
          Sample Text {string.sampleLessText}
        </Text>
      </View>
    </ScrollView>
  );
}

export default ScrollScreen;

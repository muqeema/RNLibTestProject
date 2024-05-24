import React from 'react';

import {SectionList, StyleSheet, Text, View, Image} from 'react-native';
import { DocereeAdView } from 'react-native-awesome-module-mu'

const ListScreen = ({navigation}) => {
  console.log(navigation);
  // console.log(navigation.routes);
  // console.log(navigation.routes[1].params.name);
  const handleAdSuccess = (newMessage) => {
    console.log("handleAdSuccess : ", newMessage);
  };

  const handleAdFailure = (newMessage) => {
    console.log("handleAdFailure : ", newMessage);
  };

  return (
    <View style={styles.container}>

      <SectionList
        sections={[
          {title: 'A', data: ['Adwin', 'Adam', 'Abram']},
          {title: 'B', data: ['Brack', 'Brooke', 'Bella']},
          {title: 'C', data: ['Charlie', 'Carson', 'Cooper']},
          {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
          {title: 'E', data: ['Edgar', 'Ethan', 'Emily']},
          {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          {title: 'M', data: ['Milli', 'Miley', 'Mike', 'Maya']},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />


        <DocereeAdView adSize = '320 X 100' adSlot = 'DOC-739-1'  success = {handleAdSuccess} failure = {handleAdFailure}/>

    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  imgStyle: {
    height: 150,
    width: '95%',
    margin: 6,
    alignItems: 'center'
  },
});

export default ListScreen;

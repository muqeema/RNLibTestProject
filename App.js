
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PatientDataScreen from './screens/PatientDataScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import AdListScreen from './screens/AdListScreen.js';
import ListScreen from './screens/ListScreen.tsx';
import SingleAd from './screens/SingleAd.tsx';
import ScrollScreen from './screens/ScrollScreen.tsx';

import { StyleSheet} from 'react-native';
import SingleAdScreen from './screens/SingleAdScreen.js';
import MultipleAdsScreen from './screens/MultipleAdsScreen.js';
import ScrollViewScreen from './screens/ScrollViewScreen.js';
import { DataCollection } from 'react-native-awesome-module-mu'
import { DocereeAds } from 'react-native-awesome-module-mu'

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
function Root() {
  new DocereeAds().initialize("adfc-23-sdbm-52");
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="AdList" component={AdListScreen} />
        <Drawer.Screen name="Multiple Ads" component={MultipleAdsScreen} />
        <Drawer.Screen name="ScrollView" component={ScrollViewScreen} />
        <Drawer.Screen name="Patient Data" component={PatientDataScreen} />
        <Drawer.Screen name="DataCollection" component={DataCollection} />

        <Drawer.Screen name="ScrollScreen" component={ScrollScreen}/>
        <Drawer.Screen name="ListScreen" component={ListScreen} />

      </Drawer.Navigator>
  );
}
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SingleAdScreen" component={SingleAdScreen} />
        <Stack.Screen name="SingleAd" component={SingleAd}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

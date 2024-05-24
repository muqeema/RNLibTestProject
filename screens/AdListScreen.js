import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SingleScreen from './SingleAdScreen.js';

export default AdListScreen = () => {
    const navigation = useNavigation();
    const buttonTitles = ['320 x 50', '320 x 100', '300 x 50', '300 x 250', '728 x 90', '468 x 60', '200 x200', '250 x 250'];
    const adUnitIds = ['DOC-710-1', 'DOC-709-1', 'DOC-708-1', 'DOC-707-1', 'DOC-736-1', 'DOC-735-1', 'DOC-164-1', 'DOC-163-1'];

const handlePress = (index) => {
    console.log('Button pressed: ', index);
    // Add your onPress logic here
//    <SingleScreen adSize={buttonTitles[index]} adUnit={adUnitIds[index]}/>
//    navigation.navigate("SingleScreen")}

  };

    return (
        <View style={styles.container}>
            {buttonTitles.map((button, index) => (
                     <TouchableOpacity style={styles.button} onPress={() => {
                        navigation.navigate('SingleAdScreen', { adSize: buttonTitles[index], adUnit: adUnitIds[index] });
                     }} key={button}>
                        <Text style = {styles.buttonText}>
                           {button}
                        </Text>
                     </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
//    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    width: 300,
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

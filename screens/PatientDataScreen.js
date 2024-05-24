import React, { useEffect, useCallback, useState } from 'react';
import { ScrollView, Text, Button, View, TextInput, StyleSheet, Input, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
//import { saveData } from '../src/storage/RnStorage.tsx'
import { PatientSession } from 'react-native-awesome-module-mu'
import { PatientBuilder } from 'react-native-awesome-module-mu'

const PatientDataScreen = () => {
    const navigation = useNavigation();

    const initialState = [
        { name: "age", placeholder: "Age", value: '25',id: 1 },
        { name: "gender", placeholder: "Gender", value: 'Male', id: 2 },
        { name: "prescription", placeholder: "Prescription", value: JSON.stringify(["0002-1433","0002-1200","0002-0800","0002-1434"]), id: 3 },
        { name: "labTest", placeholder: "Lab Test", value: JSON.stringify(["A0021","A0200","A0210","A0225"]),id: 4 },
        { name: "diagnosis", placeholder: "Diagnosis", value: JSON.stringify(["A00","A0109","A011","A012"]), id: 5 },
        { name: "pharmacy", placeholder: "Pharmacy", value: JSON.stringify(["P01","P02","P03","P04"]), id: 6 },
        { name: "prescriptionHistory", placeholder: "Prescription History", value: JSON.stringify([{"dt": "2023-01-10", "v":["0002-1433", "0002-1200"]},{"dt": "2023-03-15", "v": ["0002-0800","0002-1434"]}]), id: 7 },
        { name: "labTestHistory", placeholder: "Lab Test History", value: JSON.stringify([{"dt": "2023-01-10", "v":["A0021", "A0200"]},{"dt": "2023-03-15", "v": ["A0210","A0220"]}]), id: 8 },
        { name: "diagnosisHistory", placeholder: "Diagnosis History", value: JSON.stringify([{"dt": "2023-01-10", "v":["A00", "A0109"]},{"dt": "2023-03-15", "v": ["A011","A012"]}]), id: 9 },
        { name: "pharmacyHistory", placeholder: "Pharmacy History", value: JSON.stringify([{"dt": "2023-01-10", "v":["P01","P02"]},{"dt": "2023-03-15", "v": ["P03","P04"]}]), id: 10 },
        { name: "temperature", placeholder: "Temperature", value: JSON.stringify({"v":"88.56","u":"Fahrenheit/Celsius"}), id: 11 },
        { name: "bp", placeholder: "bp", value: '120/80', id: 12 },
        { name: "pulse", placeholder: "pulse", value: '68', id: 13 },
        { name: "respiration", placeholder: "respiration", value: '67', id: 14 },
        { name: "insurance", placeholder: "insurance", value: '1', id: 15 },
        { name: "insuranceType", placeholder: "Insurance Type", value: JSON.stringify(["1","2"]), id: 16 },
        { name: "insuranceName", placeholder: "Insurance Name", value: JSON.stringify(["medicaid", "hmo"]), id: 17 },
    ];

    const [data, setData] = useState(initialState);
    updatedState = data

    const { register, handleSubmit, setValue } = useForm();
    const [isRegistered, setIsRegistered] = useState(false);

    const onSubmit = async() => {
//        console.log(data);
//        setIsRegistered(true);
        // Here you can perform further actions with the form data, like sending it to a server
        // Use the PatientBuilder to create a patient object
        const patientBuilder = new PatientBuilder();
        for (const item of updatedState) {
            if (isNullOrEmpty(item.value) === false) {
                if (isArrayOrObject(item.value) === 'array' || isJsonObject(item.value)) {
//                    console.log("item is object", item.value);
                    patientBuilder.add(item.name, JSON.parse(item.value))
                } else {
//                    console.log("item is not object", item.value);
                    patientBuilder.add(item.name, item.value)
                }

            }
        }
        const patient = patientBuilder.build()
        if (await new PatientSession().savePatientData(patient) == true) {
            createTwoButtonAlert()
        }
        
//        saveData('patientData', patient)
    };

    function isArrayOrObject(str) {
        try {
            // Attempt to parse the string as JSON
            const parsed = JSON.parse(str);

            // Check if the parsed value is an array
            if (Array.isArray(parsed)) {
                return 'array';
            }

            // If it's neither an array nor an object, return 'other'
            return 'other';
        } catch (error) {
            // If parsing fails, return 'invalid'
            return 'invalid';
        }
    }
    function isJsonObject(value) {
        // Trim the string to remove any leading or trailing whitespace
        value = value.trim();

        // Check if the string starts with '{' and ends with '}'
        return value.startsWith('{') && value.endsWith('}');
    }

    function isNullOrEmpty(value) {
        // Check if the value is null, undefined, or an empty string
        if (value === null || typeof value === 'undefined' || (typeof value === 'string' && value.trim() === '')) {
            return true;
        }

        // Check if the value is an array and has zero length
        if (Array.isArray(value) && value.length === 0) {
            return true;
        }

        // Check if the value is an object and has no keys
        if (typeof value === 'object' && Object.keys(value).length === 0) {
            return true;
        }

        // Otherwise, the value is not null or empty
        return false;
    }

    const onChangeField = useCallback((name) => (text) => {
        setValue(name, text);
        if (updatedState.length == 0) {
            updatedState = data
        }
        const newState = updatedState.map(obj => {
            // 👇️ if name equals, update data
             if (obj.name == name) {
//                console.log("obj.name, name", name, text);
                return {...obj, value: text};
             }
             // 👇️ otherwise return the object as is
             return obj;
        });
        setData(newState);
      }, []);

//    useEffect(() => {
//        data.map((item, index) => (
//            register(item.name)
//        ))}, [register]);

    const createTwoButtonAlert = () =>
        Alert.alert('Patient Data', 'Patient data saved successfully.', [
            {text: 'OK', onPress: () => {
                console.log('OK Pressed')
                navigation.navigate('Home')
       }},
    ]);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.summary}>
                {
                    updatedState.map((item, index) => (
                        <View key={item.id}>
                            <View style={styles.summary}>
                                <Text style={styles.text}>{item.placeholder}</Text>
                                <View style={styles.input}>
                                    <TextInput
                                        value={item.value}
//                                        style={styles.input}
                                        autoCompleteType={item.name}
                                        placeholder={item.placeholder}
                                        onChangeText={onChangeField(item.name)}
                                    />
                                </View>
                          </View>
                        </View>
                      )
                    )
                }

            </ScrollView>

            <View style={styles.loginButtonSection}>
                <Button title="Submit" onPress={handleSubmit(onSubmit)} style={styles.submitButton} />
                {isRegistered && <Text style={styles.successText}>Registration successful!</Text>}
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%', // Shortened width
   },

    text: {
      padding: 5,
      width: '90%', // Shortened width
    },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10, // Increased margin between boxes
    width: '100%', // Shortened width
  },
  submitButton: {
      width: '100%',
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center'
  },
  successText: {
    color: 'green',
    marginTop: 10,
    fontSize: 17,
  },
});

export default PatientDataScreen;
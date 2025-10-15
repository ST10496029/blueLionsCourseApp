import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { RootStackParamList } from '../navigation/appNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

type props = NativeStackScreenProps<RootStackParamList, 'lanscapingScreen'>;

export default function lanscapingScreen ({ navigation }: props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Second Screen</Text>

     {/* course description */}
      <Text style={styles.paragraph}>
        Fees: R1500
Purpose: To provide landscaping services for new and established gardens Content:
Indigenous and exotic plants and trees
Fixed structures (fountains, statues, benches, tables, built-in braai)
Balancing of plants and trees in a garden
Aesthetics of plant shapes and colours
Garden layout

      </Text>
<TouchableOpacity
              style={[styles.button, { marginBottom: 15 }]}
              onPress={() => navigation.navigate("calculationsScreen")}
            >
              <Text style={styles.buttonText}> Book now </Text>
            </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('sixMonthCoursesScreen')}
      >
        <Text style={styles.buttonText}> back </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

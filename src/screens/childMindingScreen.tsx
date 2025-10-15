import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { RootStackParamList } from '../navigation/appNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

type props = NativeStackScreenProps<RootStackParamList, 'childMindingScreen'>;

export default function childMindingScreen({ navigation }: props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Second Screen</Text>

      <Text style={styles.paragraph}>
        Fees: R750
Purpose: To provide basic child and baby care
Content:
birth to six-month old baby needs
seven-month to one year old needs
Toddler needs
Educational toys         

      </Text>
<TouchableOpacity
              style={[styles.button, { marginBottom: 15 }]}
              onPress={() => navigation.navigate("calculationsScreen")} //calculation screen
            >
              <Text style={styles.buttonText}> Book now </Text>
            </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('sixWeekCoursesScreen')}
      >
        <Text style={styles.buttonText}> back </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

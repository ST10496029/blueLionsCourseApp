import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { RootStackParamList } from '../navigation/appNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

type props = NativeStackScreenProps<RootStackParamList, 'lifeSkillsScreen'>;

export default function lifeSkillsScreen ({ navigation }: props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Second Screen</Text>

      <Text style={styles.paragraph}>
        Fees: R1500
Purpose: To provide skills to navigate basic life necessities
Content:
Opening a bank account
Basic labour law (know your rights)
Basic reading and writing literacy
Basic numeric literacy

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

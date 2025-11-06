import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { RootStackParamList } from '../navigation/appNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

type props = NativeStackScreenProps<RootStackParamList, 'cookingScreen'>;

export default function cookingScreen({ navigation }: props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>cooking</Text>

      <Text style={styles.paragraph}>
        Fees: R750
Purpose: To prepare and cook nutritious family meals
Content:
Nutritional requirements for a healthy body
Types of protein, carbohydrates and vegetables
Planning meals
Tasty and nutritious recipes
Preparation and cooking of meals

      </Text>
<TouchableOpacity
              style={[styles.button, { marginBottom: 15 }]}
              onPress={() => navigation.navigate("calculationsScreen")}
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

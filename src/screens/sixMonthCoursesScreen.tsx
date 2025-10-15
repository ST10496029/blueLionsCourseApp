import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { RootStackParamList } from '../navigation/appNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

type props = NativeStackScreenProps<RootStackParamList, 'sixMonthCoursesScreen'>;

export default function sixMonthCoursesScreen ({ navigation }: props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Second Screen</Text>

     {/* course description */}
      <Text style={styles.paragraph}>
        Welcome to the Six month courses page! Here, you can explore short-term learning options designed
        to help you build skills quickly and effectively. Choose a course that matches your goals and start
        your journey today.
      </Text>

 <TouchableOpacity
              style={[styles.button, { marginBottom: 15 }]}
              onPress={() => navigation.navigate("firstAidScreen")}
            >
              <Text style={styles.buttonText}> first Aid </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { marginBottom: 15 }]}
              onPress={() => navigation.navigate("sewingScreen")}
            >
              <Text style={styles.buttonText}> sewing </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { marginBottom: 15 }]}
              onPress={() => navigation.navigate("lanscapingScreen")}
            >
              <Text style={styles.buttonText}> landscpaing</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { marginBottom: 15 }]}
              onPress={() => navigation.navigate("lifeSkillsScreen")}
            >
              <Text style={styles.buttonText}> life Skills </Text>
            </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('homeScreen')}//go back button
      >
        <Text style={styles.buttonText}>Go Back Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

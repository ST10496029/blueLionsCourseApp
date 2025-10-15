import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { RootStackParamList } from '../navigation/appNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

type props = NativeStackScreenProps<RootStackParamList, 'sixWeekCoursesScreen'>;

export default function sixWeekCoursesScreen ({ navigation }: props) {
  return (
   <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Second Screen</Text>

       {/* course description */}
      <Text style={styles.paragraph}>
        Welcome to the Six Week Courses page! Here, you can explore short-term learning options designed
        to help you build skills quickly and effectively. Choose a course that matches your goals and start
        your journey today.
      </Text>

      <TouchableOpacity
              style={[styles.button, { marginBottom: 15 }]}
              onPress={() => navigation.navigate("childMindingScreen")}
            >
              <Text style={styles.buttonText}> child Minding </Text>
            </TouchableOpacity>

             <TouchableOpacity
                    style={[styles.button, { marginBottom: 15 }]}
                    onPress={() => navigation.navigate("cookingScreen")}
                  >
                    <Text style={styles.buttonText}>cooking</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={[styles.button, { marginBottom: 15 }]}
                    onPress={() => navigation.navigate("gardenScreen")}
                  >
                    <Text style={styles.buttonText}>Garden maintenence </Text>
                    </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('homeScreen')}//button to go back to homescreen
      >
        <Text style={styles.buttonText}> Back </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

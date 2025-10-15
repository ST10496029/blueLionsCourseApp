import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { RootStackParamList } from '../navigation/appNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type props = NativeStackScreenProps<RootStackParamList, 'sixMonthCoursesScreen'>;

export default function sixMonthCoursesScreen ({ navigation }: props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Second Screen</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('homeScreen')}
      >
        <Text style={styles.buttonText}>Go Back Home</Text>
      </TouchableOpacity>
    </View>
  );
}

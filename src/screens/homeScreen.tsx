import React, { useState } from "react";
import { styles } from "../styles/styles";
import { RootStackParamList } from "../navigation/appNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type props = NativeStackScreenProps<RootStackParamList, 'homeScreen'>;

export default function homeScreen ({navigation}: props){
return ( 
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>

      //button to go to six week courses
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('sixWeekCoursesScreen')}
      >
        <Text style={styles.buttonText}>Go to Second Screen</Text>
      </TouchableOpacity>


      //button to go to six month courses 
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('sixMonthCoursesScreen')}
      >
        <Text style={styles.buttonText}>Go to Second Screen</Text>
      </TouchableOpacity>
    </View>
  );
}


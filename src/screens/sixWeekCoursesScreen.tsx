import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import { RootStackParamList } from "../navigation/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

type props = NativeStackScreenProps<RootStackParamList, "sixWeekCoursesScreen">;

export default function sixWeekCoursesScreen({ navigation }: props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Six Week courses</Text>

      {/*course description*/}
      <Text style={styles.paragraph}>
        Available Six Week Courses you can explore short learning options to
        help you buildup your skills Choose a course and start today.
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
        onPress={() => navigation.navigate("homeScreen")} //button to go back to homescreen
      >
        <Text style={styles.buttonText}> Back </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

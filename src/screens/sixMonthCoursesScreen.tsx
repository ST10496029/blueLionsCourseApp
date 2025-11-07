import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import { RootStackParamList } from "../navigation/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

type props = NativeStackScreenProps<
  RootStackParamList,
  "sixMonthCoursesScreen"
>;

export default function sixMonthCoursesScreen({ navigation }: props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Six Month courses</Text>

      {/* course description */}
      <Text style={styles.paragraph}>
        Available Six month courses you can explore longer learning options to
        help you buildup your skills Choose a course and start today.
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
        onPress={() => navigation.navigate("homeScreen")} //go back button
      >
        <Text style={styles.buttonText}>Go Back Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

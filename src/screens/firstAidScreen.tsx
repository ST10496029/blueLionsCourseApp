import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import { RootStackParamList } from "../navigation/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

type props = NativeStackScreenProps<RootStackParamList, "firstAidScreen">;

export default function firstAidScreen({ navigation }: props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>first aid</Text>

      {/* course description */}
      <Text style={styles.paragraph}>
        Welcome to the Six Week Courses page! Here, you can explore short-term
        learning options designed to help you build skills quickly and
        effectively. Choose a course that matches your goals and start your
        journey today.
      </Text>
      <TouchableOpacity
        style={[styles.button, { marginBottom: 15 }]}
        onPress={() => navigation.navigate("calculationsScreen")}
      >
        <Text style={styles.buttonText}> Book now </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("sixMonthCoursesScreen")}
      >
        <Text style={styles.buttonText}> back </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import { RootStackParamList } from "../navigation/appNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

type props = NativeStackScreenProps<RootStackParamList, "gardenScreen">;

export default function gardenScreen({ navigation }: props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>garden screen</Text>

      <Text style={styles.paragraph}>
        Fees: R750 Purpose: To provide basic knowledge of watering, pruning and
        planting in a domestic garden. Content: • Water restrictions and the
        watering requirements of indigenous and exotic plants Pruning and
        propagation of plants Planting techniques for different plant types
      </Text>
      <TouchableOpacity
        style={[styles.button, { marginBottom: 15 }]}
        onPress={() => navigation.navigate("calculationsScreen")}
      >
        <Text style={styles.buttonText}> Book now </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("sixWeekCoursesScreen")}
      >
        <Text style={styles.buttonText}> back </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

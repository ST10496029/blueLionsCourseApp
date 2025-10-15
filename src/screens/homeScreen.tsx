import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/appNavigator";
import { styles } from "../styles/styles";


type Props = NativeStackScreenProps<RootStackParamList, "homeScreen">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      
      <Image
        source={require('../../assets/logo.png')}//organisation image
        style={localStyles.logo}
      />

      <Text style={localStyles.heading}>
       Empowering the Nation
      </Text>
      
      <Text style={localStyles.coursedescription}>
       Precious Radebe's The SME is started by Precious Radebe. It gives skills training to domestic workers and gardeners. Precious started it because her parents
and older family members did not get the chance to learn new skills or study further.
The training helps people learn more so they can get better jobs or earn more money
. It also helps them start their own small business.
Employers can also send their workers to get training so they can do more work at home.
Customers can choose one or more courses, and if they take more courses, they get a discount.
      </Text>
      <View style={{ height: 30 }} />

      <TouchableOpacity
        style={[styles.button, { marginBottom: 15 }]}
        onPress={() => navigation.navigate("sixWeekCoursesScreen")}
      >
        <Text style={styles.buttonText}> six week courses </Text>
      </TouchableOpacity>

      {/* Button: Six Month Courses */}
      <TouchableOpacity
        style={[styles.button, { marginBottom: 15 }]}
        onPress={() => navigation.navigate("sixMonthCoursesScreen")}
      >
        <Text style={styles.buttonText}>six month courses</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        marginBottom: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    coursedescription: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        paddingHorizontal: 20,
        lineHeight: 22,
    }
});
import react from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from '../screens/homeScreen';
import sixWeekCoursesScreen from '../screens/sixWeekCoursesScreen';
import sixMonthCoursesScreen from '../screens/sixMonthCourse';


export type RootStackParamList = {
  homeScreen: undefined;
  sixWeekCoursesScreen: undefined;
  sixMonthCoursesScreen:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function appNavigator() {

  return (
    <Stack.Navigator initialRouteName="homeScreen">
      <Stack.Screen name = "homeScreen" component = { homeScreen } />
      <Stack.Screen name = "sixWeekCoursesScreen" component = { sixWeekCoursesScreen } />
      <Stack.Screen name = "sixMonthCoursesScreen" component = { sixMonthCoursesScreen } />
      
    </Stack.Navigator>
  );
}
import react from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from '../screens/homeScreen';
import sixWeekCoursesScreen from '../screens/sixWeekCoursesScreen';
import sixMonthCoursesScreen from '../screens/sixMonthCoursesScreen';
import firstAidScreen from '../screens/firstAidScreen';
import sewingScreen from '../screens/sewingScreen';
import lanscapingScreen from '../screens/lanscapingScreen';
import lifeSkillsScreen from '../screens/lifeSkillsScreen';
import childMindingScreen from '../screens/childMindingScreen';
import cookingScreen from '../screens/cookingScreen';
import gardenScreen from '../screens/gardenScreen';
import calculationsScreen from '../screens/calculationsScreen';

//all screens using stack.navigator (w3schools, 2025)
export type RootStackParamList = {
  homeScreen: undefined;
  sixWeekCoursesScreen: undefined;
  sixMonthCoursesScreen:undefined;
  firstAidScreen:undefined;
  sewingScreen:undefined;
  lanscapingScreen:undefined;
  lifeSkillsScreen:undefined;
  childMindingScreen:undefined;
  cookingScreen:undefined;
  gardenScreen:undefined;
  calculationsScreen:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>(); //rootstack paramlist (w3schools, 2025)

export default function appNavigator() {

  //stack.screen (w3schools, 2025)
  return (
    <Stack.Navigator initialRouteName="homeScreen">
      <Stack.Screen name = "homeScreen" component = { homeScreen } />
      <Stack.Screen name = "sixWeekCoursesScreen" component = { sixWeekCoursesScreen } />
      <Stack.Screen name= "firstAidScreen" component={firstAidScreen} options={{ title: 'firstAidScreen' }} />
      <Stack.Screen name = "sixMonthCoursesScreen" component = { sixMonthCoursesScreen } />
      <Stack.Screen name = "sewingScreen" component = { sewingScreen} />
      <Stack.Screen name = "lanscapingScreen" component = { lanscapingScreen} />
      <Stack.Screen name = "lifeSkillsScreen" component = { lifeSkillsScreen} />
      <Stack.Screen name = "childMindingScreen" component = { childMindingScreen } />
      <Stack.Screen name = "cookingScreen" component = { cookingScreen } />
      <Stack.Screen name = "gardenScreen" component = { gardenScreen } /> 
      <Stack.Screen name = "calculationsScreen" component = { calculationsScreen } /> 
    </Stack.Navigator>
  );
}
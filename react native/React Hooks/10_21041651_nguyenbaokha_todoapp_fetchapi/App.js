import { Text, View,StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen_01 from './Screen_01';
import Screen_02 from './Screen_02';
import Screen_03 from './Screen_03';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
   <Stack.Navigator>
   <Stack.Screen name="Screen_01" component={Screen_01}/>
   <Stack.Screen name="Screen_02" component={Screen_02}/>
   <Stack.Screen name="Screen_03" component={Screen_03}/>
   </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  
});

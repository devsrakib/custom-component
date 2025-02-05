import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import BottomTab from './navigation/BottomTab';
import RandomPage from './pages/RandomPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>  
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BottomTab">
          <Stack.Screen name="BottomTab" options={{headerShown: false}} component={BottomTab} />
          <Stack.Screen name="random" options={{headerShown: false,
presentation: 'modal',
// animation: 'reveal_from_bottom'

          }} component={RandomPage

          } />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, SceneStyleInterpolators, TransitionPresets, TransitionSpecs } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Dimensions, Easing } from 'react-native';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
      <Tab.Navigator
      screenOptions={{
        tabBarPosition:  'bottom',
        transitionSpec: {
            animation: 'timing',
            config: {
              duration: 150,
              easing: Easing.inOut(Easing.ease),
            },
          },
         
      }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false, 
            // transitionSpec: TransitionSpecs.ShiftSpec,
            // sceneStyleInterpolator: SceneStyleInterpolators.forShift,
            ...TransitionPresets.ShiftTransition,
          }}
        />
         <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{headerShown: false,
            // transitionSpec: {
            //     animation: 'timing',
            //     config: {
            //       duration: 500,
            //       easing: Easing.inOut(Easing.ease),
            //     },
            //   },
              sceneStyleInterpolator: ({ current }) => ({
                sceneStyle: {
                  opacity: current.progress.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [0, 1, 0],
                  }),
                },
              }),
          }}

          
        />
      </Tab.Navigator>
  );
}

export default BottomTab;

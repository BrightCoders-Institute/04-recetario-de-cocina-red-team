import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../data/screen/Home';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home'}}
        />
      </Stack.Navigator>
  );
};

export default AppNavigator;
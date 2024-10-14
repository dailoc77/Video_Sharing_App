import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Post_Video_Screen from './screens/Post_Video_Screen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Post_Video_Screen" component = {Post_Video_Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

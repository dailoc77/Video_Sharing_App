import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Post_Video_Screen from "./screens/Post_Video_Screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Post on social" component={Post_Video_Screen} options={{
          headerRight: () => (
            <TouchableOpacity>
              <Image source={require('./assets/Data/CreateVideoPostVideo/Button_15.png')}/>
            </TouchableOpacity>
          )
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

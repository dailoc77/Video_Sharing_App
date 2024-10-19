import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Follow_Screen from "./screens/Follow_Screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import { View } from "react-native-web";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Post on social" component={Post_Video_Screen} options={{
          headerRight: () => (
            <TouchableOpacity>
              <Image source={require('./assets/Data/CreateVideoPostVideo/Button_15.png')} style={{ width: 20, height: 20 }}/>
            </TouchableOpacity>
          )
        }}/> */}
        <Stack.Screen
          name="Ruth Sanders"
          component={Follow_Screen}
          options={{
            headerLeft: () => (
              <Image source={require("./assets/Data/Follow/Avatar_33.png")} />
            ),
            headerRight: () => (
              <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 60,
                marginRight: 20,
              }}>
                <TouchableOpacity>
                  <Image
                    source={require("./assets/Data/Follow/search.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require("./assets/Data/Follow/menu.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

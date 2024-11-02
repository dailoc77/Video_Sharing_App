import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import Post_Video_Screen from "./screens/Post_Video_Screen";
import Follow_Screen from "./screens/Follow_Screen";
import Comment_on_Video from "./screens/Comment_on_Video";
import Create_Video_Select_Filter from "./screens/Create_Video_Select_Filter";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectFilter">
        <Stack.Screen name="PostVideo" component={Post_Video_Screen} options={{
          headerRight: () => (
            <TouchableOpacity>
              <Image source={require('./assets/Data/CreateVideoPostVideo/Button_15.png')} style={{ width: 20, height: 20 }}/>
            </TouchableOpacity>
          )
        }}/>
        <Stack.Screen
          name="Follow"
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
        <Stack.Screen
          name="Comment"
          component={Comment_on_Video}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectFilter"
          component={Create_Video_Select_Filter}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

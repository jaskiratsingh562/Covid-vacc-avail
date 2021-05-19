import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import choice from "./Choice";
import bypin from "./ByPIN";
import bydist from "./Bydist";

const Stack = createStackNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="choice">
        <Stack.Screen
          component={choice}
          name="choice"
          options={{
            title: "Welcome,Please select method to search centers:"
          }}
        />
        <Stack.Screen component={bypin} name="bypin" />
        <Stack.Screen component={bydist} name="bydist" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

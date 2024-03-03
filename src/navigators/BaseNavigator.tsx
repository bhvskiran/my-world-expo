import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../utils/Routes";
import HomePage from "../components/Home";
import PhoneRingWaves from "../components/PhoneRingWaves";
import PinCodeView from "../components/PinCodeView";
import Splash from "../components/common/Splash";

const BaseNavigator: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.HOME}
        component={HomePage}
        options={{
          headerShown: false,
          title: "HomeScreen",
          gestureEnabled: false,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name={Routes.PHONE_RING}
        component={PhoneRingWaves}
        options={{
          headerShown: false,
          title: "HomeScreen",
          gestureEnabled: false,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name={Routes.PIN_CODE}
        component={PinCodeView}
        options={{
          headerShown: false,
          title: "HomeScreen",
          gestureEnabled: false,
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default BaseNavigator;

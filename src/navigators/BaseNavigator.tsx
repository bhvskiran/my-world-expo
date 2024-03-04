import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../utils/Routes";
import HomePage from "../components/Home";
import PhoneRingWaves from "../components/PhoneRingWaves";
import PinCodeView from "../components/PinCodeView";
import ScrollToIndex from "../components/ScrollToIndex";
import GlowLoader from "../components/GlowLoader";
import NatureGallery from "../components/NatureGallery";

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
          title: "PhoneRingScreen",
          gestureEnabled: false,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name={Routes.PIN_CODE}
        component={PinCodeView}
        options={{
          headerShown: false,
          title: "PinCodeScreen",
          gestureEnabled: false,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name={Routes.SCROLL_TO_INDEX}
        component={ScrollToIndex}
        options={{
          headerShown: false,
          title: "ScrollToIndexScreen",
          gestureEnabled: false,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name={Routes.GLOW_LOADER}
        component={GlowLoader}
        options={{
          headerShown: false,
          title: "GlowLoader",
          gestureEnabled: false,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name={Routes.NATURE_GALLERY}
        component={NatureGallery}
        options={{
          headerShown: false,
          title: "GlowLoader",
          gestureEnabled: false,
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default BaseNavigator;

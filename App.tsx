import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import BaseNavigator from "./src/navigators/BaseNavigator";
import HomePage from "./src/components/Home";
import AppContext from "./src/context/AppContext";

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppContext>
          <BaseNavigator />
        </AppContext>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

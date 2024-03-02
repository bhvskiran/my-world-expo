import React from "react";
import PinCode from "./PinCode";
import { SafeAreaView } from "react-native";

const PinCodeView: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PinCode onChangePin={(x: string) => console.log(x)} />
    </SafeAreaView>
  );
};

export default PinCodeView;

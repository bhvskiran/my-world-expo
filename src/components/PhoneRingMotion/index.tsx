import React from "react";
import PhoneRingMotion from "./PhoneRingMotion";
import { SafeAreaView, View } from "react-native";

const PhoneRingWaves: React.FC = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PhoneRingMotion width={100} />
    </SafeAreaView>
  );
};

export default PhoneRingWaves;

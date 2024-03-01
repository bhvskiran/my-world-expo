import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const PhoneRingMotion = () => {
  return (
    <View style={styles.container}>
      <View style={styles.phoneCallIcon}>
        {[...Array(3).keys()].map((index: any) => {
          return (
            <MotiView
              key={index}
              style={[styles.dot, styles.absoluteFillObject]}
              from={{ opacity: 0.75, scale: 1 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{
                type: "timing",
                duration: 2000,
                easing: Easing.out(Easing.ease),
                delay: index * 400,
                loop: true,
                repeatReverse: false,
              }}
            />
          );
        })}
        <Feather name="phone-outgoing" size={30} color="#FFFFFF" />
      </View>
    </View>
  );
};

export default PhoneRingMotion;

import React, { ReactNode, useEffect } from "react";
import { View, Vibration } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

export type Props = {
  width?: number;
  bgColor?: string;
  fromOpacity?: number;
  fromSacle?: number;
  toOpacity?: number;
  toScale?: number;
  numOfWaves?: number;
  duration?: number;
  delay?: number;
  icon?: ReactNode;
  iconSize?: number;
  iconColor?: string;
};

const PhoneRingMotion: React.FC<Props> = (props: Props) => {
  const {
    width = 100,
    bgColor = "#6E01EF",
    fromOpacity = 0.75,
    fromSacle = 1,
    toOpacity = 0,
    toScale = 4,
    numOfWaves = 3,
    duration = 2000,
    delay = 400,
    iconSize = (width / 10) * 3,
    iconColor = "#FFFFFF",
    icon = <Feather name="phone-outgoing" size={iconSize} color={iconColor} />,
  } = props;

  const PATTERN = [100, 200, 100, 100, 100, 200, 100, 100];

  useEffect(() => {
    const vibrateInterval = setInterval(() => {
      Vibration.vibrate(PATTERN);
    }, 2000);

    return () => {
      Vibration.cancel();
      clearInterval(vibrateInterval);
    };
  }, []);

  return (
    <View
      style={{
        width: width,
        height: width,
        borderRadius: width / 2,
        backgroundColor: bgColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {[...Array(numOfWaves).keys()].map((index: any) => {
        return (
          <MotiView
            key={index}
            style={{
              width: width,
              height: width,
              borderRadius: width / 2,
              backgroundColor: bgColor,
              position: "absolute",
              zIndex: -1,
            }}
            from={{ opacity: fromOpacity, scale: fromSacle }}
            animate={{ opacity: toOpacity, scale: toScale }}
            transition={{
              type: "timing",
              duration: duration,
              easing: Easing.out(Easing.ease),
              delay: index * delay,
              loop: true,
              repeatReverse: false,
            }}
          />
        );
      })}
      {icon}
    </View>
  );
};

export default PhoneRingMotion;

import React, { ReactNode } from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

export type Props = {
  width?: number;
  bgCOlor?: string;
  fromOpacity?: number;
  fromSacle?: number;
  toOpacity?: number;
  toScale?: number;
  numOfWaves?: number;
  duration?: number;
  delay?: number;
  icon?: ReactNode;
  iconSize?: number;
};

const PhoneRingMotion: React.FC<Props> = (props: Props) => {
  const {
    width = 100,
    bgCOlor = "#6E01EF",
    fromOpacity = 0.75,
    fromSacle = 1,
    toOpacity = 0,
    toScale = 4,
    numOfWaves = 3,
    duration = 2000,
    delay = 400,
    iconSize = (width / 10) * 3,
    icon = <Feather name="phone-outgoing" size={iconSize} color="#FFFFFF" />,
  } = props;
  return (
    <View
      style={{
        width: width,
        height: width,
        borderRadius: width / 2,
        backgroundColor: bgCOlor,
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
              backgroundColor: bgCOlor,
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

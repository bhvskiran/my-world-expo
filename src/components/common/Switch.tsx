import { MotiTransitionProp, MotiView } from "moti";
import React, { useMemo } from "react";
import { View, Pressable } from "react-native";
import { Easing } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  size: number;
  onPress: () => void;
  isActive: boolean;
  activeColor?: string;
  inActiveColor?: string;
  knobBgColor?: string;
};

const transition: MotiTransitionProp = {
  type: "timing",
  duration: 1000,
  easing: Easing.inOut(Easing.ease),
};

const Switch: React.FC<Props> = (props: Props) => {
  const {
    size,
    onPress,
    isActive,
    activeColor = "#2c2c2c",
    inActiveColor = "#dcdcdc",
    knobBgColor = "#FFF",
  } = props;

  const trackWidth = useMemo(() => {
    return size * 1.75;
  }, [size]);

  const trackHeight = useMemo(() => {
    return size * 0.75;
  }, [size]);

  const knobSize = useMemo(() => {
    return size * 0.6;
  }, [size]);

  return (
    <Pressable onPress={onPress}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {/* track */}
        <MotiView
          transition={transition}
          from={{
            backgroundColor: isActive ? activeColor : inActiveColor,
          }}
          animate={{
            backgroundColor: isActive ? activeColor : inActiveColor,
          }}
          style={{
            position: "absolute",
            width: trackWidth,
            height: trackHeight,
            borderRadius: trackHeight / 2,
            backgroundColor: activeColor,
          }}
        />

        {/* knob container */}
        <MotiView
          transition={transition}
          animate={{
            translateX: isActive ? trackWidth / 4 : -trackWidth / 4,
          }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: knobBgColor,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* knob indicator */}
          <MotiView
            transition={transition}
            animate={{
              borderLeftWidth: isActive ? size * 0 : size * 0.1,
              borderRightWidth: isActive ? size * 0.125 : size * 0.1,
              borderTopWidth: isActive ? 0 : size * 0.1,
              backgroundColor: isActive ? "transparent" : "orange",
              borderColor: isActive ? activeColor : "orange",
            }}
            style={{
              width: knobSize,
              height: knobSize,
              borderRadius: knobSize / 2,
              borderWidth: size * 0.1,
            }}
          />
        </MotiView>
      </View>
    </Pressable>
  );
};

export default Switch;

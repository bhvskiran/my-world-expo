import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import DialPad from "./DialPad";
import { MotiView } from "moti";
import { DARK1 } from "../../utils/MyColors";

const { width } = Dimensions.get("window");

export type Props = {
  onChangePin: (x: string) => void;
  viewWidth?: number;
  pinLength?: number;
  dialPadSize?: number;
  spacing?: number;
  dialPadTextSize?: number;
  pinContainerSize?: number;
  pinMaxSize?: number;
  pinSpacing?: number;
  pinSize?: number;
  primaryColor?: string;
  secondaryColor?: string;
  dialPadBorderWidth?: number;
};

const PinCode: React.FC<Props> = (props: Props) => {
  const {
    onChangePin,
    viewWidth = width,
    pinLength = 4,
    dialPadSize = viewWidth * 0.2,
    spacing = 20,
    dialPadTextSize = dialPadSize * 0.4,
    pinContainerSize = viewWidth / 2,
    pinMaxSize = pinContainerSize / pinLength,
    pinSpacing = 10,
    pinSize = pinMaxSize - pinSpacing * 2,
    primaryColor = "transparent",
    secondaryColor = DARK1,
    dialPadBorderWidth = 1.5,
  } = props;

  const [code, setCode] = useState<number[]>([]);

  useEffect(() => {
    const pin = code.join("");
    onChangePin(pin);
  }, [code]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: primaryColor,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          gap: pinSpacing * 2,
          marginBottom: spacing * 2,
          height: pinSize * 2,
        }}
      >
        {[...Array(pinLength).keys()].map((each) => {
          const isSelected = code[each] >= 0;
          return (
            <MotiView
              key={`pin-${each}`}
              style={{
                width: pinSize,
                borderRadius: pinSize,
                backgroundColor: secondaryColor,
              }}
              transition={{
                type: "timing",
                duration: 200,
              }}
              animate={{
                height: isSelected ? pinSize : 2,
                marginBottom: isSelected ? pinSize / 2 : 0,
              }}
            />
          );
        })}
      </View>
      <DialPad
        dialPadNumberWrapStyle={{
          width: dialPadSize,
          height: dialPadSize,
          borderRadius: dialPadSize / 2,
          borderWidth: dialPadBorderWidth,
          borderColor: secondaryColor,
          justifyContent: "center",
          alignItems: "center",
        }}
        dialPadNumberTextStyle={{
          fontSize: dialPadTextSize,
          color: secondaryColor,
        }}
        dialPadBorderWidth={dialPadBorderWidth}
        spaceBetweenNums={spacing}
        onPress={(item: any) => {
          if (item === "del") {
            setCode((prevCode) => prevCode.slice(0, code.length - 1));
          } else if (typeof item === "number") {
            if (code.length === pinLength) return;
            setCode((prevCode) => [...prevCode, item]);
          }
        }}
      />
    </View>
  );
};

export default PinCode;

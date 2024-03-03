import { MotiView } from "moti";
import React from "react";
import { View } from "react-native";
import { DARK1, LIGHT1 } from "../../utils/MyColors";

type Props = {
  size?: number;
  visible: boolean;
  color: string;
};

// const { width, height } = Dimensions.get("window");

const LoadingIndicator: React.FC<Props> = (props: Props) => {
  const { size = 100, visible, color } = props;

  if (visible) {
    return (
      <View
        style={{
          // width,
          // height,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          // position: "absolute",
        }}
      >
        <MotiView
          from={{
            height: size,
            width: size,
            borderRadius: size / 2,
            borderWidth: 0,
          }}
          animate={{
            height: size * 1.2,
            width: size * 1.2,
            borderRadius: (size * 1.2) / 2,
            borderWidth: (size * 1.2) / 10,
          }}
          transition={{
            type: "timing",
            duration: 1000,
            loop: true,
          }}
          style={{
            height: size,
            width: size,
            borderRadius: size / 2,
            borderWidth: size / 10,
            borderColor: color,
            shadowColor: color,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 10,
          }}
        />
      </View>
    );
  } else {
    return <></>;
  }
};

export default LoadingIndicator;

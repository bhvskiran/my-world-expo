import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "del"];

interface Props {
  onPress: (x: (typeof dialPad)[number]) => void;
  dialPadNumberWrapStyle: StyleProp<ViewStyle>;
  dialPadNumberTextStyle: StyleProp<TextStyle>;
  spaceBetweenNums: number;
  dialPadBorderWidth: number;
}

const DialPad: React.FC<Props> = (props: Props) => {
  const {
    onPress,
    dialPadNumberWrapStyle,
    dialPadNumberTextStyle,
    spaceBetweenNums,
    dialPadBorderWidth,
  } = props;
  return (
    <FlatList
      numColumns={3}
      data={dialPad}
      style={{ flexGrow: 0 }}
      scrollEnabled={false}
      columnWrapperStyle={{ gap: spaceBetweenNums }}
      contentContainerStyle={{ gap: spaceBetweenNums }}
      keyExtractor={(item) => item.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            disabled={item === ""}
            onPress={() => onPress(item)}
          >
            <View
              style={[
                dialPadNumberWrapStyle,
                {
                  borderWidth:
                    typeof item !== "number" ? 0 : dialPadBorderWidth,
                },
              ]}
            >
              {item === "del" ? (
                <Ionicons
                  name="backspace-outline"
                  color="black"
                  style={dialPadNumberTextStyle}
                />
              ) : (
                <Text style={dialPadNumberTextStyle}>{item}</Text>
              )}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default DialPad;

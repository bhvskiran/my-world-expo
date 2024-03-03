import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import { MotiView } from "moti";

const { width } = Dimensions.get("screen");

type Props = {
  data: any;
  spacing?: number;
  color?: string;
  textColor?: string;
};

const ScrollAndNavigation: React.FC<Props> = (props: Props) => {
  const {
    data,
    spacing = 10,
    color = "#FCD259",
    textColor = "#36303F",
  } = props;
  const _colors = {
    active: `${color}ff`,
    inactive: `${color}00`,
  };
  const ref = useRef<FlatList>(null);
  const [index, setIndex] = useState<number>(0);
  const [viewPosition, setViewPosition] = useState<number>(0);

  useEffect(() => {
    ref?.current?.scrollToIndex({
      index,
      animated: true,
      viewOffset: viewPosition === 0.5 || viewPosition === 1 ? 0 : spacing,
      viewPosition,
    });
  }, [index, viewPosition]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        ref={ref}
        initialScrollIndex={index}
        style={{ flexGrow: 0 }}
        data={data}
        keyExtractor={(item) => item.key.toString()}
        contentContainerStyle={{ paddingLeft: spacing }}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item, index: fIndex }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setIndex(fIndex);
              }}
            >
              <MotiView
                animate={{
                  backgroundColor:
                    fIndex === index ? _colors.active : _colors.inactive,
                  opacity: fIndex === index ? 1 : 0.6,
                }}
                transition={{
                  duration: 500,
                }}
                style={{
                  marginRight: spacing,
                  padding: spacing,
                  borderWidth: 2,
                  borderColor: _colors.active,
                  borderRadius: 12,
                  backgroundColor:
                    fIndex === index ? _colors.active : _colors.inactive,
                }}
              >
                <Text style={{ color: textColor, fontWeight: "700" }}>
                  {item.job}
                </Text>
              </MotiView>
            </TouchableOpacity>
          );
        }}
      />
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          marginTop: spacing * 10,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: textColor,
              fontWeight: "700",
              marginBottom: spacing,
            }}
          >
            Scroll position
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: width / 2,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={() => setViewPosition(0)}>
              <View
                style={{
                  padding: spacing,
                  backgroundColor: color,
                  borderRadius: spacing,
                  marginRight: spacing,
                }}
              >
                <Entypo name="align-left" size={24} color={textColor} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setViewPosition(0.5)}>
              <View
                style={{
                  padding: spacing,
                  backgroundColor: color,
                  borderRadius: spacing,
                  marginRight: spacing,
                }}
              >
                <Entypo
                  name="align-horizontal-middle"
                  size={24}
                  color={textColor}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setViewPosition(1)}>
              <View
                style={{
                  padding: spacing,
                  backgroundColor: color,
                  borderRadius: spacing,
                }}
              >
                <Entypo name="align-right" size={24} color={textColor} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ color: textColor, fontWeight: "700", marginBottom: 10 }}
          >
            Navigation
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: width / 2,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (index === 0) {
                  return;
                }
                setIndex(index - 1);
              }}
            >
              <View
                style={{
                  padding: spacing,
                  backgroundColor: color,
                  borderRadius: spacing,
                  marginRight: spacing,
                }}
              >
                <Feather name="arrow-left" size={24} color={textColor} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (index === data.length - 1) {
                  return;
                }
                setIndex(index + 1);
              }}
            >
              <View
                style={{
                  padding: spacing,
                  backgroundColor: color,
                  borderRadius: spacing,
                }}
              >
                <Feather name="arrow-right" size={24} color={textColor} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ScrollAndNavigation;

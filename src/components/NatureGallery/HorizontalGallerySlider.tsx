import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

type Props = {
  images: any[];
  spacing?: number;
  imageSize?: number;
  borderColor?: string;
  borderWidth?: number;
  viewPosition?: number;
};

const HorizontalGallerySlider: React.FC<Props> = (props: Props) => {
  const {
    images,
    spacing = 5,
    imageSize = 84,
    borderColor = "#FFF",
    borderWidth = 3,
    viewPosition = 0.5,
  } = props;
  const topRef = useRef<FlatList>(null);
  const thumbRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const scrollToActiveIndex = (index: number) => {
    setActiveIndex(index);
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    // if (index * (imageSize + spacing) - imageSize / 2 > width / 2) {
    //   thumbRef?.current?.scrollToOffset({
    //     offset: index * (imageSize + spacing) - width / 2 + imageSize / 2,
    //     animated: true,
    //   });
    // }
    thumbRef?.current?.scrollToIndex({
      index,
      animated: true,
      viewOffset: viewPosition === 0.5 || viewPosition === 1 ? 0 : spacing,
      viewPosition: viewPosition,
    });
  };

  return (
    <View style={[{ flex: 1, backgroundColor: "#000" }]}>
      <FlatList
        ref={topRef}
        data={images}
        keyExtractor={(item) => item?.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={(ev) => {
          scrollToActiveIndex(
            Math.floor(ev?.nativeEvent?.contentOffset?.x / width)
          );
        }}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              <Image
                source={{ uri: item?.src?.portrait }}
                style={[StyleSheet.absoluteFillObject]}
              />
            </View>
          );
        }}
      />
      <FlatList
        ref={thumbRef}
        data={images}
        keyExtractor={(item) => item?.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ position: "absolute", bottom: imageSize }}
        contentContainerStyle={{ paddingHorizontal: spacing }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
              <Image
                source={{ uri: item?.src?.portrait }}
                style={{
                  width: imageSize,
                  height: imageSize,
                  borderRadius: imageSize / 7,
                  marginHorizontal: spacing,
                  borderWidth: borderWidth,
                  borderColor:
                    index === activeIndex ? borderColor : "transparent",
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default HorizontalGallerySlider;

import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Platform, SafeAreaView, Text, View } from "react-native";
import { DARK1, LIGHT1, getBgColor, getColor } from "../../utils/MyColors";
import { ApplicationContext } from "../../context/AppContext";
import Header from "../common/Header";
import { PEXELS_API_KEY } from "../../utils/constants";
import { fetchImagesFromPexels } from "../../utils/apis";
import HorizontalGallerySlider from "./HorizontalGallerySlider";

const NatureGallery: React.FC = (props: any) => {
  const { navigation } = props;
  const { theme } = useContext(ApplicationContext);
  const [imagesList, setImagesList] = useState<any>([]);

  useEffect(() => {
    getNatureImages();
  }, []);

  const getNatureImages = async () => {
    try {
      const response = await fetchImagesFromPexels();
      setImagesList(response);
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  if (imagesList.length === 0) {
    return (
      <SafeAreaView style={[styles.mainWrapper, getBgColor(theme)]}>
        <Header backHandler={() => navigation.goBack()} />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={[getColor(theme)]}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Header backHandler={() => navigation.goBack()} position="absolute" />
        <HorizontalGallerySlider
          images={imagesList}
          borderColor={theme === "dark" ? LIGHT1 : DARK1}
        />
      </View>
    );
  }
};

export default NatureGallery;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});

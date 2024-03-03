import React, { useContext } from "react";
import { StyleSheet, Platform, SafeAreaView } from "react-native";
import { DARK1, DARK2, LIGHT1, LIGHT2, getBgColor } from "../../utils/MyColors";
import { ApplicationContext } from "../../context/AppContext";
import Header from "../common/Header";
import ScrollAndNavigation from "./ScrollAndNavigation";

const ScrollToIndex: React.FC = (props: any) => {
  const { navigation } = props;
  const { theme } = useContext(ApplicationContext);

  const data = [
    { key: 1, job: "eagle" },
    { key: 2, job: "snake" },
    { key: 3, job: "swan" },
    { key: 4, job: "alligator" },
    { key: 5, job: "crocodile" },
    { key: 6, job: "elephant" },
    { key: 7, job: "deer" },
    { key: 8, job: "lion" },
    { key: 9, job: "tiger" },
    { key: 10, job: "rhinosaurous" },
    { key: 11, job: "dinosaurous" },
    { key: 12, job: "tortoise" },
    { key: 13, job: "fish" },
    { key: 14, job: "social animal" },
    { key: 15, job: "wild boar" },
    { key: 16, job: "cat" },
    { key: 17, job: "monkey" },
    { key: 18, job: "hippopotamus" },
    { key: 19, job: "oranguton" },
    { key: 20, job: "dog" },
  ];

  return (
    <SafeAreaView style={[styles.mainWrapper, getBgColor(theme)]}>
      <Header backHandler={() => navigation.goBack()} />
      <ScrollAndNavigation
        data={data}
        color={theme === "dark" ? DARK2 : LIGHT2}
        textColor={theme === "dark" ? LIGHT1 : DARK1}
      />
    </SafeAreaView>
  );
};

export default ScrollToIndex;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});

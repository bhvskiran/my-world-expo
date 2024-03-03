import React, { useContext } from "react";
import { StyleSheet, Platform, SafeAreaView } from "react-native";
import { DARK1, LIGHT1, getBgColor } from "../../utils/MyColors";
import { ApplicationContext } from "../../context/AppContext";
import Header from "../common/Header";
import LoadingIndicator from "./LoadingIndicator";

const GlowLoader: React.FC = (props: any) => {
  const { navigation } = props;
  const { theme } = useContext(ApplicationContext);
  return (
    <SafeAreaView style={[styles.mainWrapper, getBgColor(theme)]}>
      <Header backHandler={() => navigation.goBack()} />
      <LoadingIndicator
        visible={true}
        color={theme === "dark" ? LIGHT1 : DARK1}
      />
    </SafeAreaView>
  );
};

export default GlowLoader;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});

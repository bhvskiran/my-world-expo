import React, { useContext } from "react";
import PinCode from "./PinCode";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { DARK1, LIGHT1, getBgColor } from "../../utils/MyColors";
import Header from "../common/Header";
import { ApplicationContext } from "../../context/AppContext";

const PinCodeView: React.FC = (props: any) => {
  const { navigation } = props;
  const { theme } = useContext(ApplicationContext);
  return (
    <SafeAreaView style={[styles.mainWrapper, getBgColor(theme)]}>
      <Header backHandler={() => navigation.goBack()} />
      <PinCode
        onChangePin={(x: string) => console.log(x)}
        primaryColor={theme === "dark" ? DARK1 : LIGHT1}
        secondaryColor={theme === "dark" ? LIGHT1 : DARK1}
      />
    </SafeAreaView>
  );
};

export default PinCodeView;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});

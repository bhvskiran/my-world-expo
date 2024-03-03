import React, { useContext } from "react";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import PhoneRingMotion from "./PhoneRingMotion";
import { DARK1, LIGHT1, getBgColor } from "../../utils/MyColors";
import Header from "../common/Header";
import { ApplicationContext } from "../../context/AppContext";

const PhoneRingWaves: React.FC = (props: any) => {
  const { navigation } = props;
  const { theme } = useContext(ApplicationContext);
  return (
    <SafeAreaView style={[styles.mainWrapper, getBgColor(theme)]}>
      <Header backHandler={() => navigation.goBack()} />
      <View style={[styles.phoneRingWrapper, getBgColor(theme)]}>
        <PhoneRingMotion
          bgColor={theme === "dark" ? LIGHT1 : DARK1}
          iconColor={theme === "dark" ? DARK1 : LIGHT1}
        />
      </View>
    </SafeAreaView>
  );
};

export default PhoneRingWaves;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  phoneRingWrapper: { flex: 1, justifyContent: "center", alignItems: "center" },
});

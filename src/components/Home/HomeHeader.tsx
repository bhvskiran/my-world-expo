import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { DARK2, LIGHT2 } from "../../utils/MyColors";
import { ApplicationContext } from "../../context/AppContext";
import MyLogo from "../common/MyLogo";
import Switch from "../common/Switch";

const HomeHeader: React.FC = () => {
  const { updateTheme, theme } = useContext(ApplicationContext);
  return (
    <View style={styles.homeHeaderWrap}>
      <MyLogo />

      <Switch
        size={30}
        isActive={theme === "dark"}
        onPress={() => updateTheme()}
        activeColor={DARK2}
        inActiveColor={LIGHT2}
      />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  homeHeaderWrap: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

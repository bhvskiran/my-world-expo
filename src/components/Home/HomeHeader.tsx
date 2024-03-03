import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { DARK2, LIGHT1, LIGHT2 } from "../../utils/MyColors";
import ToggleSwitch from "toggle-switch-react-native";
import { ApplicationContext } from "../../context/AppContext";
import MyLogo from "../common/MyLogo";

const HomeHeader: React.FC = () => {
  const { updateTheme, theme } = useContext(ApplicationContext);
  return (
    <View style={styles.homeHeaderWrap}>
      <MyLogo />

      <ToggleSwitch
        isOn={theme === "dark"}
        onColor={DARK2}
        offColor={LIGHT2}
        onToggle={(isOn) => updateTheme()}
        size="medium"
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

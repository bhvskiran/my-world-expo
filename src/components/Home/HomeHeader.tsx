import React, { useContext } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { DARK2, LIGHT1, LIGHT2, getColor } from "../../utils/MyColors";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
import { ApplicationContext } from "../../context/AppContext";

const globeSize = 30;
const logoSize = globeSize - 10;

const HomeHeader: React.FC = () => {
  const { updateTheme, theme } = useContext(ApplicationContext);
  return (
    <View style={styles.homeHeaderWrap}>
      <View style={styles.logoWrap}>
        <MaterialIcons
          name="arrow-back-ios"
          style={[styles.icon, getColor(theme)]}
        />
        <Text style={[styles.logoText, getColor(theme)]}>My World</Text>
        <View style={styles.globeWrap}>
          <Image
            source={require("../../assets/earth_rotating.gif")}
            style={styles.globe}
          />
        </View>
        <MaterialCommunityIcons
          name="slash-forward"
          style={[styles.icon, getColor(theme)]}
        />
        <MaterialIcons
          name="arrow-forward-ios"
          style={[styles.icon1, getColor(theme)]}
        />
      </View>

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
  logoWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: logoSize,
  },
  icon1: {
    fontSize: logoSize,
    marginLeft: -5,
  },
  logoText: {
    fontWeight: "bold",
    fontSize: logoSize,
    marginLeft: -5,
    marginRight: 5,
  },
  globeWrap: {
    height: globeSize * 0.9,
    width: globeSize * 0.9,
    borderRadius: (globeSize * 0.9) / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: LIGHT1,
  },
  globe: {
    height: globeSize,
    width: globeSize,
  },
});

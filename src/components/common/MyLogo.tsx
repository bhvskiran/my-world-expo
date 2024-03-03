import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LIGHT1, getColor } from "../../utils/MyColors";
import { ApplicationContext } from "../../context/AppContext";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

let globeSize = 30;
let logoSize = globeSize - 10;

const MyLogo: React.FC = () => {
  const { theme } = useContext(ApplicationContext);
  return (
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
  );
};

export default MyLogo;

const styles = StyleSheet.create({
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

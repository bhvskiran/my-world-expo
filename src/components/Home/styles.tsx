import { Platform, StyleSheet } from "react-native";
import { DARK1, LIGHT1 } from "../../utils/MyColors";

export const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  navItemsWrap: {
    padding: 20,
    flex: 1,
  },
  navItemWrap: {
    width: 75,
    height: 75,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  navImage: {
    width: 40,
    height: 40,
  },
  navImageWrap: {
    height: 55,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    fontSize: 9,
    width: 65,
    textAlign: "center",
  },
});

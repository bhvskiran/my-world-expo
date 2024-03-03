import { StyleSheet } from "react-native";
import { DARK1, LIGHT1 } from "../../utils/MyColors";

export const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
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
});

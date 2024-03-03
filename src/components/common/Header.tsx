import React, { useContext } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { DARK1, getBgColor, getColor } from "../../utils/MyColors";
import { ApplicationContext } from "../../context/AppContext";

type Props = {
  backHandler: () => void;
};

const Header: React.FC<Props> = (props: Props) => {
  const { backHandler } = props;
  const { theme } = useContext(ApplicationContext);
  return (
    <View style={[styles.headerWrap, getBgColor(theme)]}>
      <TouchableOpacity style={styles.backBtn} onPress={() => backHandler()}>
        <MaterialIcons
          name="arrow-back-ios"
          size={30}
          style={getColor(theme)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrap: {
    paddingHorizontal: 20,
  },
  backBtn: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

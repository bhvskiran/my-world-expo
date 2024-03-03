import React, { useContext } from "react";
import { StyleSheet, Platform, SafeAreaView } from "react-native";
import { getBgColor } from "../../utils/MyColors";
import { ApplicationContext } from "../../context/AppContext";
import Header from "../common/Header";

const index: React.FC = (props: any) => {
  const { navigation } = props;
  const { theme } = useContext(ApplicationContext);
  return (
    <SafeAreaView style={[styles.mainWrapper, getBgColor(theme)]}>
      <Header backHandler={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});

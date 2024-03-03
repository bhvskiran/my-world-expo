import React, { useContext } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./styles";
import { Routes } from "../../utils/Routes";
import HomeHeader from "./HomeHeader";
import { ApplicationContext } from "../../context/AppContext";
import { getBgColor, getBorderColor } from "../../utils/MyColors";

const HomePage: React.FC = (props: any) => {
  const { navigation } = props;
  const { theme } = useContext(ApplicationContext);
  const navItemsList = [
    {
      id: 1,
      name: "phone_call",
      image:
        theme === "dark"
          ? require("../../assets/phone_call_light.png")
          : require("../../assets/phone_call_dark.png"),
      route: Routes.PHONE_RING,
    },
    {
      id: 2,
      name: "pin_code",
      image:
        theme === "dark"
          ? require("../../assets/dial_pad_light.png")
          : require("../../assets/dial_pad_dark.png"),
      route: Routes.PIN_CODE,
    },
  ];

  return (
    <SafeAreaView style={[styles.mainWrapper, getBgColor(theme)]}>
      <HomeHeader />
      <View style={styles.navItemsWrap}>
        <FlatList
          numColumns={4}
          data={navItemsList}
          keyExtractor={(item: any) => item.id.toString()}
          scrollEnabled={false}
          columnWrapperStyle={{ justifyContent: "space-around" }}
          contentContainerStyle={{ gap: 20 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={[styles.navItemWrap, getBorderColor(theme)]}
                onPress={() => navigation.navigate(item.route)}
              >
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={styles.navImage}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

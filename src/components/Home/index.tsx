import React, { useContext } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { styles } from "./styles";
import { Routes } from "../../utils/Routes";
import HomeHeader from "./HomeHeader";
import { ApplicationContext } from "../../context/AppContext";
import { getBgColor, getBorderColor, getColor } from "../../utils/MyColors";

const HomePage: React.FC = (props: any) => {
  const { navigation } = props;
  const { theme } = useContext(ApplicationContext);
  const navItemsList = [
    {
      id: 1,
      name: "phone_call",
      title: "Phone Waves",
      image:
        theme === "dark"
          ? require("../../assets/phone_call_light.png")
          : require("../../assets/phone_call_dark.png"),
      route: Routes.PHONE_RING,
    },
    {
      id: 2,
      name: "pin_code",
      title: "Pin Code",
      image:
        theme === "dark"
          ? require("../../assets/dial_pad_light.png")
          : require("../../assets/dial_pad_dark.png"),
      route: Routes.PIN_CODE,
    },
    {
      id: 3,
      name: "scroll_to_index",
      title: "Scroll to Index",
      image:
        theme === "dark"
          ? require("../../assets/scroll_lr_light.png")
          : require("../../assets/scroll_lr_dark.png"),
      route: Routes.SCROLL_TO_INDEX,
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
                <View style={styles.navImageWrap}>
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={styles.navImage}
                  />
                </View>
                <Text
                  style={[styles.navText, getColor(theme)]}
                  numberOfLines={1}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

import React, { useContext } from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./styles";
import HomeHeader from "./HomeHeader";
import { ApplicationContext } from "../../context/AppContext";
import {
  DARK1,
  LIGHT1,
  getBgColor,
  getBorderColor,
  getColor,
} from "../../utils/MyColors";
import { MotiSafeAreaView } from "moti";
import { navItemsList } from "../../utils/constants";

const HomePage: React.FC = (props: any) => {
  const { navigation } = props;
  const { theme } = useContext(ApplicationContext);

  return (
    <MotiSafeAreaView
      animate={{
        backgroundColor: theme === "dark" ? DARK1 : LIGHT1,
      }}
      transition={{
        type: "timing",
        duration: 500,
        delay: 100,
      }}
      style={[styles.mainWrapper, getBgColor(theme)]}
    >
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
            const image = theme === "dark" ? item.lightImage : item.darkImage;
            return (
              <TouchableOpacity
                style={[styles.navItemWrap, getBorderColor(theme)]}
                onPress={() => navigation.navigate(item.route)}
              >
                <View style={styles.navImageWrap}>
                  <Image
                    source={image}
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
    </MotiSafeAreaView>
  );
};

export default HomePage;

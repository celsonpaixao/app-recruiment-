import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Typography from "../components/typography";
import GlobalIcons from "../components/global_Icons";
import { COLORS } from "../styles/color_style";
import HomeService from "../services/home-service";

const HomeAppBar = () => {
  const { userLogout } = HomeService();

  const handleLogout = async () => {
    try {
      await userLogout();
    } catch (error) {
      console.error("Erro ao tentar deslogar", error);
    }
  };

  return (
    <View style={styles.appBar}>
      <TouchableOpacity onPress={handleLogout}>
        <View style={styles.appBarLeft}>
          <View style={styles.userIcon} />
          <View>
            <Typography
              variant="p-plusjakartasans-bold"
              style={styles.appBarText}
            >
              Mirantes Tecnologies
            </Typography>
            <Typography
              variant="button-plusjakartasans-regular"
              style={styles.appBarText}
            >
              Mirantes Tecnologies
            </Typography>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.appBarRight}>
        <GlobalIcons
          name="notifications"
          size={24}
          color={COLORS.backgroundLight}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  appBarLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  userIcon: {
    backgroundColor: COLORS.backgroundLight,
    width: 36,
    height: 36,
    borderRadius: 50,
  },
  appBarText: {
    color: COLORS.backgroundLight,
  },
  appBarRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});

export default HomeAppBar;

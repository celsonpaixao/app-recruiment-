import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../styles/color_style";
import GlobalLayoutPage from "../layouts/global_layout_page";
import HomeFeed from "../components/home_feed";
import HomeGridDashBoard from "../components/home_dash_board";
import HomeAppBar from "../components/home_app_bar";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.background}>
        <View style={styles.blueSection} />
        <View style={styles.whiteSection} />
      </View>

      <GlobalLayoutPage>
        <View style={styles.main}>
          <View style={styles.header}>
            <HomeAppBar />
            <HomeGridDashBoard />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
            style={styles.scrollView}
          >
            <HomeFeed />
          </ScrollView>
        </View>
      </GlobalLayoutPage>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.backgroundLight,
  },
  main: {
    flex: 1,
    width: "100%",
    zIndex: 1,
    top: 35,
    flexDirection: "column",
  },
  header: {
    zIndex: 2,
    gap: 20,
    marginBlock: 10,
  },
  scrollView: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  blueSection: {
    flex: 2,
    backgroundColor: COLORS.primary,
  },
  whiteSection: {
    flex: 5,
    backgroundColor: COLORS.backgroundLight,
  },
  scrollContent: {
    paddingBottom: 40,
  },
});

export default HomePage;

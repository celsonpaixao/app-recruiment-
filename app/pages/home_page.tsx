import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../styles/color_style";
import GlobalLayoutPage from "../layouts/global_layout_page";
import HomeFeed from "../components/home_feed";
import HomeGridDashBoard from "../components/home_dash_board";
import HomeAppBar from "../components/home_app_bar";
import FeedChartComponent from "../components/feed_chart_component";
import HomeService from "../services/home-service";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {

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
            <FeedChartComponent />
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
    marginVertical: 10,
  },
  scrollView: {
    flex: 1,
    zIndex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
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
    gap: 20,
    flexGrow: 1,
  },
});

export default HomePage;

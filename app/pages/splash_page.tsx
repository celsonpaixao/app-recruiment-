import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Typography from "../components/typography";
import useAppNavigation from "../hooks/app_navigation";

const SplashPage = () => {
  const { goToOnboarding, goToHome } = useAppNavigation();

  useEffect(() => {}, [goToOnboarding()]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <Typography variant="h1-plusjakartasans-extraBold" style={styles.title}>
        Zenite
      </Typography>
      <Typography variant="p-plusjakartasans-light" style={styles.subtitle}>
        Recrutamento inteligente
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#0B89CE",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "700",
  },
  subtitle: {
    color: "#ffffff",
  },
});

export default SplashPage;

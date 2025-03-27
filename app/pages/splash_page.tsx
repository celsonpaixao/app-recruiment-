import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Typography from "../components/typography";
import SplashService from "../services/splash_service";
import useAppNavigation from "../hooks/app_navigation";

const SplashPage = () => {
 const navigator = useAppNavigation();
  
  useEffect(() => {
    setTimeout(() => {
        navigator.goToOnboarding();
      }, 2000); setTimeout(() => {
        navigator.goToOnboarding();
      }, 2000);
  }, []);

  return (
    <View className="w-full h-screen bg-primary flex-1 items-center justify-center">
      <StatusBar translucent backgroundColor="transparent" />
      <Typography variant="h1-jakarta-bold" className="text-white">
        Zenite
      </Typography>
      <Typography variant="p-jakarta-light" className="text-white">
        Recrutamento inteligente
      </Typography>
    </View>
  );
};

export default SplashPage;

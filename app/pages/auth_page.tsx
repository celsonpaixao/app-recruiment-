import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Typography from "../components/typography";
import { StatusBar } from "expo-status-bar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import RegisterPage from "./register_page";
import LoginPage from "./login_page";
import { AppRoutes } from "../resources/app_routes";
import { NavigationContainer } from "@react-navigation/native";
import AuthLayoutTab from "../layouts/auth_layout";

const AuthPage = () => {
  return (
    <View className="bg-primary w-full h-screen flex-1 items-center justify-center">
      <Typography variant="h1-jakarta-medium" className="m-[40px] text-white">
        Olá bem-vindo(a)!
      </Typography>
      <View className="flex-1 w-full overflow-hidden bg-yellow-50 ">
        <AuthLayoutTab />
      </View>
    </View>
  );
};

export default AuthPage;

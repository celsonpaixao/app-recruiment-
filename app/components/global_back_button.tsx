import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Typography from "./typography";
import AppNavigation from "../hooks/app_navigation";
const GlobalBackButton = ({ label }: { label?: string }) => {
  const navigator = AppNavigation();
  return (
    <TouchableOpacity onPress={navigator.goBack}>
      <View className="flex items-center justify-center flex-row gap-2">
        <MaterialIcons name="west" color="white" size={24} />
        {label && (
          <Typography variant="h3-jakarta-regular" className="text-white">
            {label}
          </Typography>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default GlobalBackButton;

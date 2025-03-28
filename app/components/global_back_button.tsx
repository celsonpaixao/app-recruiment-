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
      <View style={styles.container}>
        <MaterialIcons name="keyboard-backspace" color="#ffffff" size={24} />
        {label && (
          <Typography variant="h3-plusjakartasans-medium" color="#ffffff">
            {label}
          </Typography>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});

export default GlobalBackButton;

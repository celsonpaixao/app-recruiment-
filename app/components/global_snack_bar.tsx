import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Snackbar as PaperSnackbar } from "react-native-paper";
import { useSnackbarStore } from "../stores/snackbarStore";
import { COLORS } from "../styles/color_style";
import Typography from "./typography";

const GlobalSnackBar = () => {
  const { visible, message, type, hideSnackbar } = useSnackbarStore();

  const backgroundColors = {
    success: COLORS.success,
    error: COLORS.error,
    alert: COLORS.warning,
    info: COLORS.primary,
  };

  const textColors = {
    success: "#FFFFFF",
    error: "#FFFFFF",
    alert: "#FFFFFF",
    info: "#FFFFFF",
  };

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        hideSnackbar();
      }, 3500);
    }
  }, [visible]);

  return (
    <View style={styles.container}>
      <PaperSnackbar
        visible={visible}
        onDismiss={hideSnackbar}
        style={{
          backgroundColor: backgroundColors[type],
          alignItems: "center",
          justifyContent: "center",
        }}
        theme={{
          colors: {
            text: textColors[type],
          },
        }}
      >
        <Typography
          variant="p-plusjakartasans-extraBold"
          style={{ color: COLORS.backgroundLight }}
        >
          {message}
        </Typography>
      </PaperSnackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default GlobalSnackBar;

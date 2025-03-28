import React from "react";
import { StyleSheet, View } from "react-native";

const GlobalLayoutPage = ({ children }: { children?: React.ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default GlobalLayoutPage;

import React from "react";
import { View, StyleSheet } from "react-native";
import Typography from "./typography";
import { COLORS } from "../styles/color_style";

interface GlobalDividerProps {
  text?: string;
  className?: string;
}

const GlobalDivider = ({ text, className }: GlobalDividerProps) => {
  return (
    <View style={[styles.container, className && {}]}>
      <View style={styles.line} />
      {text && (
        <Typography variant="p-plusjakartasans-medium">{text}</Typography>
      )}
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.gray[300],
  },
});

export default GlobalDivider;

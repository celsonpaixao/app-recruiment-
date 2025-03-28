import React from "react";
import {
  Keyboard,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import GlobalBackButton from "../components/global_back_button";
import { COLORS } from "../styles/color_style";

const AuthLayoutPage = ({ children }: { children?: React.ReactNode }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <GlobalBackButton label="Voltar" />
          </View>
          <View style={styles.rightHeader}>
            <GlobalBackButton label="Voltar" />
          </View>
        </View>
        <View style={styles.content}>{children}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    width: "100%",
    height: "100%",
    flex: 1,
  },
  header: {
    width: "100%",
    height: 70,
    marginTop: 40,
    flexDirection: "row",
    backgroundColor: COLORS.primary,
  },
  leftHeader: {
    width: "50%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 32,
    backgroundColor: COLORS.primary,
    borderBottomRightRadius: 20,
  },
  rightHeader: {
    width: "50%",
    height: 70,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  content: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    flex: 1,
    borderTopLeftRadius: 30,
    overflow: "hidden",
    paddingHorizontal: 28,
  },
});

export default AuthLayoutPage;

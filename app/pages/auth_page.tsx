import React from "react";
import { StyleSheet, View } from "react-native";
import Typography from "../components/typography";
import AuthLayoutTab from "../layouts/auth_layout";

const AuthPage = () => {
  return (
    <View style={styles.container}>
      <Typography
        variant="h1-plusjakartasans-medium"
        color="#ffffff"
        style={styles.title}
      >
        Olá bem-vindo(a)!
      </Typography>
      <View style={styles.content}>
        <AuthLayoutTab />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B89CE",
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    margin: 40,
  },
  content: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
});

export default AuthPage;

import React from "react";
import { StyleSheet, View } from "react-native";
import AuthLayoutPage from "../layouts/auth_layout_page";
import Typography from "../components/typography";
import GlobalInput from "../components/global_input";
import GlobalButton from "../components/global_button";
import { COLORS } from "../styles/color_style";

const ResetPasswordPage = () => {
  return (
    <AuthLayoutPage>
      <View style={styles.container}>
        <Typography variant="h2-plusjakartasans-bold" style={styles.title}>
          Criar uma nova senha
        </Typography>

        <GlobalInput
          label="Nova senha"
          placeholder="Inserir senha"
          secureTextEntry={true}
        />

        <GlobalInput
          label="Confirmar senha"
          placeholder="Inserir senha"
          secureTextEntry={true}
        />

        <GlobalButton style={styles.button}>
          <Typography
            variant="h3-plusjakartasans-medium"
            style={styles.buttonText}
          >
            Criar senha
          </Typography>
        </GlobalButton>
      </View>
    </AuthLayoutPage>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 16,
  },
  title: {
    color: COLORS.primary,
    fontSize: 24,
  },
  button: {
    width: "100%",
  },
  buttonText: {
    color: COLORS.backgroundLight,
  },
});

export default ResetPasswordPage;

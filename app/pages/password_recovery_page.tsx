import React from "react";
import { StyleSheet, View } from "react-native";
import AuthLayoutPage from "../layouts/auth_layout_page";
import Typography from "../components/typography";
import GlobalInput from "../components/global_input";
import GlobalButton from "../components/global_button";
import PasswordRecoveryService from "../services/password_recovery_service";
import GlobalSnackBar from "../components/global_snack_bar";

const PasswordRecoveryPage = () => {
  const service = PasswordRecoveryService();

  return (
    <AuthLayoutPage>
      <View style={styles.container}>
        <Typography variant="h2-plusjakartasans-bold" style={styles.title}>
          Esqueceu a senha?
        </Typography>

        <Typography variant="p-plusjakartasans-regular" style={styles.subtitle}>
          Insira seu e-mail para receber as instruções de recuperação.
        </Typography>

        <GlobalInput
          label="Email"
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={service.setEmail}
          value={service.email}
        />

        <GlobalButton
          onPress={service.navigateToRelidationCode}
          style={styles.button}
        >
          <Typography
            variant="h3-plusjakartasans-medium"
            style={styles.buttonText}
          >
            Continuar
          </Typography>
        </GlobalButton>
      </View>
      <GlobalSnackBar />
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
    color: "#3b82f6",
    fontSize: 24,
  },
  subtitle: {
    color: "#6b7280",
    marginBottom: 16,
  },
  button: {
    width: "100%",
  },
  buttonText: {
    color: "#ffffff",
  },
});

export default PasswordRecoveryPage;

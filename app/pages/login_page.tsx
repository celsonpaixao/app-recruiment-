import React, { useState } from "react";
import { View, Image, StatusBar, StyleSheet } from "react-native";
import GlobalInput from "../components/global_input";
import Typography from "../components/typography";
import GlobalButton from "../components/global_button";
import GlobalDivider from "../components/global_divider";
import { AppAssetsImages } from "../resources/app_assets_images";
import LoginService from "../services/login_service";
import { COLORS } from "../styles/color_style";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { navigateToRecoveryPass, onLogin } = LoginService();

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <GlobalInput
        label="Email"
        placeholder="Inserir email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <GlobalInput
        label="Senha"
        placeholder="Inserir senha"
        keyboardType="default"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Typography
        onPress={navigateToRecoveryPass}
        variant="h3-plusjakartasans-semiBold"
        style={styles.forgotPassword}
      >
        Esqueceu a senha?
      </Typography>

      <GlobalButton
        onPress={onLogin}
        style={{
          width: "100%",
          marginBottom: 30,
        }}
      >
        <Typography
          variant="h2-plusjakartasans-medium"
          style={{ color: COLORS.backgroundLight }}
        >
          Continuar
        </Typography>
      </GlobalButton>

      <GlobalDivider text="Ou entrar com" />

      <View style={styles.socialButtonsContainer}>
        <GlobalButton variant="outline" style={styles.socialButtonText}>
          <Image
            source={AppAssetsImages.google_vector}
            style={styles.socialIcon}
          />
          <Typography variant="button-plusjakartasans-semiBold">
            Google
          </Typography>
        </GlobalButton>

        <GlobalButton variant="outline" style={styles.socialButtonText}>
          <Image
            source={AppAssetsImages.linkdin_vector}
            style={styles.socialIcon}
          />
          <Typography variant="button-plusjakartasans-semiBold">
            Linkedin
          </Typography>
        </GlobalButton>
      </View>

      <View style={styles.footer}>
        <Typography variant="h3-plusjakartasans-medium" style={{}}>
          Não tem uma conta?
        </Typography>
        <Typography
          variant="h3-plusjakartasans-medium"
          style={{ color: COLORS.primary }}
        >
          Criar conta
        </Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    gap: 16,
    paddingTop: 16,
    paddingHorizontal: 28,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  forgotPassword: {
    color: "#0B89CE",
    marginBottom: 4,
  },

  socialButtonsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
  },
  socialButton: {
    width: 170,
    borderRadius: 10,
    gap: 8,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  socialButtonText: {
    width: "48%",
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    gap: 4,
  },
});

export default LoginPage;

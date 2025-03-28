import React from "react";
import { StyleSheet, View } from "react-native";
import GlobalInput from "../components/global_input";
import GlobalButton from "../components/global_button";
import Typography from "../components/typography";
import RegisterService from "../services/register_service";
import { COLORS } from "../styles/color_style";

const RegisterPage = () => {
  const { navigatoSucess } = RegisterService();

  return (
    <View style={styles.container}>
      <GlobalInput
        label="Nome da empresa"
        placeholder="Inserir nome da empresa"
      />
      <GlobalInput
        label="Email corporativo da empresa"
        placeholder="Inserir email corporativo da empresa"
      />
      <GlobalInput
        label="Endereço da empresa"
        placeholder="Inserir o endereço"
      />
      <GlobalInput label="Senha" placeholder="Inserir senha" />

      <GlobalButton
        onPress={navigatoSucess}
        style={{ width: "100%", borderRadius: 10, marginTop: 4 }}
      >
        <Typography
          variant="h2-plusjakartasans-medium"
          style={{ color: COLORS.backgroundLight }}
        >
          Continuar
        </Typography>
      </GlobalButton>

      <View style={styles.footer}>
        <Typography
          variant="h3-plusjakartasans-regular"
          style={styles.footerText}
        >
          Já tem uma conta?
        </Typography>
        <Typography
          variant="h3-plusjakartasans-medium"
          style={styles.footerLink}
        >
          Entrar
        </Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    gap: 16,
    paddingTop: 16,
    paddingHorizontal: 28,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },

  footer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    gap: 4,
  },
  footerText: {
    color: "#111827",
  },
  footerLink: {
    color: "#3b82f6",
  },
});

export default RegisterPage;

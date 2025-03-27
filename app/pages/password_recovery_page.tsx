import React from "react";
import { StyleSheet, View } from "react-native";
import AuthLayoutPage from "../layouts/auth_layout_page";
import Typography from "../components/typography";
import GlobalInput from "../components/global_input";
import GlobalButton from "../components/global_button";
import PasswordRecoveryService from "../services/password_recovery_service";

const PasswordRecoveryPage = () => {
  const service = PasswordRecoveryService();

  return (
    <AuthLayoutPage>
      <View className="px-8 pt-8 flex-1 items-start justify-start gap-5">
        <Typography
          variant="h2-jakarta-bold"
          className="text-primary text-[24px]"
        >
          Esqueceu a senha?
        </Typography>
        <Typography variant="p-jakarta-regular" className="text-gray-500 mb-4">
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
          className="w-full rounded-[15px] mt-3"
          onPress={service.navigateToRelidationCode}
        >
          <Typography variant="h3-jakarta-medium" className="text-white">
            Continuar
          </Typography>
        </GlobalButton>
      </View>
    </AuthLayoutPage>
  );
};

export default PasswordRecoveryPage;

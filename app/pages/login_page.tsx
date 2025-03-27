import React, { useState } from "react";
import { View, Image, StatusBar } from "react-native";
import GlobalInput from "../components/global_input";
import Typography from "../components/typography";
import GlobalButton from "../components/global_button";
import GlobalDivider from "../components/global_divider";
import App from "../App";
import { AppAssetsImages } from "../resources/app_assets_images";
import LoginService from "../services/login_service";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const service = LoginService();

  return (
    <View className="bg-white flex gap-8 pt-8 px-7 w-full h-screen flex-col items-end justify-start ">
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
        onPress={service.navigateToRecoveryPass}
        variant="h2-jakarta-bold"
        className="text-primary mt-1"
      >
        Esqueceu a senha?
      </Typography>
      <GlobalButton className="w-full rounded-[10px] mt-2">
        <Typography variant="h2-jakarta-bold" className="text-white my-1 ">
          Continuar
        </Typography>
      </GlobalButton>
      <GlobalDivider text="Ou" className="mt-[20px]" />
      <View className="w-full flex-row items-center justify-between ">
        <GlobalButton
          variant="outline"
          className="w-[170px] rounded-[10px] gap-2 "
        >
          <Image
            source={AppAssetsImages.google_vector}
            className="w-[24px] h-[24px]"
          />
          <Typography variant="h3-jakarta-regular" className="text-gray-900 ">
            Google
          </Typography>
        </GlobalButton>
        <GlobalButton
          variant="outline"
          className="w-[170px] rounded-[10px] gap-2 "
        >
          <Image
            source={AppAssetsImages.linkdin_vector}
            className="w-[24px] h-[24px]"
          />
          <Typography variant="h3-jakarta-regular" className="text-gray-900">
            Linkedin
          </Typography>
        </GlobalButton>
      </View>
      <View className="w-full flex-row items-center justify-center mt-4 gap-1">
        <Typography variant="h2-jakarta-medium" className="text-gray-900">
          Não tem uma conta?
        </Typography>
        <Typography variant="h2-jakarta-medium" className="text-primary">
          Criar conta
        </Typography>
      </View>
    </View>
  );
};

export default LoginPage;

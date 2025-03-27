import React from "react";
import { StyleSheet, View, Text } from "react-native";
import GlobalInput from "../components/global_input";
import GlobalButton from "../components/global_button";
import Typography from "../components/typography";

const RegisterPage = () => {
  return (
    <View className="bg-white flex gap-8 pt-8 px-7 w-full h-screen flex-col items-end justify-start">
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

      <GlobalButton className="w-full rounded-[10px] mt-2">
        <Typography variant="h2-jakarta-bold" className="text-white my-1 ">
          Continuar
        </Typography>
      </GlobalButton>
      <View className="w-full flex-row items-center justify-center mt-4 gap-1">
        <Typography variant="h2-jakarta-medium" className="text-gray-900">
          Já tem uma conta?
        </Typography>
        <Typography variant="h2-jakarta-medium" className="text-primary">
          Entar
        </Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RegisterPage;

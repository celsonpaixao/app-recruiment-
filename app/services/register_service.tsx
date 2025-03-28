import React from "react";
import { StyleSheet, View } from "react-native";
import useAppNavigation from "../hooks/app_navigation";

const RegisterService = () => {
  const { goToSucessRegister } = useAppNavigation();

  return {
    navigatoSucess: () => goToSucessRegister(),
  };
};

export default RegisterService;

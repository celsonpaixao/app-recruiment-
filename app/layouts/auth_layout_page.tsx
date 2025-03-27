import React from "react";
import {
  Keyboard,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import GlobalBackButton from "../components/global_back_button";

const AuthLayoutPage = ({ children }: { children?: React.ReactNode }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="bg-primary w-full h-screen flex-1">
        <View className="w-full h-[70px] mt-[40px] flex-row bg-primary">
          <View className="w-[50%] h-[70px] flex items-start justify-center pl-8 bg-primary rounded-br-[20px]">
            <GlobalBackButton label="Voltar" />
          </View>
          <View className="w-[50%] h-[70px] bg-white rounded-t-[30px]">
            <GlobalBackButton label="Voltar" />
          </View>
        </View>
        <View className="bg-white w-full h-screen flex-1 rounded-tl-[30px] overflow-hidden">
          {children}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AuthLayoutPage;

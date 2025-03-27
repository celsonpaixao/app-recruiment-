import React, { useRef } from "react";
import { View, TextInput, Alert } from "react-native";
import AuthLayoutPage from "../layouts/auth_layout_page";
import Typography from "../components/typography";
import GlobalInput from "../components/global_input";
import GlobalButton from "../components/global_button";
import { useValidationCodeService } from "../services/validation_caode_service";

const ValidationCodePage = ({ route }: { route: any }) => {
  const { email } = route.params || {};
  const service = useValidationCodeService();
  const inputsRef = useRef<TextInput[]>([]);

  return (
    <AuthLayoutPage>
      <View className="flex-1 px-8 pt-8 gap-5">
        <Typography
          variant="h2-jakarta-bold"
          className="text-primary text-[24px]"
        >
          Verificar Email
        </Typography>
        <View>
          <Typography variant="p-jakarta-medium" className="text-gray-500">
            Código de verificação enviado para o endereço de email
          </Typography>
          <Typography variant="p-jakarta-bold" className="text-gray-700">
            {email}
          </Typography>
        </View>

        <View className="flex-row justify-between mt-6">
          {service.code.map((digit, index) => (
            <GlobalInput
              key={index}
              ref={(el) => (inputsRef.current[index] = el!)}
              style={{ width: 50, height: 50 }}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              containerWidth="w-[80px] p-2"
              onChangeText={(value) =>
                service.handleChange(
                  value,
                  index,
                  () => inputsRef.current[index + 1]?.focus(),
                  () => inputsRef.current[index - 1]?.focus()
                )
              }
            />
          ))}
        </View>

        <GlobalButton
          className="text-white rounded-[15px]"
          onPress={service.navigateToResetPass}
        >
          <Typography variant="h3-jakarta-bold" className="text-white">
            Verificar
          </Typography>
        </GlobalButton>

        <View className="flex-row items-center justify-center gap-1 mt-2">
          <Typography variant="h3-jakarta-regular" className="text-gray-700">
            Enviar código novamente em
          </Typography>
          <Typography variant="h3-jakarta-medium" className="text-primary">
            58s
          </Typography>
        </View>
      </View>
    </AuthLayoutPage>
  );
};

export default ValidationCodePage;

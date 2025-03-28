import React, { useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import AuthLayoutPage from "../layouts/auth_layout_page";
import Typography from "../components/typography";
import GlobalInput from "../components/global_input";
import GlobalButton from "../components/global_button";
import { useValidationCodeService } from "../services/validation_caode_service";
import useAppNavigation from "../hooks/app_navigation";
import { COLORS } from "../styles/color_style";
import ValidationCodeInput from "../components/validation_code_Input";

const ValidationCodePage = ({ route }: { route: any }) => {
  const { email } = route.params || {};
  const service = useValidationCodeService();
  const inputsRef = useRef<TextInput[]>([]);
  const { goResetPassword } = useAppNavigation();

  return (
    <AuthLayoutPage>
      <View style={styles.container}>
        <Typography variant="h2-plusjakartasans-semiBold" style={styles.title}>
          Verificar Email
        </Typography>

        <View style={styles.emailContainer}>
          <Typography
            variant="p-plusjakartasans-medium"
            style={styles.emailText}
          >
            Código de verificação enviado para o endereço de email
          </Typography>
          <Typography
            variant="p-plusjakartasans-bold"
            style={styles.emailAddress}
          >
            {email}
          </Typography>
        </View>

        <View style={styles.codeInputContainer}>
          {service.code.map((digit, index) => (
            <ValidationCodeInput
              key={index}
              ref={(el) => (inputsRef.current[index] = el!)}
              value={digit}
              onFilled={() => {
                if (index < service.code.length - 1) {
                  inputsRef.current[index + 1]?.focus();
                }
              }}
              onBackspace={() => {
                if (index > 0) {
                  inputsRef.current[index - 1]?.focus();
                }
              }}
              onChangeText={(value) =>
                service.handleChange(
                  value,
                  index,
                  () => {
                    if (index < service.code.length - 1) {
                      inputsRef.current[index + 1]?.focus();
                    }
                  },
                  () => {
                    if (index > 0) {
                      inputsRef.current[index - 1]?.focus();
                    }
                  }
                )
              }
            />
          ))}
        </View>

        <GlobalButton onPress={goResetPassword}>
          <Typography
            variant="h3-plusjakartasans-bold"
            style={styles.buttonText}
          >
            Verificar
          </Typography>
        </GlobalButton>

        <View style={styles.resendContainer}>
          <Typography
            variant="h3-plusjakartasans-regular"
            style={styles.resendText}
          >
            Enviar código novamente em
          </Typography>
          <Typography
            variant="h3-plusjakartasans-medium"
            style={styles.resendTimer}
          >
            58s
          </Typography>
        </View>
      </View>
    </AuthLayoutPage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    gap: 16,
  },
  title: {
    color: COLORS.primary,
    fontSize: 24,
  },
  emailContainer: {
    marginBottom: 16,
  },
  emailText: {
    color: COLORS.gray[400],
  },
  emailAddress: {
    color: COLORS.gray[700],
  },
  codeInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  verifyButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    marginTop: 16,
  },
  buttonText: {
    color: COLORS.backgroundLight,
  },
  resendContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    marginTop: 2,
  },
  resendText: {
    color: COLORS.gray[800],
  },
  resendTimer: {
    color: COLORS.primary,
  },
});

export default ValidationCodePage;

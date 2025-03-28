import { createStackNavigator } from "@react-navigation/stack";
import SplashPage from "./pages/splash_page";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./resources/app_routes";
import HomePage from "./pages/home_page";
import OnboardingPage from "./pages/onboarding_page";
import AuthPage from "./pages/auth_page";
import PasswordRecoveryPage from "./pages/password_recovery_page";
import ResetPasswordPage from "./pages/reset_password_page";
import ValidationCodePage from "./pages/validation_caode_page";
import SucessRegisterAccoutPage from "./pages/sucess_register_accout_page";
import InterpriseRegisterDataPage from "./pages/interprise_register_data_page";

const StackRouter = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={AppRoutes.MAIN}
          component={SplashPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AppRoutes.HOME}
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AppRoutes.ONBOARDING}
          component={OnboardingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AppRoutes.AUTH}
          component={AuthPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AppRoutes.PASSWORD_RECOVERY}
          component={PasswordRecoveryPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AppRoutes.VALIDATION_CODE}
          component={ValidationCodePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AppRoutes.RESET_PASSWORD}
          component={ResetPasswordPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AppRoutes.SUCESS_REGISTER}
          component={SucessRegisterAccoutPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AppRoutes.INTERPRISE_DATA_REGISTER}
          component={InterpriseRegisterDataPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouter;

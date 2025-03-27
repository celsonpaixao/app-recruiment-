import { createStackNavigator } from "@react-navigation/stack";
import SplashPage from "./pages/splash_page";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./resources/app_routes";
import HomePage from "./pages/home_page";
import OnboardingPage from "./pages/onboarding_page";
import AuthPage from "./pages/auth_page";
import PasswordRecoveryPage from "./pages/password_recovery_page";
import ValidationCaodePage from "./pages/validation_caode_page";
import { useAppNotification } from "./hooks/app_notification";
import ResetPasswordPage from "./pages/reset_password_page";
const Stack = createStackNavigator();
const StackRouter = () => {
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
          component={ValidationCaodePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AppRoutes.RESET_PASSWORD}
          component={ResetPasswordPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouter;

import { CommonActions, useNavigation } from "@react-navigation/native";
import { AppRoutes } from "../resources/app_routes";

const useAppNavigation = () => {
  const navigation = useNavigation<any>();

  const resetNavigation = (route: string, params?: object) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: route, params }],
      })
    );
  };

  return {
    goToHome: () => resetNavigation(AppRoutes.HOME),
    goToOnboarding: () => resetNavigation(AppRoutes.ONBOARDING),
    goToSettings: () => resetNavigation(AppRoutes.SETTINGS),
    goToSucessRegister: () => resetNavigation(AppRoutes.SUCESS_REGISTER),
    goPasswordRecovery: () => navigation.navigate(AppRoutes.PASSWORD_RECOVERY),
    goResetPassword: () => navigation.navigate(AppRoutes.RESET_PASSWORD),
    goResetInterpriseData: () =>
      navigation.navigate(AppRoutes.INTERPRISE_DATA_REGISTER),
    goValidationCode: (email: string) =>
      navigation.navigate(AppRoutes.VALIDATION_CODE, { email }),
    goBack: () => navigation.goBack(),
  };
};

export default useAppNavigation;

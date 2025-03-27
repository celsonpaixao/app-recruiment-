import AppNavigation from "../hooks/app_navigation";

const LoginService = () => {
  const navigator = AppNavigation();
  return {
    navigateToRecoveryPass: () => {
      console.log("Navegação");
      navigator.goPasswordRecovery();
    },
  };
};

export default LoginService;

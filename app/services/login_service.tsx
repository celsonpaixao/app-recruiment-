import useAppNavigation from "../hooks/app_navigation";

const LoginService = () => {
  const { goPasswordRecovery, goToHome } = useAppNavigation();
  return {
    navigateToRecoveryPass: () => goPasswordRecovery(),
    onLogin: () => goToHome(),
  };
};

export default LoginService;

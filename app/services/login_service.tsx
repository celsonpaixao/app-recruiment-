import useAppNavigation from "../hooks/app_navigation";
import useAppValidator from "../hooks/app_validator";
import AuthRepository from "../repository/auth_repository";
import { useSnackbarStore } from "../stores/snackbarStore";

const LoginService = () => {
  const { goPasswordRecovery } = useAppNavigation();
  const { validate } = useAppValidator();
  const { loginUser } = AuthRepository();
  const { showSnackbar } = useSnackbarStore();

  return {
    navigateToRecoveryPass: () => goPasswordRecovery(),
    onLogin: async (email: string, password: string) => {
      if (!validate("email", email)) {
        showSnackbar(
          "E-mail inválido. Por favor, insira um e-mail válido.",
          "alert"
        );
        return;
      }

      if (!validate("password", password)) {
        showSnackbar("A senha deve ter pelo menos 6 caracteres.", "alert");
        return;
      }

      try {
        const user = await loginUser(email, password);
        console.log("Usuário logado:", user.uid);
        showSnackbar("Login realizado com sucesso!", "success");
      } catch (error: any) {
        console.error("Erro no login:", error.message);
        showSnackbar(error.message, "error");
      }
    },
  };
};

export default LoginService;
